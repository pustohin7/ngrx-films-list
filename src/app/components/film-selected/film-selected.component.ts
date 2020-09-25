import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../models';

@Component({
  selector: 'app-film-selected',
  templateUrl: './film-selected.component.html',
  styleUrls: ['./film-selected.component.css']
})
export class FilmSelectedComponent implements OnInit {
  @Input() film: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
