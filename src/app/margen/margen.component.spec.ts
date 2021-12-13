import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargenComponent } from './margen.component';

describe('MargenComponent', () => {
  let component: MargenComponent;
  let fixture: ComponentFixture<MargenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MargenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MargenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
