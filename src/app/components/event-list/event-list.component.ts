import { Component, OnInit } from '@angular/core';
import { EventComponent } from './event/event.component';
import { Event } from '../../models/event.model';
import { EventsService } from '../../services/events.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [AsyncPipe, EventComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
  events$: Observable<Event[]> | undefined;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.events$ = this.eventsService.getEvents();
  }
}
