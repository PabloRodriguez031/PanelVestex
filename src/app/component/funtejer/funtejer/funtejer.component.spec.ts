import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuntejerComponent } from './funtejer.component';

describe('FuntejerComponent', () => {
  let component: FuntejerComponent;
  let fixture: ComponentFixture<FuntejerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuntejerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuntejerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
