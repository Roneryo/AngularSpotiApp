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
      'Authorization':'Bearer BQCkUIqC61wmAHqL1yA6df1hct6HNQZuIThzZnTyVousPBOq6x4KYE-PqrZTw1Yx_eWSFOE5uqDvQ8i_Hts'});

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
