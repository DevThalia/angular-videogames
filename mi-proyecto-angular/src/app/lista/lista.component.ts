import { Component, OnInit } from '@angular/core';
import { RawgService } from '../services/rawg.service';
import { Game } from '../models/game.model';  
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule]
})
export class ListaComponent implements OnInit {
  games: Game[] = [];
  currentPage = 1;

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    this.getGames(this.currentPage);
  }

  getGames(page: number): void {
    const url = `https://api.rawg.io/api/games?key=239d178559b64d9588abcb5561a43ee2&page=${page}`;
    this.rawgService.getGamesFromUrl(url).subscribe(data => {
      this.games = data.results;  
      this.currentPage = page;
    });
  }

  nextPage(): void {
    this.getGames(this.currentPage + 1);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.getGames(this.currentPage - 1);
    }
  }
}
