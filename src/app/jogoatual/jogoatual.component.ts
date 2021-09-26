import { Component, OnInit } from '@angular/core';
import { NowModel } from '../model/now.model';
import { JogoatualService } from './jogoatual.service';

@Component({
  selector: 'jogoatual',
  templateUrl: './jogoatual.component.html',
  styleUrls: ['./jogoatual.component.css']
})
export class JogoatualComponent implements OnInit {

  dados : any;
  dadosOk = false;
  duplaA = "";
  duplaB = "";
  jogadorAtual = 0;
  avatar = ["avatar00.png", "","","",""];
  jogoFinalizado = "";
  bjogoFinalizado = false;
  jogadoresAClass = "";
  jogadoresBClass = "";
  atualClass = "";
  morto = "";
  vul = "";
  dataAtual = "";

  private now: NowModel = new NowModel();

  constructor(private service: JogoatualService) {
  }

  ngOnInit(): void {
    this.getNow("");
  }

  getNow(e): void {
    this.dadosOk = false;
    let parm = {
        sala: 0
    };
    this.service.getNow(parm).subscribe(
      data => {
          if (typeof(data) != 'undefined')
          {
              this.now = data;
              this.dados = JSON.parse(data[0]["dados"]);
              //console.log('Mapa:', this.dados["MapaJogo"]["seqJogadorAtual"]);
              this.jogadorAtual = this.dados["MapaJogo"]["seqJogadorAtual"];
              this.duplaA = this.dados["NickName"][0] + " / " + this.dados["NickName"][1];
              this.duplaB = this.dados["NickName"][2] + " / " + this.dados["NickName"][3];
              this.dadosOk = true;

              this.avatar[1] = "avatar" + this.dados["AvatarJogadores"][0].toString().padStart(2, '0')+".png";
              this.avatar[2] = "avatar" + this.dados["AvatarJogadores"][1].toString().padStart(2, '0')+".png";
              this.avatar[3] = "avatar" + this.dados["AvatarJogadores"][2].toString().padStart(2, '0')+".png";
              this.avatar[4] = "avatar" + this.dados["AvatarJogadores"][3].toString().padStart(2, '0')+".png";

              if ( this.dados["Placar01"] >= 3000 || this.dados["Placar02"] >= 3000){
                this.jogoFinalizado = "Jogo finalizado";    
                this.bjogoFinalizado = true;  
                this.atualClass = "finalizado";
                if (this.dados["Placar01"] > this.dados["Placar02"]){
                  this.jogadoresAClass = "vencedor";
                  this.jogadoresBClass = "perdedor";
                }
                else
                {
                  this.jogadoresAClass = "perdedor";
                  this.jogadoresBClass = "vencedor";
                }
              }
              else{
                this.jogoFinalizado = "Jogo em andamento";    
                this.atualClass = "andamento";
              }

              this.morto = "";
              for (let i = 0; i < 4; i++) {
                if ( this.dados["MapaJogo"]["pegouMorto"][i]){
                    this.morto += this.dados["NickName"][i];
                    this.morto += this.dados["MapaJogo"]["baixou"][i] ? " (Baixou)\n" : " (Não baixou)\n";
                }
              }
              if (this.morto == ""){
                this.morto = "Ninguém";
              }
              this.vul = "";
              for (let i = 0; i < 4; i++) {
                let vulPto = this.dados["MapaJogo"]["Vul"][i];
                if ( vulPto > 0){
                    this.vul += this.dados["NickName"][i] + " Pontos: " + vulPto.toString();
                    this.vul += this.dados["MapaJogo"]["baixou"][i] ? " (Baixou)\n" : " (Não baixou)\n";
                }
              }
              if (this.vul == ""){
                this.vul = "Ninguém";
              }
            
              this.dataAtual = this.dataForma(data[0]["data"]);
          }
      },
      err => { console.log(err) }
    );
  }

  dataForma(data):string{
    let dataAux = new Date(data);
    //console.log('data:', typeof(dataAux));
    let dia  = dataAux.getDate().toString().padStart(2, '0');
    let mes  = (dataAux.getMonth()+1).toString().padStart(2, '0');
    let ano  = dataAux.getFullYear();
    let hora = dataAux.getHours().toString().padStart(2, '0');
    let min = dataAux.getMinutes().toString().padStart(2, '0');
    let seg = dataAux.getSeconds().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
  }

}
