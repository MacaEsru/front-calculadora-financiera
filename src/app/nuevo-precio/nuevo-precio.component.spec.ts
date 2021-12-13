import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPrecioComponent } from './nuevo-precio.component';

describe('NuevoPrecioComponent', () => {
  let component: NuevoPrecioComponent;
  let fixture: ComponentFixture<NuevoPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPrecioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
