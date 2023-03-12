import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOutTextComponent } from './card-out-text.component';

describe('CardOutTextComponent', () => {
  let component: CardOutTextComponent;
  let fixture: ComponentFixture<CardOutTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOutTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOutTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
