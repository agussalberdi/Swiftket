import { createAction, props } from '@ngrx/store';
import { Event } from '../../models/event.model';

export const loadEvents = createAction('[Event] Load Events');
export const loadEventsSuccess = createAction('[Event] Load Events Success', props<{ events: Event[] }>());
export const addEvent = createAction('[Event] Add Event', props<{ event: Event }>());
export const deleteEvent = createAction('[Event] Delete Event', props<{ id: string }>());
