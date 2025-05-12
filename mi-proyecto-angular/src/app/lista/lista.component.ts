import { Component, OnInit } from '@angular/core';
import { RawgService } from '../services/rawg.service';
import { Game } from '../models/game.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule]
})
export class ListaComponent implements OnInit {
  games: Game[] = [];
  filteredGames: Game[] = [];
  currentPage = 1;
  nameFilter: string = '';
  ratingFilter: string = '';

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    this.getGames(this.currentPage);
  }

  getGames(page: number): void {
    const url = `https://api.rawg.io/api/games?key=239d178559b64d9588abcb5561a43ee2&page=${page}`;
    this.rawgService.getGamesFromUrl(url).subscribe(data => {
      this.games = data.results;
      this.applyFilters();  // Aplicar filtros después de obtener los juegos
      this.currentPage = page;
    });
  }

  applyFilters(): void {
    this.filteredGames = this.games.filter(game => {
      const matchesName = game.name.toLowerCase().includes(this.nameFilter.toLowerCase());
      const matchesRating = this.ratingFilter ? game.rating >= parseFloat(this.ratingFilter) : true;
      return matchesName && matchesRating;
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
