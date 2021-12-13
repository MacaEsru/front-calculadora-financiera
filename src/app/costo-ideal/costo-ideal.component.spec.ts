import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostoIdealComponent } from './costo-ideal.component';

describe('CostoIdealComponent', () => {
  let component: CostoIdealComponent;
  let fixture: ComponentFixture<CostoIdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostoIdealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostoIdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
