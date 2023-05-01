import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Heroe } from 'src/app/heroes/interfaces/heroes.interface';
import { HeroesService } from 'src/app/heroes/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius:5px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router,
  ) { }
  public heroe?: Heroe | undefined;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(
          ({ id }) => this.heroesService.getHeroePorId(id)
        )
      ).subscribe((heroe) => {
        if(!heroe) return this.router.navigate(['/heroes/listado']);
        this.heroe = heroe;
        return;
      })
  }

  regresar() {
    this.router.navigate(['/heroes/listado'])
  }

}
