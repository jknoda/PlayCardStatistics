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
              console.log('Mapa:', this.dados["MapaJogo"]["seqJogadorAtual"]);
              this.jogadorAtual = this.dados["MapaJogo"]["seqJogadorAtual"];
              this.duplaA = this.dados["NickName"][0] + " / " + this.dados["NickName"][1];
              this.duplaB = this.dados["NickName"][2] + " / " + this.dados["NickName"][3];
              this.dadosOk = true;
          }
      },
      err => { console.log(err) }
    );
  }

}
