import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { iDropDown } from '../model/iDropDown.model';
import { VersusModel } from '../model/versus.model';
import { VersusService } from './versus.service';

@Component({
  selector: 'versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.css'],
  providers: [VersusService]
})
export class VersusComponent implements OnInit, OnDestroy {
  getDadosVersusSubscription: Subscription;
  getVersusSubscription: Subscription;

  jogadorA = 0;
  parceiroA = 0;
  jogadorB = 0;
  parceiroB = 0;
  ano = 0;

  mostrar = false;
  processando = false;

  resultado = "";
  imgVencA : any;
  imgVencB : any;

  avatars: iDropDown[];

  private versus: VersusModel = new VersusModel();

  constructor(private service: VersusService) { }

  ngOnInit(): void {
  }

  consultarDuplas(e){
    this.processando = true;
    this.mostrar = false;
    let dadosDupla = {
      dupla01a: this.jogadorA,
      dupla01b: this.parceiroA,
      dupla02a: this.jogadorB,
      dupla02b: this.parceiroB
    };
    this.getDadosVersusSubscription = this.service.getDadosVersus(dadosDupla).subscribe(
      data => {
          if (typeof(data) != 'undefined')
          {
            this.versus = data;
          }
      },
      err => { console.log(err) },
      () => this.gerarversus(this.versus)
    )
  }

  gerarversus(dados){
    this.getVersusSubscription = this.service.getVersus(dados).subscribe(
      data => {
          if (typeof(data) != 'undefined')
          {
            this.versus = data;
            this.resultado = "";
            this.avatars = JSON.parse(localStorage.getItem("avatars"));
            if (this.avatars == null){
              this.avatars = [
                {name: "mitsue",code:"50", imagem: "avatar50"},
                {name: "mie",code:"51", imagem: "avatar51"},
                {name: "paula",code:"52", imagem: "avatar52"},
                {name: "sung",code:"53", imagem: "avatar53"},
                {name: "tiemi",code:"54", imagem: "avatar54"},
                {name: "dico",code:"55", imagem: "avatar55"},
                {name: "celso",code:"56", imagem: "avatar56"},
              ];
              localStorage.setItem('avatars', JSON.stringify(this.avatars));
            }
            let _this = this;
            this.avatars.forEach(function (item) {
              if (_this.versus[0]["resultado"] == "A"){
                if (parseInt(item["code"]) == _this.jogadorA || parseInt(item["code"]) == _this.parceiroA){
                  _this.resultado += item["name"] + " ";
                  if (parseInt(item["code"]) == _this.jogadorA){
                    _this.imgVencA = item["imagem"];
                  }
                  else{
                    _this.imgVencB = item["imagem"];
                  }
                }
              }
              else{
                if (parseInt(item["code"]) == _this.jogadorB || parseInt(item["code"]) == _this.parceiroB){
                  _this.resultado += item["name"] + " ";
                  if (parseInt(item["code"]) == _this.jogadorB){
                    _this.imgVencA = item["imagem"];
                  }
                  else{
                    _this.imgVencB = item["imagem"];
                  }
                }
              }
              if (_this.imgVencB == null){
                _this.imgVencB = _this.imgVencA;
              }
            });
            this.processando = false;
            this.mostrar = true;
          }
      },
      err => { console.log(err) }
    )
  }

  apresentarResultado(){

  }

  onJogadorA(jogador){
    this.jogadorA = jogador;
    //console.log('ja:',this.jogadorA);
  }
  onParceiroA(parceiro){
    this.parceiroA = parceiro;
  }  
  onJogadorB(jogador){
    this.jogadorB = jogador;
  }
  onParceiroB(parceiro){
    this.parceiroB = parceiro;
  }  

  ngOnDestroy() {
    this.getDadosVersusSubscription.unsubscribe();
    this.getVersusSubscription.unsubscribe();
  }
}
