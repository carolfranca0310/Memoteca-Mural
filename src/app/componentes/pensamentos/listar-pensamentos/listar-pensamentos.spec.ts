import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamentos } from './listar-pensamentos';

describe('ListarPensamentos', () => {
  let component: ListarPensamentos;
  let fixture: ComponentFixture<ListarPensamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarPensamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPensamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
