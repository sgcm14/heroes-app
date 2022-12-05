import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes/services/heroes.service';
import { Heroe } from 'src/app/heroes/interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
