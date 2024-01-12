import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as EventActions from './event.actions';
import { EventsService } from '../../services/events.service';

@Injectable()
export class EventEffects {

  loadEvents$ = createEffect(() => this.actions$.pipe(
    ofType(EventActions.loadEvents),
    mergeMap(() => this.eventsService.getEvents().pipe(
      map(events => EventActions.loadEventsSuccess({ events })),
      catchError(() => {
        console.error('Error loading events');
        return of({ type: 'loadEventsError' });
      })
    ))
  ));
  
  constructor(
    private actions$: Actions,
    private eventsService: EventsService
  ) {}
}
