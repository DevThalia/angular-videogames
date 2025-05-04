import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private validUser = { username: 'usuario', password: 'contraseña' };
  private users: { username: string, password: string }[] = [];

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === this.validUser.username && password === this.validUser.password) {
      localStorage.setItem('auth_token', 'token_simulado');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  registro(username: string, password: string): boolean {
    const userExists = this.users.some(user => user.username === username);
    if (userExists) {
      return false;
    }
    this.users.push({ username, password });
    return true;
  }
}
