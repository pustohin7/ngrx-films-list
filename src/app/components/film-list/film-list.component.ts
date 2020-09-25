import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Film} from '../../models';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() films: Film[];
  @Input() label: string;
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
