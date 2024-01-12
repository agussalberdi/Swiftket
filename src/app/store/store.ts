import { ActionReducerMap } from '@ngrx/store';
import { eventReducer, EventState } from './events/event.reducer';
import { EventEffects } from './events/event.effects';

export interface AppState {
  events: EventState;
}

export const reducers: ActionReducerMap<AppState> = {
  events: eventReducer,
};

export const effects = [EventEffects];
