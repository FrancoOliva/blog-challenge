import { Component, OnInit } from '@angular/core';
import { Albums } from '../../../../core/interfaces/albums.interface';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: Albums[] = [];
  infoAlbum: boolean = true;

  constructor( private jsonService: JsonPlaceholderService ) { }

  ngOnInit(): void {

    this.jsonService.getAll<Albums[]>('albums').subscribe( a => {
      this.albums = a;
    });
  }

}
