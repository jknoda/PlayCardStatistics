import { Component, OnInit, Output, EventEmitter, Input, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs';
import { iDropDown } from '../model/iDropDown.model';
import { SelecionarService } from './selecionar.service';

@Component({
  selector: 'selecionar',
  templateUrl: './selecionar.component.html',
  styleUrls: ['./selecionar.component.css'],
  providers: [SelecionarService]
})

export class SelecionarComponent implements OnInit, OnDestroy {
  @Output() anoSel = new EventEmitter<Number>();
  @Output() jogadorSel = new EventEmitter<Number>();
  @Output() parceiroSel = new EventEmitter<Number>();
  @Output() callConsultar = new EventEmitter<any>();

  getNomeSubscription: Subscription;

  avatars: iDropDown[];
  selectedAvatar: iDropDown;

  avatarsPar: iDropDown[];
  selectedAvatarPar: iDropDown;

  anoLista: iDropDown[] = [];
  selectedAno: iDropDown;

  @Input() mostraAno: boolean = true;
  @Input() mostraConsultar: boolean = true;

  constructor(private service: SelecionarService) {
    const ano = new Date().getFullYear();
    for (let i = ano-3; i <= ano; i++) {
      var _this = this
      _this.anoLista.push({name: i.toString(),code: i.toString(), imagem:""});
    }    
    this.selectedAno = this.anoLista.slice(-1)[0];
    this.avatars = JSON.parse(localStorage.getItem('avatars'));
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
    }
    this.avatars.forEach((value)=>{
      let dados = {
        jogador: parseInt(value.code),
      };
      this.getNomeSubscription = this.service.getNome(dados).subscribe(
        data => {
            if (typeof(data) != 'undefined')
            {
              value.name = data[0]["nome"];
            }
        },
        err => { console.log(err) },
        () => this.setJogador()
      );      
    });
    this.avatarsPar = JSON.parse(localStorage.getItem('avatarspar'));
    if (this.avatarsPar == null){
      this.avatarsPar = [
        {name: "mitsue",code:"50", imagem: "avatar50"},
        {name: "mie",code:"51", imagem: "avatar51"},
        {name: "paula",code:"52", imagem: "avatar52"},
        {name: "sung",code:"53", imagem: "avatar53"},
        {name: "tiemi",code:"54", imagem: "avatar54"},
        {name: "dico",code:"55", imagem: "avatar55"},
        {name: "celso",code:"56", imagem: "avatar56"},
      ];
    }
    this.avatarsPar.forEach((value)=>{
      let dados = {
        jogador: parseInt(value.code),
      };
      this.getNomeSubscription = this.service.getNome(dados).subscribe(
        data => {
            if (typeof(data) != 'undefined')
            {
              value.name = data[0]["nome"];
            }
        },
        err => { console.log(err) },
        () => this.setParceiro()
      );      
    });
  }

  ngOnInit(): void {
    this.onAno(0);
  }

  setJogador(){
    let aux = localStorage.getItem("jogador");
    if (aux != null){
      this.selectedAvatar = JSON.parse(aux);
    }
    else{
      this.selectedAvatar = this.avatars[0];
    }
    localStorage.setItem('avatars', JSON.stringify(this.avatars));
    this.onJogador(0);
  }

  setParceiro(){
    let aux = localStorage.getItem("parceiro");
    if (aux != null){
      this.selectedAvatarPar = JSON.parse(aux);
    }
    else{
      this.selectedAvatarPar = this.avatarsPar[0];
    }    
    localStorage.setItem('avatarspar', JSON.stringify(this.avatarsPar));
    this.onParceiro(0);
  }

  consultar(){
    this.callConsultar.emit(null);
  }

  onAno(e){
    this.anoSel.emit(parseInt(this.selectedAno.code));
  }
  onJogador(e){
    localStorage.setItem('jogador', JSON.stringify(this.selectedAvatar));
    this.jogadorSel.emit(parseInt(this.selectedAvatar.code));
  }
  onParceiro(e){
    localStorage.setItem('parceiro', JSON.stringify(this.selectedAvatarPar));
    this.parceiroSel.emit(parseInt(this.selectedAvatarPar.code));
  }  

  ngOnDestroy() {
    this.getNomeSubscription.unsubscribe();
  }
}
