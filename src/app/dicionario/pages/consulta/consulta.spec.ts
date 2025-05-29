import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaComponent } from './consulta.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PalavraService } from '../../../services/palavras.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Palavra } from 'src/app/models/dicionario.model';

describe('ConsultaComponent', () => {
  let component: ConsultaComponent;
  let fixture: ComponentFixture<ConsultaComponent>;
  let modalService: jasmine.SpyObj<BsModalService>;
  let palavraService: jasmine.SpyObj<PalavraService>;

  beforeEach(() => {
    const modalSpy = jasmine.createSpyObj('BsModalService', ['show']);
    const palavraSpy = jasmine.createSpyObj('PalavraService', ['obterPalavrasPorDicionario']);

    TestBed.configureTestingModule({
      declarations: [ConsultaComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: BsModalService, useValue: modalSpy },
        { provide: PalavraService, useValue: palavraSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaComponent);
    component = fixture.componentInstance;

    modalService = TestBed.inject(BsModalService) as jasmine.SpyObj<BsModalService>;
    palavraService = TestBed.inject(PalavraService) as jasmine.SpyObj<PalavraService>;
  });

  it('deve carregar palavras quando dicionario selecionado mudar', () => {
    const palavrasMock: Palavra[] = [
      { word: 'palavra1', definition: 'definição1', dicionarioId: '1', definitionExtra: '' },
      { word: 'palavra2', definition: 'definição2', dicionarioId: '1', definitionExtra: '' }
    ];

    component.dicionarioSelecionadoId = '1';

    palavraService.obterPalavrasPorDicionario.and.returnValue(of(palavrasMock));

    component.carregarPalavras();

    expect(palavraService.obterPalavrasPorDicionario).toHaveBeenCalledWith('1');
    expect(component.palavras.length).toBe(2);
  });

  it('deve abrir modal ao chamar abrirModalConsulta', () => {
    const palavraTeste: Palavra = { word: 'teste', definition: 'def teste', dicionarioId: '1', definitionExtra: '' };
    component.abrirModalConsulta(palavraTeste);
    expect(modalService.show).toHaveBeenCalled();
  });
});