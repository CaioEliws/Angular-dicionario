import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Palavra } from 'src/app/models/dicionario.model';
import { EventEmitter } from '@angular/core';

import { PalavraService } from 'src/app/services/palavras.service';

@Component({
  selector: 'app-modal-edit-palavra',
  templateUrl: './modal-edit-palavra.component.html',
  styleUrls: ['./modal-edit-palavra.component.scss']
})
export class ModalEditPalavraComponent implements OnInit {
  titulo = 'Adicionar palavra';
  dicionarioId!: string;
  palavraId?: string;

  palavra: Palavra = {
    dicionarioId: '',
    word: '',
    definition: '',
    definitionExtra: ''
  };

  onSave = new EventEmitter<void>();

  constructor(
    public bsModalRef: BsModalRef,
    private palavraService: PalavraService
  ) {}

  ngOnInit() {
    if (this.palavraId) {
      this.palavraService.obterPalavraPorId(this.palavraId).subscribe({
        next: (res) => this.palavra = res,
      });
    }
  }

  salvar() {
    const operacao = this.palavraId
      ? this.palavraService.atualizarPalavra(this.palavra)
      : this.palavraService.adicionarPalavra({
          ...this.palavra,
          dicionarioId: this.dicionarioId
        });

    operacao.subscribe({
      next: () => {
        alert(this.palavraId ? 'Palavra atualizada!' : 'Palavra criada!');
        this.onSave.next();
      }
    });
  }

  closeModal() {
    this.bsModalRef.hide();
  }

  get textoBotao(): string {
    return this.palavraId ? 'Salvar' : 'Criar';
  }
}