import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, MatButtonModule, MatIconModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent {
  @Input() event: Event | undefined;

  constructor() {}

  addToCart(event?: Event) {
    console.log('Adding to cart:', Event);
  }

  addToWishList(event?: Event) {
    console.log('Adding to wish list:', Event);
  }

  goBack() {
    window.history.back();
  }
}
