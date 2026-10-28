import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDobleComponent } from './form-doble-component';

describe('FormDobleComponent', () => {
  let component: FormDobleComponent;
  let fixture: ComponentFixture<FormDobleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDobleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDobleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
