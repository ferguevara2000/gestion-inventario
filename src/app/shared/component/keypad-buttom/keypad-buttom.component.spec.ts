import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypadButtomComponent } from './keypad-buttom.component';

describe('KeypadButtomComponent', () => {
  let component: KeypadButtomComponent;
  let fixture: ComponentFixture<KeypadButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeypadButtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypadButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
