import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  login() {
    // this.router.navigate(['./heroes']);
    this.authService.login()
      .subscribe(resp => {
        console.log(resp);
        if (resp.email===this.miFormulario.value.email && resp.password === this.miFormulario.value.password) {
          this.router.navigate(['./heroes']);
        }
      })
  }
}
