import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input({ required: true }) user!: {
    id: number;
    name: string;
    role: string;
  };
}
