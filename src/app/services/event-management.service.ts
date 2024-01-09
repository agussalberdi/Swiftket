import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventManagementService {
  events: Event[] = [
    {
      id: '1',
      name: 'Event 1',
      description: 'Event 1 description',
      price: 100,
      date: '2022-01-01',
      time: '10:00',
      location: {
        address: '123 Main St',
        city: 'New York',
        country: 'USA'
      },
      image: '../../../assets/images/event.avif'
    },
    {
      id: '2',
      name: 'Event 2',
      description: 'Event 2 description',
      price: 200,
      date: '2022-02-01',
      time: '14:00',
      location: {
        address: '456 Elm St',
        city: 'Los Angeles',
        country: 'USA'
      },
      image: '../../../assets/images/event.avif'
    },
    {
      id: '3',
      name: 'Event 3',
      description: 'Event 3 description',
      price: 300,
      date: '2022-03-01',
      time: '18:00',
      location: {
        address: '789 Oak St',
        city: 'Chicago',
        country: 'USA'
      },
      image: '../../../assets/images/event.avif'
    },
    {
      id: '4',
      name: 'Event 4',
      description: 'Event 4 description',
      price: 400,
      date: '2022-04-01',
      time: '22:00',
      location: {
        address: '321 Pine St',
        city: 'San Francisco',
        country: 'USA'
      },
      image: '../../../assets/images/event.avif'
    }
  ];
  private eventsSubject = new BehaviorSubject<Event[]>([]);
  public events$ = this.eventsSubject.asObservable();

  constructor() {
    this.initializeEvents();
  }

  private initializeEvents(): void {
    this.eventsSubject.next(this.events);
  }

  getEvents(): Observable<Event[]> {
    return this.eventsSubject.asObservable();
  }

  addEvent(event: Event): void {
    const currentEvents = this.eventsSubject.getValue();
    this.eventsSubject.next([...currentEvents, event]);
  }
}
