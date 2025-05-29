import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PalavrasComponent } from './palavras.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PalavraService } from 'src/app/services/palavras.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PalavrasComponent', () => {
  let component: PalavrasComponent;
  let fixture: ComponentFixture<PalavrasComponent>;
  let palavraService: any;
  let modalService: any;

  beforeEach(async () => {
    palavraService = {
      obterPalavrasPorDicionario: () => of([
        { id: '1', word: 'Teste', definition: 'Definição', dicionarioId: '123', definitionExtra: '' }
      ]),
      deletarPalavra: (id: string) => of(void 0)
    };

    modalService = {
      show: () => {
        return { content: { onSave: of() } } as BsModalRef;
      }
    };

    await TestBed.configureTestingModule({
      declarations: [PalavrasComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ id: '123' }) } },
        { provide: PalavraService, useValue: palavraService },
        { provide: BsModalService, useValue: modalService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PalavrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente e carregar palavras', () => {
    expect(component).toBeTruthy();
    expect(component.dicionarioId).toBe('123');
    expect(component.palavras.length).toBe(1);
  });

  it('deve deletar palavra e mostrar alerta', () => {
    spyOn(window, 'alert');
    component.deletarPalavra('1');
    expect(window.alert).toHaveBeenCalledWith('Palavra deletada com sucesso!');
  });

  it('deve abrir modal para editar palavra', () => {
    spyOn(modalService, 'show').and.callThrough();
    component.openModal('1');
    expect(modalService.show).toHaveBeenCalled();
  });

  it('deve abrir modal para adicionar palavra', () => {
    spyOn(modalService, 'show').and.callThrough();
    component.openModalParaAdicionar();
    expect(modalService.show).toHaveBeenCalled();
  });
});