import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { JogadasModel } from '../model/jogadas.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  jogador = 0;
  parceiro = 0;
  ano = 0;

  data: any;
  chartOptions: any;
  pl_partida = '';

  mostrar = false;
  p_venceu = 0;
  p_as = 0; 
  p_al = 0; 
  p_cs = 0; 
  p_cl = 0; 
  p_rl = 0; 
  p_rs = 0; 
  p_vulpto = 0;
  p_pto = 0;
  p_totalpartidas = 0;

  private dashboard: JogadasModel = new JogadasModel();

  constructor(private service: DashboardService) {
  }

  ngOnInit(): void {
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

  consultar(): void {
    let dados = {
        jogador: this.jogador,
        parceiro: this.parceiro,
        ano: this.ano,
        mesini: 1,
        mesfim: 12
    };
    console.log('dados: ',dados);
    this.service.getDados(dados).subscribe(
      data => {
          if (typeof(data) != 'undefined')
          {
              this.dashboard = data;
              this.totalizarDados(this.dashboard);
              this.mostrar = true;
          }
      },
      err => { console.log(err) }
    );
  }

  totalizarDados(dashboard)
  {
    this.zerar();
    let index = 0; 
    let vulindex = 0;
    let indexpartidas = 0;
    let vulpto = 0;
    let pto = 0;
    let q_venceu = -99;
    let _this = this;
    dashboard.forEach(function (value) {
      if (value.ptoa != 0 || value.ptob != 0){
        index++;
      }
      if (q_venceu != value.idf){
        if (value.venceu){
          _this.p_venceu++;
        }
        q_venceu = value.idf;
        indexpartidas++;
      }
      if (value.vulpto > 0){
        vulindex++;
      }
      _this.p_as += value.as;
      _this.p_al += value.al;
      _this.p_cs += value.cs;
      _this.p_cl += value.cl;
      _this.p_rs += value.rs;
      _this.p_rl += value.rl;
      vulpto += value.vulpto;
      if (value.jog == 'a'){
        pto += value.ptoa;
      }
      else {
        pto += value.ptob;
      }
    });
    if (index != 0){
      this.p_pto = pto / index;
    }
    else
    {
      this.p_pto = 0;
    }
    if (vulindex != 0){
      this.p_vulpto = vulpto / vulindex;
    }
    else {
      this.p_vulpto = 0;
    }

    this.p_vulpto = Math.round(this.p_vulpto);
    this.p_pto = Math.round(this.p_pto);
    this.p_totalpartidas = indexpartidas;
    let perdeu = indexpartidas - this.p_venceu;
    this.pl_partida = this.p_venceu > 1 ? 's' : '';

    this.data = {
      labels: ['Vitórias','Derrotas'],
      datasets: [
          {
              data: [this.p_venceu, perdeu],
              backgroundColor: [
                  "#17ee28",
                  "#e01a15"
              ],
              hoverBackgroundColor: [
                  "#abedb1",
                  "#e7b7b6"
              ]
          }
      ]
    }

  }

  zerar(){
    this.p_venceu = 0;
    this.p_as = 0; 
    this.p_al = 0; 
    this.p_cs = 0; 
    this.p_cl = 0; 
    this.p_rl = 0; 
    this.p_rs = 0; 
    this.p_vulpto = 0;
    this.p_pto = 0;
    this.p_totalpartidas = 0;
  }

}