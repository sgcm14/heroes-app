import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
      .container{
        margin: 10px;
      }
    `]
})
export class HomeComponent implements OnInit {

  public sidebarItems = [
    { label: 'Listado de Héroes', icon: 'label', url: './listado' },
    { label: 'Añadir Héroe', icon: 'add', url: './agregar' },
    { label: 'Buscar Héroe', icon: 'search', url: './buscar' },
  ]

  get auth() {
    return this.authService.auth;
  }

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['./auth']);
  }

}
