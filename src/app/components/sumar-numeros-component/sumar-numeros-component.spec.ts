import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumarNumerosComponent } from './sumar-numeros-component';

describe('SumarNumerosComponent', () => {
  let component: SumarNumerosComponent;
  let fixture: ComponentFixture<SumarNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumarNumerosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SumarNumerosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
