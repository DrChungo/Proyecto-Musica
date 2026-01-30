import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  // Datos del formulario y mensajes de error
  email: string = '';
  password: string = '';
  errorEmail: string = '';
  errorPassword: string = '';

 // Valida los datos del formulario antes de simular el login
  login() {
    
    this.errorEmail = '';
    this.errorPassword = '';

    // VALIDACIÓN EMAIL 
    if (!this.email || !this.email.includes('@')) {
      this.errorEmail = 'Email no válido';
      return;
    }

    // VALIDACIÓN PASSWORD 
    if (!this.password || this.password.length < 4) {
      this.errorPassword = 'La contraseña debe tener al menos 4 caracteres';
      return;
    }

    // test para ver que falla
    console.log('Login correcto');
    console.log(this.email, this.password);
  }
}