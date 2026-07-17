import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './first.html',
  styleUrl: './first.scss',
})
export class First {
   products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Monitor', price: 350 }
  ];
}
