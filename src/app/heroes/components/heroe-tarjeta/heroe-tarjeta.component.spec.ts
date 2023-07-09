import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTarjetaComponent } from 'src/app/heroes/components/heroe-tarjeta/heroe-tarjeta.component';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { ImagenPipe } from 'src/app/heroes/pipes/imagen.pipe';

describe('HeroeTarjetaComponent', () => {
  let component: HeroeTarjetaComponent;
  let fixture: ComponentFixture<HeroeTarjetaComponent>;

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
      declarations: [ HeroeTarjetaComponent, ImagenPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTarjetaComponent);
    component = fixture.componentInstance;
    component.heroe = dummyHeroe;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
