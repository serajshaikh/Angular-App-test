import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp3Component } from './cmp3.component';

describe('Cmp3Component', () => {
  let component: Cmp3Component;
  let fixture: ComponentFixture<Cmp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
