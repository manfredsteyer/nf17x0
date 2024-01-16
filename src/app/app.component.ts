import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedLibComponent } from 'shared-lib';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedLibComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nf17x0';
  service = inject(SharedLibService);
  
  constructor() {
    console.log('service', this.service);
  }
}
