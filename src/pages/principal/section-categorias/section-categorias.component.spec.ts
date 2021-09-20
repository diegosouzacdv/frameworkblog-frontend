import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCategoriasComponent } from './section-categorias.component';

describe('SectionCategoriasComponent', () => {
  let component: SectionCategoriasComponent;
  let fixture: ComponentFixture<SectionCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
