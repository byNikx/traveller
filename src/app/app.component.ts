import { Component } from '@angular/core';
import { LayoutService } from './modules/shared/services/layout.service';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'traveller';
  constructor(
    layout: LayoutService
  ) {
  }
}
