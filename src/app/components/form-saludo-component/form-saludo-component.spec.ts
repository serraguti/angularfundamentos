import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSaludoComponent } from './form-saludo-component';

describe('FormSaludoComponent', () => {
  let component: FormSaludoComponent;
  let fixture: ComponentFixture<FormSaludoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSaludoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSaludoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
