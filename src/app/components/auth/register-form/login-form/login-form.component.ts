import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements  OnInit {

  constructor(private authService: AuthService){}

  ngOnInit(): void{

    this.authService.login('eve.holt@reqres.in', 'cityslicka').subscribe({
      next: (response) => {
        console.log('Respuesta Login: ', response);
        sessionStorage.setItem('token', response.token);
      },
      error: (error) => console.error(`Error en login: ${error}`),
      complete: () => console.info('Se ha completado la llamada a ReqRes')
    });
  }


}

