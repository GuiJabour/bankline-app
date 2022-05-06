import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { CorrentistaService } from 'src/app/services/correntista.service';
@Component({
  selector: 'app-movimentacoao-list',
  templateUrl: './movimentacoao-list.component.html',
  styleUrls: ['./movimentacoao-list.component.css']
})
export class MovimentacoaoListComponent implements OnInit {

  constructor(private movimentacaoService: MovimentacaoService, private correntistaService: CorrentistaService) { }

  correntistas:any;
  correntista:any;
  movimentacoes:any;

  ngOnInit(): void {
    this.exibirCorrentistas();
  }

  listMovimentacoes(): void {
    this.movimentacaoService.findByIdConta(this.correntista.id)
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
