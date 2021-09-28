import { Component, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'selecionarduplas',
  templateUrl: './selecionarduplas.component.html',
  styleUrls: ['./selecionar.component.css']
})

export class SelecionarduplasComponent implements OnInit {
  @Output() ano = new EventEmitter<Number>();
  @Output() jogadorA = new EventEmitter<Number>();
  @Output() parceiroA = new EventEmitter<Number>();
  @Output() jogadorB = new EventEmitter<Number>();
  @Output() parceiroB = new EventEmitter<Number>();
  @Output() nomeJogA = new EventEmitter<String>();
  @Output() nomeParA = new EventEmitter<String>();
  @Output() nomeJogB = new EventEmitter<String>();
  @Output() nomeParB = new EventEmitter<String>();

  @Output() callConsultar = new EventEmitter<any>();
  
  constructor() {}

  ngOnInit(): void {
  }

  consultarDuplas(e){
    this.callConsultar.emit(null);
  }

  onAno(ano){
    this.ano.emit(parseInt(ano));
  }

  onJogadorA(jogador){
    //console.log('joga:',jogador);
    this.jogadorA.emit(parseInt(jogador));
  }
  onParceiroA(parceiro){
    //console.log('para:',parceiro);
    this.parceiroA.emit(parseInt(parceiro));
  }  
  onJogadorB(jogador){
    //console.log('jogb:',jogador);
    this.jogadorB.emit(parseInt(jogador));
  }
  onParceiroB(parceiro){
    //console.log('parb:',parceiro);
    this.parceiroB.emit(parseInt(parceiro));
  }  

}
