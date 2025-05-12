import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'currentUser'; 
  registro(username: string, password: string): boolean {
    const users = this.getUsers();
    if (users.some(user => user.username === username)) {
      return false; 
    } 

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers(); 

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
      return true;
    }
    return false; 
  }

  logout(): void {
    localStorage.removeItem(this.storageKey); 
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.storageKey) !== null;
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem(this.storageKey)!);
  }

  private getUsers(): { username: string, password: string }[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }
}
