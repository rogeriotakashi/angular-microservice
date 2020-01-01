import { Component, OnInit } from '@angular/core';
import { AlbumService } from '@core/services/album.service';
import { AlbumUrls } from 'app/shared/models/album-urls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  album : Array<any>;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbumImages().subscribe( res => this.album = res);
  }

}
