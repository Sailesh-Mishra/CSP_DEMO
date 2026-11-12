import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thirdd-child',
  imports: [],
  templateUrl: './thirdd-child.component.html',
  styleUrl: './thirdd-child.component.css'
})
export class ThirddChildComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
}
