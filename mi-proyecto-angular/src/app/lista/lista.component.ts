import { Component, OnInit } from '@angular/core';
import { RawgService } from '../services/rawg.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  games: any[] = [];

  constructor(private rawgService: RawgService) { }

  ngOnInit(): void {
    this.rawgService.getGames().subscribe(
      (response) => {
        console.log(response);
        this.games = response.results; 
      },
      (error) => {
        console.error('Error al cargar los juegos', error);
      }
    );
  }
}
