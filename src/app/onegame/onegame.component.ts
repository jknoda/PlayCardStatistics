import { Component, OnInit } from '@angular/core';
import { iDropDown } from '../model/iDropDown.model';
import { JogoModel } from '../model/jogo.model';
import { RodadaModel } from '../model/rodadas.model';
import { OnegameService } from './onegame.service';

@Component({
  selector: 'onegame',
  templateUrl: './onegame.component.html',
  styleUrls: ['./onegame.component.css']
})
export class OnegameComponent implements OnInit {
  anoLista: iDropDown[] = [];
  selectedAno: iDropDown;

  mesLista: iDropDown[] = [];
  selectedMes: iDropDown;

  mostrar = false;
  selecionar = false;

  jogoLista: iDropDown[] = [];
  selectedJogo: iDropDown;

  private jogos: any;
  private ultimajogada: JogoModel = new JogoModel();

  avatar = ["avatar00.png", "","","",""];
  dataInicial = "";
  dataFinal = "";
  private rodadas: RodadaModel = new RodadaModel();

  constructor(private service: OnegameService) {
    const ano = new Date().getFullYear();
    for (let i = ano-3; i <= ano; i++) {
      var _this = this
      _this.anoLista.push({name: i.toString(),code: i.toString(), imagem:""});
    }    
    this.selectedAno = this.anoLista.slice(-1)[0];

    this.mesLista = [
      {name:"Janeiro",code:"1",imagem:""},
      {name:"Fevereiro",code:"2",imagem:""},
      {name:"Março",code:"3",imagem:""},
      {name:"Abril",code:"4",imagem:""},
      {name:"Maio",code:"5",imagem:""},
      {name:"Junho",code:"6",imagem:""},
      {name:"Julho",code:"7",imagem:""},
      {name:"Agosto",code:"8",imagem:""},
      {name:"Setembro",code:"9",imagem:""},
      {name:"Outubro",code:"10",imagem:""},
      {name:"Novembro",code:"11",imagem:""},
      {name:"Dezembro",code:"12",imagem:""}
    ]
    let data = new Date;
    let ind = data.getMonth();
    this.selectedMes = this.mesLista[ind];
  }

  ngOnInit(): void {
  }

  selecionarJogo(){
    this.selecionar = true;
    let dados = {
      mes: parseInt(this.selectedMes.code),
      ano: parseInt(this.selectedAno.code)
    };
    this.service.getDados(dados).subscribe(
      data => {
          if (typeof(data) != 'undefined')
          {
            this.jogos = data;
          }
      },
      err => { console.log(err) },
      () => this.listarJogos(this.jogos)
    )
  }

  listarJogos(jogos)
  {
    this.jogoLista = [];
    let ind = 0;
    jogos.forEach(item => {
      let data = new Date(item.inicio);
      this.jogoLista.push({
        code: ind.toString(),
        name: "Dia: " + data.getDate().toString().padStart(2,'0') + " " + data.getHours().toString().padStart(2,'0')+":"+data.getMinutes().toString().padStart(2,'0') + " - " + item.joga01 + "/" + item.joga02 + " x " + item.jogb01 + "/" + item.jogb02,
        imagem: ""
      });
      ind++;
    });
    this.selectedJogo = this.jogoLista.slice(-1)[0];
    this.selecionar = true;
  }

  consultar(){
    this.mostrar = true;
    let ind = parseInt(this.selectedJogo.code);
    this.ultimajogada = this.jogos[ind];
    let idf = 0;
    //console.log('ultim: ',ind,this.ultimajogada);
    idf = this.ultimajogada["idf"];
    this.avatar[1] = "avatar" + this.ultimajogada["ava01"].toString().padStart(2, '0')+".png";
    this.avatar[2] = "avatar" + this.ultimajogada["ava02"].toString().padStart(2, '0')+".png";
    this.avatar[3] = "avatar" + this.ultimajogada["avb01"].toString().padStart(2, '0')+".png";
    this.avatar[4] = "avatar" + this.ultimajogada["avb02"].toString().padStart(2, '0')+".png";
    this.dataInicial = this.dataForma(this.ultimajogada["inicio"]);
    this.dataFinal = this.dataForma(this.ultimajogada["fim"]);
    this.getRodada(idf)
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
            this.rodadas = data;
          }
      },
      err => { console.log(err) }
    )
  }

  onChangeMes(e){
    this.selecionar = false;
    this.mostrar = false;
  }

  onChangeAno(e){
    this.selecionar = false;
    this.mostrar = false;
  }

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