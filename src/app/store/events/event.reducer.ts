import { createReducer, on } from '@ngrx/store';
import * as EventActions from './event.actions';
import { Event } from '../../models/event.model';

export interface EventState {
  events: Event[];
}

export const initialState: EventState = {
  events: [],
};

export const eventReducer = createReducer(
  initialState,
  on(EventActions.loadEventsSuccess, (state, { events }) => ({ ...state, events: events })),
  on(EventActions.addEvent, (state, { event }) => ({
    ...state,
    events: [...state.events, event],
  })));

