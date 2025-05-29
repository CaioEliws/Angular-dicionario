import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroComponent } from './cadastro.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DicionarioService } from '../../../services/dicionario.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  let dicionarioService: DicionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroComponent],
      providers: [
        {
          provide: DicionarioService,
          useValue: {
            obterDicionarios: () => of([{ id: '1', name: 'Dic 1' }, { id: '2', name: 'Dic 2' }]),
            deletarDicionario: () => of(null)
          }
        },
        {
          provide: BsModalService,
          useValue: { show: () => {} }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    dicionarioService = TestBed.inject(DicionarioService);
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar dicionarios', () => {
    component.ngOnInit();
    expect(component.dicionarios.length).toBe(2);
  });

  it('deve deletar dicionario', () => {
    spyOn(dicionarioService, 'deletarDicionario').and.callThrough();
    component.deletarDicionario('1');
    expect(dicionarioService.deletarDicionario).toHaveBeenCalledWith('1');
  });
});
