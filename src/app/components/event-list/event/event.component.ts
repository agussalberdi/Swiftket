import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Event } from '../../../models/event.model';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
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
