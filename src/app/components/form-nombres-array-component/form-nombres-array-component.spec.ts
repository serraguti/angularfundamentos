import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormNombresArrayComponent } from './form-nombres-array-component';

describe('FormNombresArrayComponent', () => {
  let component: FormNombresArrayComponent;
  let fixture: ComponentFixture<FormNombresArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNombresArrayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormNombresArrayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
