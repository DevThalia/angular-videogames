import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Método de registro
  registro(username: string, password: string): boolean {
    const users = this.getUsers();
    if (users.some(user => user.username === username)) {
      return false; // El usuario ya existe
    }

    // Guarda el nuevo usuario en localStorage
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  // Método de login
  login(username: string, password: string): boolean {
    const users = this.getUsers(); // Recupera los usuarios guardados en localStorage

    // Verifica si las credenciales coinciden
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      // Guarda el usuario como 'currentUser' en localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;  // Las credenciales son correctas
    }
    return false; // Las credenciales son incorrectas
  }



  logout(): void {
    localStorage.removeItem('currentUser');  // Elimina el usuario del localStorage
  }


  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;  // Verifica si hay un usuario logueado
  }

  // Recupera los usuarios de localStorage
  private getUsers(): { username: string, password: string }[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  debugUsers() {
    console.log(JSON.parse(localStorage.getItem('users')!));
  }
}
