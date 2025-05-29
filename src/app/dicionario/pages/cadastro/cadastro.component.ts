import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

import { ModalEditComponent } from 'src/app/shared/components/modal-edit-dicionario/modal-edit.component';
import { ModalEditPalavraComponent } from 'src/app/shared/components/modal-edit-palavra/modal-edit-palavra.component';

import { DicionarioService } from 'src/app/services/dicionario.service';
import { Dicionario } from 'src/app/models/dicionario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  dicionarios: Dicionario[] = [];
  bsModalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private dicionarioService: DicionarioService
  ) {}

  openModal(id?: string) {
    const initialState: ModalOptions = {
      initialState: {
        titulo: id ? 'Editar dicionário' : 'Adicionar dicionário',
        dicionarioId: id
      }
    };

    this.bsModalRef = this.modalService.show(ModalEditComponent, initialState);

    this.bsModalRef.content.onSave.subscribe((dicionarioSalvo: Dicionario) => {
      if (!id) {
        this.dicionarios.push(dicionarioSalvo);
      } else {
        const index = this.dicionarios.findIndex(d => d.id === dicionarioSalvo.id);
        if (index !== -1) {
          this.dicionarios[index] = dicionarioSalvo;
        }
      }
      this.carregarDicionarios();
    });
  }


  openModalNovoDicionario() {
    this.openModal();
  }

  openPalavra(id: string) {
    this.router.navigate(['/dicionario/palavra'], { queryParams: { id } });
  }

  openModalAdicionarPalavra(id: string) {
    const initialState: ModalOptions = {
      initialState: {
        titulo: 'Adicionar palavra',
        dicionarioId: id
      }
    };
    this.bsModalRef = this.modalService.show(ModalEditPalavraComponent, initialState);
  }


  ngOnInit() {
    this.carregarDicionarios();
  }

  carregarDicionarios() {
    this.dicionarioService.obterDicionarios()
      .subscribe(dicionarios => this.dicionarios = dicionarios);
  }

  deletarDicionario(id: string) {
    this.dicionarioService.deletarDicionario(id).subscribe({
      next: () => {
        alert('Dicionário deletado com sucesso!');
        this.carregarDicionarios();
      },
    });
  }
}