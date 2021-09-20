import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRecentesComponent } from './section-recentes.component';

describe('SectionRecentesComponent', () => {
  let component: SectionRecentesComponent;
  let fixture: ComponentFixture<SectionRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionRecentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
