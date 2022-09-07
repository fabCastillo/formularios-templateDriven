import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface IPerson {
  name: string,
  favorites: IFavorite[]
}

interface IFavorite {
  id: number,
  game: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  @ViewChild('myFormulario') public myFormulario!: NgForm;
  public nuevoJuego!: string;

  public persona: IPerson = {
    name: 'Fabian',
    favorites: [
      { id: 1, game: 'Spider-man MARVEL'},
      { id: 2, game: 'Assasin\'s Creed - Valhalla'},
      { id: 3, game: 'League of Legends'},
      { id: 4, game: 'Tomb Raider'},
    ]
  }

  public guardar() {
    if (this.myFormulario.valid) {
      console.log('Guardado exitosamente!');
      this.myFormulario.resetForm();
    }
  }

  public borrar( index: number ) {
    this.persona.favorites.splice( index, 1 );
  }

  public agregar() {
    const nuevoFavorito: IFavorite = {
      id: this.persona.favorites.length + 1,
      game: this.nuevoJuego
    }
    this.persona.favorites.push( nuevoFavorito );
    this.nuevoJuego = '';
  }

}
