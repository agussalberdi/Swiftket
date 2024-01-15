import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  events: Event[] = [
    {
      id: uuidv4(),
      name: 'Event 1',
      description: 'Event 1 description',
      price: 100,
      date: new Date('2022-01-01'),
      address: '123 Main St, New York, USA',
      image: '../../../assets/images/event.jpeg'
    },
    {
      id: uuidv4(),
      name: 'Event 2',
      description: 'Event 2 description',
      price: 200,
      date: new Date('2022-02-01'),
      address: '456 Elm St, Los Angeles, USA',
      image: '../../../assets/images/event-2.jpeg'
    },
    {
      id: uuidv4(),
      name: 'Event 3',
      description: 'Event 3 description',
      price: 300,
      date: new Date('2022-03-01'),
      address: '789 Oak St, Chicago, USA',
      image: '../../../assets/images/event-3.jpeg'
    },
    {
      id: uuidv4(),
      name: 'Event 4',
      description: 'Event 4 description',
      price: 400,
      date: new Date('2022-04-01'),
      address: '321 Pine St, San Francisco, USA',
      image: '../../../assets/images/event-4.jpeg'
    }
  ];
  private eventsSubject = new BehaviorSubject<Event[]>([]);

  constructor() {
    this.initializeEvents();
  }

  private initializeEvents(): void {
    this.eventsSubject.next(this.events);
  }

  getEvents(): Observable<Event[]> {
    return this.eventsSubject.asObservable();
  }

  addEvent(event: Event) {
    const currentEvents = this.eventsSubject.getValue();
    console.log("current events: ", currentEvents);
    console.log("new event: ", event);
    this.eventsSubject.next([...currentEvents, event]);
    return this.eventsSubject.asObservable();
  }
}
