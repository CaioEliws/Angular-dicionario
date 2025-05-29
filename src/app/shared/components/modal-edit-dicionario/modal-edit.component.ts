import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { DicionarioService } from 'src/app/services/dicionario.service';
import { Dicionario } from 'src/app/models/dicionario.model';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  @Input() titulo: string = 'Editar dicionário';
  @Input() dicionarioId?: string;
  @Output() onSave = new EventEmitter<Dicionario>();

  nomeDicionario: string = '';

  colors = [
    { label: 'Cor de fundo do botão', value: '#007bff' },
    { label: 'Cor da fonte do botão', value: '#ffffff' },
    { label: 'Cor da fonte para títulos', value: '#007bff' },
    { label: 'Cor do ícone', value: '#007bff' }
  ];

  constructor(
    public bsModalRef: BsModalRef,
    private dicionarioService: DicionarioService
  ) {}

  ngOnInit() {
    if(this.dicionarioId) {
      this.dicionarioService.obterDicionarios().subscribe(dicionarios => {
        const dicionario = dicionarios.find(d => d.id === this.dicionarioId);
        if(dicionario) {
          this.nomeDicionario = dicionario.name;
        }
      });
    }
  }

  get textoBotao(): string {
    return this.titulo.toLowerCase().includes('adicionar') ? 'Criar' : 'Salvar';
  }

  salvar() {
    const isNew = this.titulo.toLowerCase().includes('adicionar');
    const dicionario: Partial<Dicionario> = { name: this.nomeDicionario };

    const request$ = isNew
      ? this.dicionarioService.adicionarDicionario(dicionario as Dicionario)
      : this.dicionarioService.atualizarDicionario(this.dicionarioId!, dicionario);

    request$.subscribe({
      next: (resultado) => {
        alert(`Dicionário ${isNew ? 'criado' : 'atualizado'} com sucesso!`);
        this.onSave.emit(resultado);
      }
    });
  }

  closeModal() {
    this.bsModalRef.hide();
  }
}