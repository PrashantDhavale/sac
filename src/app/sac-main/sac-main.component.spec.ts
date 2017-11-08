import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacMainComponent } from './sac-main.component';

describe('SacMainComponent', () => {
  let component: SacMainComponent;
  let fixture: ComponentFixture<SacMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
