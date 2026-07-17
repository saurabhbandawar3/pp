import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from "./Components/first/first";
import { Parent } from "./Components/parent/parent";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, First, Parent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pp');
}
