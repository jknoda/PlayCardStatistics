import { BoundElementProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JogoModel } from '../model/jogo.model';
import { RodadaModel } from '../model/rodadas.model';
import { UltimapartidaService } from './ultimapartida.service';

@Component({
  selector: 'ultimapartida',
  templateUrl: './ultimapartida.component.html',
  styleUrls: ['./ultimapartida.component.css']
})
export class UltimapartidaComponent implements OnInit {
  jogador = 0;
  parceiro = 0;
  ano = 0;

  mostrar = false;
  avatar = ["avatar00.png", "","","",""];
  dataInicial = "";
  dataFinal = "";

  private ultimajogada: JogoModel = new JogoModel();
  private rodadas: RodadaModel = new RodadaModel();

  constructor(private service: UltimapartidaService) {
  }

  ngOnInit(): void {
  }

  consultar(e) {
    this.mostrar = false;
    let idf = 0;
    let dados = {
        jogador: this.jogador,
        parceiro: this.parceiro,
    };
    this.service.getDados(dados).subscribe(
      data => {
          if (typeof(data) != 'undefined')
          {
            this.ultimajogada = data;
            
            if (typeof(this.ultimajogada[0]) != 'undefined'){
              idf = this.ultimajogada[0]["idf"];
              this.avatar[1] = "avatar" + this.ultimajogada[0]["ava01"].toString().padStart(2, '0')+".png";
              this.avatar[2] = "avatar" + this.ultimajogada[0]["ava02"].toString().padStart(2, '0')+".png";
              this.avatar[3] = "avatar" + this.ultimajogada[0]["avb01"].toString().padStart(2, '0')+".png";
              this.avatar[4] = "avatar" + this.ultimajogada[0]["avb02"].toString().padStart(2, '0')+".png";
              this.dataInicial = this.dataForma(this.ultimajogada[0]["inicio"]);
              this.dataFinal = this.dataForma(this.ultimajogada[0]["fim"]);
              //this.mostrar = true;
            }
            //console.log('Avatar: ', this.avatar);
          }
      },
      err => { console.log(err) },
      () => this.getRodada(idf)
    )
  }
      
  getRodada(idf) {
    let dados = {
      idf:idf,
      ordem:"ASC"
    };
    this.service.getDadosRodada(dados).subscribe(
      (data:any) => {
          if (typeof(data) != 'undefined')
          {
            let ptoa = 0;
            let ptob = 0;
            data.forEach(element => {
              element.ptotota = element.ptoa + ptoa;
              element.ptototb = element.ptob + ptob;
              ptoa = element.ptotota;
              ptob = element.ptototb;

              element.avVulA = this.avatar[element.vula];
              element.avVulB = this.avatar[element.vulb];
              element.avMorA = this.avatar[element.mortoa];
              element.avMorB = this.avatar[element.mortob];
              if (element.batidaa != 0){
                element.avBateu = this.avatar[element.batidaa];
              }
              else{
                element.avBateu = this.avatar[element.batidab];
              }
              this.mostrar = true;
            });
            //console.log('data: ',data);
            this.rodadas = data;
            //console.log('rodadas: ', this.rodadas);
          }
      },
      err => { console.log(err) }
    )
  }

  onAno(ano){
      this.ano = ano;
  }
  onJogador(jogador){
    this.jogador = jogador;
  }
  onParceiro(parceiro){
    this.parceiro = parceiro;
  }
''
  dataForma(data):string{
    let dataAux = new Date(data);
    //console.log('data:', typeof(dataAux));
    let dia  = dataAux.getDate().toString().padStart(2, '0');
    let mes  = (dataAux.getMonth()+1).toString().padStart(2, '0');
    let ano  = dataAux.getFullYear();
    let hora = dataAux.getHours().toString().padStart(2, '0');
    let min = dataAux.getMinutes().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} ${hora}:${min}`;
  }
}
