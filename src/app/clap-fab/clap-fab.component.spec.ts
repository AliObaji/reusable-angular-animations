import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClapFabComponent } from './clap-fab.component';

describe('ClapFabComponent', () => {
  let component: ClapFabComponent;
  let fixture: ComponentFixture<ClapFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClapFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClapFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
