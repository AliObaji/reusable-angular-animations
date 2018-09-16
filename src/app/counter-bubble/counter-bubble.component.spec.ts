import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterBubbleComponent } from './counter-bubble.component';

describe('CounterBubbleComponent', () => {
  let component: CounterBubbleComponent;
  let fixture: ComponentFixture<CounterBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
