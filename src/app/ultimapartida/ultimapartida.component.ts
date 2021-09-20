import { Component, OnInit } from '@angular/core';
import { JogoModel } from '../model/jogo.model';
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

  private ultimajogada: JogoModel = new JogoModel();
  jogadorA01 = "";
  jogadorA02 = "";
  jogadorB01 = "";
  jogadorB02 = "";

  constructor(private service: UltimapartidaService) {
  }

  ngOnInit(): void {
  }

  consultar(): void {
    let dados = {
        jogador: this.jogador,
        parceiro: this.parceiro,
    };
    this.service.getDados(dados).subscribe(
      data => {
          if (typeof(data) != 'undefined')
          {
            this.ultimajogada = data;
            this.gerarDados(this.ultimajogada);
            this.mostrar = true;
          }
      },
      err => { console.log(err) }
    );
  }

  gerarDados(ultimajogada){
    this.jogadorA01 = ultimajogada[0]["joga01"];
    this.jogadorA02 = ultimajogada[0]["joga02"];
    this.jogadorB01 = ultimajogada[0]["jogb01"];
    this.jogadorB02 = ultimajogada[0]["jogb02"];
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

}
