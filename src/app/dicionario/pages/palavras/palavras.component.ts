import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

import { PalavraService } from 'src/app/services/palavras.service';
import { ModalEditPalavraComponent } from 'src/app/shared/components/modal-edit-palavra/modal-edit-palavra.component';

import { Palavra } from '../../../models/dicionario.model';

@Component({
  selector: 'app-palavras',
  templateUrl: './palavras.component.html',
  styleUrls: ['./palavras.component.scss']
})
export class PalavrasComponent implements OnInit {
  dicionarioId!: string;
  palavras: Palavra[] = [];
  bsModalRef?: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private palavraService: PalavraService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.dicionarioId = params['id'];
      this.carregarPalavras();
    });
  }

  carregarPalavras() {
    this.palavraService.obterPalavrasPorDicionario(this.dicionarioId).subscribe(palavras => {
      this.palavras = palavras;
    });
  }

  deletarPalavra(id: number) {
    
    this.palavraService.deletarPalavra(id).subscribe({
      next: () => {
        alert('Palavra deletada com sucesso!');
        this.carregarPalavras();
      },
    });
    
  }

  openModal(palavraId?: number) {
    const initialState: ModalOptions = {
      initialState: {
        titulo: palavraId ? 'Editar palavra' : 'Adicionar palavra',
        palavraId,
        dicionarioId: this.dicionarioId
      }
    };

    this.bsModalRef = this.modalService.show(ModalEditPalavraComponent, initialState);

    this.bsModalRef.content.onSave.subscribe(() => {
      this.carregarPalavras();
    });
  }

  openModalParaAdicionar() {
    this.openModal();
  }
}
