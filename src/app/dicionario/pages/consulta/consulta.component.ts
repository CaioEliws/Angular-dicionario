import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalConsultaDefinicaoComponent } from '../../../shared/components/modal-consulta-definicao/modal-consulta-definicao.component';
import { PalavraService } from '../../../services/palavras.service';
import { Palavra, Dicionario } from 'src/app/models/dicionario.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  bsModalRef?: BsModalRef;
  palavras: Palavra[] = [];
  dicionarios: Dicionario[] = [];
  dicionarioSelecionadoId?: string;

  constructor(
    private modalService: BsModalService,
    private palavraService: PalavraService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get<Dicionario[]>('http://localhost:3000/dicionarios').subscribe((dados) => {
      this.dicionarios = dados;
      if (dados.length > 0) {
        this.dicionarioSelecionadoId = dados[0].id;
        this.carregarPalavras();
      }
    });
  }

  carregarPalavras() {
    if (this.dicionarioSelecionadoId === undefined) return;

    this.palavraService
      .obterPalavrasPorDicionario(this.dicionarioSelecionadoId)
      .subscribe((dados) => {
        this.palavras = dados;
      });
  }

  abrirModalConsulta(palavra: Palavra) {
    this.bsModalRef = this.modalService.show(ModalConsultaDefinicaoComponent, {
      class: 'modal-lg',
      initialState: {
        palavra: palavra
      }
    });
  }
}
