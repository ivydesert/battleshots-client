import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGameStartComponent } from './input-game-start.component';

describe('InputGameStartComponent', () => {
  let component: InputGameStartComponent;
  let fixture: ComponentFixture<InputGameStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputGameStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGameStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
