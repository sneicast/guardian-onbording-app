import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  username = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    try {
      await this.authService.login(this.username, this.password);
      this.router.navigate(['/admin/products']);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido al iniciar sesión';
      alert(errorMessage);
      console.error('Error en login:', error);
    }
  }
}
