import { Component, OnInit } from '@angular/core';
import { Albums } from 'src/app/core/interfaces/albums.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Albums[] = [];
  mostrar: boolean = false;

  constructor( private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {

    // this.jsonService.getAllAlbums().subscribe( albums => {
    //   this.albums = albums;
    //   this.mostrar = true;
    // });
  }

}
