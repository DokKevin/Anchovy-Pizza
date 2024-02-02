import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Anchovy-Pizza';
}
