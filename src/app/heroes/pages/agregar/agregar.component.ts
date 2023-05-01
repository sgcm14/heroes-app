import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';

import { Heroe, Publisher } from 'src/app/heroes/interfaces/heroes.interface';
import { HeroesService } from 'src/app/heroes/services/heroes.service';
import { ConfirmarComponent } from 'src/app/heroes/components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroePorId(id))
      ).subscribe((heroe) => {
        if(!heroe) return this.router.navigate(['/heroes/listado']);
        this.heroe = heroe;
        return;
      });
  }

  saveOrUpdateHeroe() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService.updateHeroe(this.heroe)
        .subscribe(heroe => {
          location.reload();
          this.showSnackBar('Héroe actualizado!!!');
        })
    } else {
      if (!this.heroe.alt_img) {
        this.heroe.alt_img = 'assets/no-image.png';
      }
      this.heroesService.addHeroe(this.heroe)
        .subscribe(heroe => {
          this.router.navigate(['/heroes/editar', heroe.id])
          this.showSnackBar('Héroe creado!!!');
        })
    }
  }

  deleteOrCancelHeroe() {

    if (this.heroe.id) {
      const dialog = this.dialog.open(ConfirmarComponent, {
        width: '250px',
        data: { ...this.heroe }
      })

      dialog.afterClosed()
        .subscribe(result => {
          if (result) {
            this.heroesService.deleteHeroe(this.heroe.id!)
              .subscribe(resp => {
                this.router.navigate(['/heroes']);
                this.showSnackBar('Héroe eliminado!!!');
              })
          }
        })
    } else {
      this.router.navigate(['/heroes']);
    }


  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Accept', {
      duration: 2500
    });
  }

}
