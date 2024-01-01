import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchangelComponent } from './archangel.component';

describe('ArchangelComponent', () => {
  let component: ArchangelComponent;
  let fixture: ComponentFixture<ArchangelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ArchangelComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ArchangelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
