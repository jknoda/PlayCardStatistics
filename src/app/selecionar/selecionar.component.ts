import { Component, OnInit, Output, EventEmitter, ComponentFactoryResolver  } from '@angular/core';
import { SelecionarService } from './selecionar.service';

@Component({
  selector: 'selecionar',
  templateUrl: './selecionar.component.html'
})

export class SelecionarComponent implements OnInit {
  @Output() anoSel = new EventEmitter<Number>();
  @Output() jogadorSel = new EventEmitter<Number>();
  @Output() parceiroSel = new EventEmitter<Number>();

  avatars: iDropDown[];
  selectedAvatar: iDropDown;

  avatarsPar: iDropDown[];
  selectedAvatarPar: iDropDown;

  anoLista: iDropDown[] = [];
  selectedAno: iDropDown;

  constructor(private service: SelecionarService) {
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
              value.name = data[0]["nome"];
            }
        },
        err => { console.log(err) }
      );      
    });
  }

  ngOnInit(): void {
    this.onAno(0);
    this.onJogador(0);
    this.onParceiro(0);
  }

  onAno(e){
    this.anoSel.emit(parseInt(this.selectedAno.code));
  }
  onJogador(e){
    this.jogadorSel.emit(parseInt(this.selectedAvatar.code));
  }
  onParceiro(e){
    this.parceiroSel.emit(parseInt(this.selectedAvatarPar.code));
  }  
}

interface iDropDown {
  name: string,
  code: string
  imagem: string;
}