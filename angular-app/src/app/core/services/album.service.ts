import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumUrls } from 'app/shared/models/album-urls';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http : HttpClient) { }


  getAlbumImages(){
    return this.http.get<any[]>("http://localhost:9050/api/v1/webcontent/home/album/5");
   
  }

}
