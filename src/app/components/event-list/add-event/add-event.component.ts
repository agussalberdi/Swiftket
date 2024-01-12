import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Event } from '../../../models/event.model';
import * as EventActions from '../../../store/events/event.actions';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss'
})
export class AddEventComponent {
  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private store: Store) {
    this.eventForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$')]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
      date: [new Date(), [Validators.required]],
      price: [0, [Validators.required, Validators.min(0), Validators.max(1000)]],
      address: ['', [Validators.required]],
      image: [''],
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const newEvent: Event = this.eventForm.value;
      this.store.dispatch(EventActions.addEvent({ event: newEvent }));
      this.router.navigate(['/event-list']);
    }
  }
}
