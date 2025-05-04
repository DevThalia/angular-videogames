import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RawgService } from '../services/rawg.service';
import { Game } from '../models/game.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DetalleComponent implements OnInit {
  game: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private rawgService: RawgService,
    private location: Location  // ✅ Ahora está en el lugar correcto
  ) { }

  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      this.getGameDetails(gameId);
    }
  }

  getGameDetails(id: string): void {
    const url = `https://api.rawg.io/api/games/${id}?key=239d178559b64d9588abcb5561a43ee2`;
    this.rawgService.getGamesFromUrl(url).subscribe((data: any) => {
      this.game = data;
    });
  }

  goBack() { 
    this.location.back();
  }
}
