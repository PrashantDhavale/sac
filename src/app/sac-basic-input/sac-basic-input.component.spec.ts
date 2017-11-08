import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacBasicInputComponent } from './sac-basic-input.component';

describe('SacBasicInputComponent', () => {
  let component: SacBasicInputComponent;
  let fixture: ComponentFixture<SacBasicInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacBasicInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacBasicInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
