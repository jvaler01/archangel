import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandarComponent } from './standar.component';

describe('StandarComponent', () => {
  let component: StandarComponent;
  let fixture: ComponentFixture<StandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
