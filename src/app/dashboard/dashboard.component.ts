import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DashboardModel } from './dashboard.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  avatars: Avatar[];
  selectedAvatar: Avatar;

  data: any;
  chartOptions: any;
  
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

  private dashboard: DashboardModel = new DashboardModel();

  constructor(private service: DashboardService) {
    this.avatars = [
      /*
      {name: "avatar01",code:"01"},
      {name: "avatar02",code:"02"},
      {name: "avatar03",code:"03"},
      {name: "avatar04",code:"04"},
      {name: "avatar05",code:"05"},
      {name: "avatar06",code:"06"},
      */
      {name: "avatar50",code:"50"},
      {name: "avatar51",code:"51"},
      {name: "avatar52",code:"52"},
      {name: "avatar53",code:"53"},
      {name: "avatar54",code:"54"},
      {name: "avatar55",code:"55"},
      {name: "avatar56",code:"56"},
      //{name: "avatar90",code:"90"},
    ];
    this.selectedAvatar = this.avatars[0];
  }

  ngOnInit(): void {
  }

  consultar(): void {
    let dados = {
        jogador: parseInt(this.selectedAvatar.code),
        ano: 2021,
        mesini: 1,
        mesfim: 12
    };
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
    let index = 0; 
    let vulindex = 0;
    let indexpartidas = 0;
    let venceu = 0;
    let as = 0;
    let al = 0;
    let cs = 0;
    let cl = 0;
    let rl = 0;
    let rs = 0;
    let vulpto = 0;
    let pto = 0;
    let q_venceu = -99;
    dashboard.forEach(function (value) {
      if (value.ptoa != 0 || value.ptob != 0){
        index++;
      }
      if (q_venceu != value.idf){
        if (value.venceu){
          venceu++;
        }
        q_venceu = value.idf;
        indexpartidas++;
      }
      if (value.vulpto > 0){
        vulindex++;
      }
      as += value.as;
      al += value.al;
      cs += value.cs;
      cl += value.cl;
      rs += value.rs;
      rl += value.rl;
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
    this.p_venceu = venceu;
    this.p_as = as;
    this.p_al = al;
    this.p_cs = cs;
    this.p_cl = cl;
    this.p_rs = rs;
    this.p_rl = rl;
    this.p_totalpartidas = indexpartidas;
    let perdeu = indexpartidas - venceu;

    this.data = {
      labels: ['Vitórias','Derrotas'],
      datasets: [
          {
              data: [venceu, perdeu],
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

}


interface Avatar {
  name: string,
  code: string
}