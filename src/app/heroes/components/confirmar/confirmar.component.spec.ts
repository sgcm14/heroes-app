import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ConfirmarComponent } from 'src/app/heroes/components/confirmar/confirmar.component';

describe('ConfirmarComponent', () => {
  let component: ConfirmarComponent;
  let fixture: ComponentFixture<ConfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      providers: [
        { provide: MatDialogRef, useValue: {} }, 
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      declarations: [ ConfirmarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
