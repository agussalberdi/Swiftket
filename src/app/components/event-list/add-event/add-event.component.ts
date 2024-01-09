import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Event } from '../../../models/event.model';
import { EventManagementService } from '../../../services/event-management.service';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss'
})
export class AddEventComponent {
  eventForm: FormGroup;

  constructor(private fb: FormBuilder, private eventManagementService: EventManagementService) {
    this.eventForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      // date: ['', [Validators.required]],
      // time: ['', [Validators.required]],
      // price: ['', [Validators.required]],
      // image: ['', [Validators.required]],
      // location: this.fb.group({
      //   address: ['', [Validators.required]],
      //   city: ['', [Validators.required]],
      //   country: ['', [Validators.required]]
      // })
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const newEvent: Event = this.eventForm.value;
      this.eventManagementService.addEvent(newEvent);
      // Optionally, navigate back to the event list or another page
    }
  }
}
