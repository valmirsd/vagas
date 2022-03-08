import { Component, OnInit } from '@angular/core';
import { subscribeOn, Subscriber } from 'rxjs';
import {Vaga} from '../models/Vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }
  cadastrar(){
    this._vagasService.cadastroVaga(this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err =>{console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural";

  }

  atualizar(id:number){
    this._vagasService.atualizarVagas(id,this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("Erro ao atualizar")}
    );

    window.location.href = "/mural";
      
  }

  excluir(id: number){
    this._vagasService.removerVaga(id).subscribe(
      vaga =>{this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao excluir")}
    );

    window.location.href = "/mural";

  }
  
}
