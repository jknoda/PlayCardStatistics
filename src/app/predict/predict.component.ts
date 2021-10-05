import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PredictModel } from '../model/predict.model.';
import { PredictService } from './predict.service';

@Component({
  selector: 'predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css'],
  providers: [PredictService]
})
export class PredictComponent implements OnInit, OnDestroy {
  getPredictSubscription: Subscription;
  getDadosDuplaSubscription: Subscription;

  jogador = 0;
  parceiro = 0;
  ano = 0;
  resultado = "";
  resultadoImg = "";

  processando = false;
  mostrar = false;

  private predict: PredictModel = new PredictModel();

  constructor(private service: PredictService) {
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

  consultar(e) {
    this.processando = true;    
    this.mostrar = false;
    let dadosDupla = {
      jogador: this.jogador,
      parceiro: this.parceiro,
      ano: this.ano
    };
    this.getDadosDuplaSubscription = this.service.getDadosDupla(dadosDupla).subscribe(
      data => {
          if (typeof(data) != 'undefined')
          {
            this.predict = data;
            //console.log('dados:',this.predict);
          }
      },
      err => { console.log(err) },
      () => this.gerarpredict(this.predict)
    )
  }

  gerarpredict(dados){
    this.getPredictSubscription = this.service.getPredict(dados).subscribe(
      data => {
          if (typeof(data) != 'undefined')
          {
            this.mostrar = true;
            this.predict = data;
            //console.log('predict:',this.predict);
            if (this.predict[0]["resultado"] == "V"){
              this.resultado = "Vencedora";     
              this.resultadoImg = "like.png";       
            }
            else{
              this.resultado = "Perdedora";
              this.resultadoImg = "dislike.png";
            }
            this.processando = false;
          }
      },
      err => { console.log(err) }
    )
  }

  ngOnDestroy() {
    this.getDadosDuplaSubscription.unsubscribe();
    this.getPredictSubscription.unsubscribe();
  }
}
