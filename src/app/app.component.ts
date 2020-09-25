import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Film} from './models';
import {Store} from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as filmAction from './store/actions/films';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-films-list';
  films$: Observable<Film[]>;
  selected$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.films$ = store.select(fromRoot.getAllFilms);
    this.selected$ = store.select(fromRoot.getSelectedFilm);
  }

  // tslint:disable-next-line:typedef
  onSelect(id: number) {
    this.store.dispatch(new filmAction.Select(id));
  }
}
