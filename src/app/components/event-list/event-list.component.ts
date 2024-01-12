import { Component, OnInit } from '@angular/core';
import { EventComponent } from './event/event.component';
import { Event } from '../../models/event.model';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MainContainerComponent } from '../layout/main-container/main-container.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as EventActions from '../../store/events/event.actions';
import { selectEvents } from '../../store/events/event.selectors';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink, MatButtonModule, EventComponent, MainContainerComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
  readonly events$: Observable<Event[]> | undefined = this.store.select(selectEvents);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(EventActions.loadEvents());
  }
}
