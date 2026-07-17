import { Component } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  selectedUser = {
    id: 1,
    name: 'Saurabh',
    role: 'Senior Developer',
  };
}
