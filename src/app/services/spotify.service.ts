import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  artista:any = {};

  urlBusqueda:string = `https://api.spotify.com/v1/search`;
  urlArtista:string = `https://api.spotify.com/v1/artists/`;

  constructor( private http:Http) { }

  getArtistas ( artista: string ) {
    let query = `?q=${artista}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url ).map( res => {
      this.artistas = res.json().artists.items;
      console.log(this.artistas);

      return ( this.artistas );
    });
  }

  getArtista ( id: string ) {
    let url = this.urlArtista + id;
    return this.http.get( url ).map( res => {
      this.artista = res.json()
      console.log(this.artista);
      return this.artista;
    });
  }

  getArtistTopTracks ( id: string ) {
    let url = this.urlArtista + id + '/top-tracks?country=US';
    return this.http.get( url ).map( res => {
      console.log(res.json().tracks)
      return res.json().tracks;
    })
  }



}
