import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DashboardModel } from './dashboard.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  avatars: iDropDown[];
  selectedAvatar: iDropDown;

  avatarsPar: iDropDown[];
  selectedAvatarPar: iDropDown;

  anoLista: iDropDown[] = [];
  selectedAno: iDropDown;

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

  private dashboard: DashboardModel = new DashboardModel();

  constructor(private service: DashboardService) {
    const ano = new Date().getFullYear();
    for (let i = ano-3; i <= ano; i++) {
      var _this = this
      _this.anoLista.push({name: i.toString(),code: i.toString(), imagem:""});
    }
    this.selectedAno = this.anoLista.slice(-1)[0];

    this.avatars = [
      {name: "avatar50",code:"50", imagem: "avatar50"},
      {name: "avatar51",code:"51", imagem: "avatar51"},
      {name: "avatar52",code:"52", imagem: "avatar52"},
      {name: "avatar53",code:"53", imagem: "avatar53"},
      {name: "avatar54",code:"54", imagem: "avatar54"},
      {name: "avatar55",code:"55", imagem: "avatar55"},
      {name: "avatar56",code:"56", imagem: "avatar56"},
    ]    
    this.selectedAvatar = this.avatars[0];
    this.avatars.forEach((value)=>{
      let dados = {
        jogador: parseInt(value.code),
      };
      this.service.getNome(dados).subscribe(
        data => {
            if (typeof(data) != 'undefined')
            {
              console.log('data:',data[0]["nome"]);
              value.name = data[0]["nome"];
            }
        },
        err => { console.log(err) }
      );      
    });
    this.avatarsPar = [
      {name: "avatar50",code:"50", imagem: "avatar50"},
      {name: "avatar51",code:"51", imagem: "avatar51"},
      {name: "avatar52",code:"52", imagem: "avatar52"},
      {name: "avatar53",code:"53", imagem: "avatar53"},
      {name: "avatar54",code:"54", imagem: "avatar54"},
      {name: "avatar55",code:"55", imagem: "avatar55"},
      {name: "avatar56",code:"56", imagem: "avatar56"},
    ];
    this.selectedAvatarPar = this.avatarsPar[0];
    this.avatarsPar.forEach((value)=>{
      let dados = {
        jogador: parseInt(value.code),
      };
      this.service.getNome(dados).subscribe(
        data => {
            if (typeof(data) != 'undefined')
            {
              console.log('data:',data[0]["nome"]);
              value.name = data[0]["nome"];
            }
        },
        err => { console.log(err) }
      );      
    });
  }

  ngOnInit(): void {
  }

  consultar(): void {
    let dados = {
        jogador: parseInt(this.selectedAvatar.code),
        parceiro: parseInt(this.selectedAvatarPar.code),
        ano: parseInt(this.selectedAno.code),
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


interface iDropDown {
  name: string,
  code: string
  imagem: string;
}