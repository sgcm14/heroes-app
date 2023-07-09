import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { AgregarComponent } from 'src/app/heroes/pages/agregar/agregar.component';
import { ImagenPipe } from 'src/app/heroes/pipes/imagen.pipe';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';


describe('AgregarComponent', () => {
  let component: AgregarComponent;
  let fixture: ComponentFixture<AgregarComponent>;

  const dummyHeroe: Heroe = {
    id: '1',
    superhero: 'Superman',
    publisher: Publisher.DCComics,
    alter_ego: 'Clark Kent',
    first_appearance: 'Action Comics #1',
    characters: 'Kal-El',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule, MatDialogModule
      ],
      providers: [ MatSnackBar],
      declarations: [AgregarComponent, ImagenPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarComponent);
    component = fixture.componentInstance;
    component.heroe = dummyHeroe;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
