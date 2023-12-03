import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout/main-container/main-container.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MainContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
