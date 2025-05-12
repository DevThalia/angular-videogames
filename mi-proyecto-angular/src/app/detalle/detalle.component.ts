// detalle.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RawgService } from '../services/rawg.service';
import { Game } from '../models/game.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  game: Game | null = null;
  gameComments: string[] = [];
  isModalOpen = false;
  newComment = '';

  constructor(
    private rawgService: RawgService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      this.getGameDetails(gameId);
      this.loadComments(gameId); // Cargar comentarios
    }
  }

  // Método para obtener los detalles del juego
  getGameDetails(gameId: string): void {
    const id = parseInt(gameId, 10);  // Convertir a número
    this.rawgService.getGameDetails(id).subscribe(
      (data: Game) => {
        this.game = data;
      },
      (error) => {
        console.error('Error al obtener detalles del juego', error);
      }
    );
  }

  loadComments(gameId: string): void {
    const comments = JSON.parse(localStorage.getItem('comments') || '{}');
    this.gameComments = comments[gameId] || [];
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.newComment = ''; // Resetear el input de comentario
  }

  saveComment(): void {
    if (this.game && this.newComment.trim()) {
      const comments = JSON.parse(localStorage.getItem('comments') || '{}');
      const gameId = this.game.id.toString(); // Aseguramos que el ID sea un string
      if (!comments[gameId]) {
        comments[gameId] = [];
      }
      comments[gameId].push(this.newComment.trim());
      localStorage.setItem('comments', JSON.stringify(comments));

      this.loadComments(gameId); // Recargar comentarios
      this.closeModal();
    }
  }

  goBack(): void {
    this.router.navigate(['/lista']);
  }
}
