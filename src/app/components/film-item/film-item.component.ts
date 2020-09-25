import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Film} from '../../models';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;
  @Output() select = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
