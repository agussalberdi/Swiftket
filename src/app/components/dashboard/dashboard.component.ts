import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MainContainerComponent } from '../layout/main-container/main-container.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MainContainerComponent, RouterLink, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
