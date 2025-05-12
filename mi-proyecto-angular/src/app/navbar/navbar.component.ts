import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  goToLista(): void {
    this.router.navigate(['/lista']);
  }

  logout(): void {
    this.authService.logout();  
    this.isAuthenticated = false;  
    this.router.navigate(['/login']);
  }
}
