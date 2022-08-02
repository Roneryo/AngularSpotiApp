import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }
  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization':`Bearer BQB1BXt7zlLgsszKjvnDiLixGny8Vshjl0awvNczISoigr7zdd22JXegAtA24cb4KFKJRh5GiDpAHgv7vT7zus8UkVwlVQP7u32FcUJ0XF24bYf7gow`});

      return this.http.get(url,{headers});

  }
  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
     .pipe( map( data => data['albums'].items ));
  }
  getArtistas(termino:string){

    return this.getQuery(`search?q=${ termino }&type=artist&market=co&limit=15`)
    .pipe( map( data => data['artists'].items ));

  }
  getArtista(id:string){

    return this.getQuery(`artists/${ id }`);
    // .pipe( map( data => data['artists'].items ));
  }
  getTopTracks(id:string){

    return this.getQuery(`artists/${ id }`);
    // .pipe( map( data => data['artists'].items ));

  }
}
