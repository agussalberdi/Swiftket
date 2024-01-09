import { Component, OnInit } from '@angular/core';
import { EventComponent } from './event/event.component';
import { Event } from '../../models/event.model';
import { EventManagementService } from '../../services/event-management.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MainContainerComponent } from '../layout/main-container/main-container.component';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [AsyncPipe, RouterLink, MatButtonModule, EventComponent, MainContainerComponent],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
  events$: Observable<Event[]> | undefined;

  constructor(private eventManagementService: EventManagementService) {}

  ngOnInit() {
    this.events$ = this.eventManagementService.getEvents();
  }
}
