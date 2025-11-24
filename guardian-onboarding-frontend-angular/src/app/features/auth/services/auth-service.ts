import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  async login(username: string, password: string): Promise<string> {
    const response = await fetch(`${environment.apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Error en el login');
    }

    const data = await response.json();
    sessionStorage.setItem('accessToken', data.accessToken);
    return data.accessToken;
  }
}
