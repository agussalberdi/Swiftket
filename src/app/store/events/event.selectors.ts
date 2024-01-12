import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventState } from './event.reducer';

export const selectEventState = createFeatureSelector<EventState>('events');

export const selectEvents = createSelector(
  selectEventState,
  (events: EventState) => events.events
);
