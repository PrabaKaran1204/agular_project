import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontupdateDirective } from './practice/fontupdate.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FontupdateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  
}
