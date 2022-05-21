import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  layout: string = 'layout1';

  constructor(private settingsService: SettingsService) {}

  onLayoutSelected(layout: number): void {
    /* console.log(layout); */
    this.layout = `layout${layout}`;
  }
}
