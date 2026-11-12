import { Component } from '@angular/core';
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-comp-data-flow',
  imports: [ParentComponent],
  templateUrl: './comp-data-flow.component.html',
  styleUrl: './comp-data-flow.component.css'
})
export class CompDataFlowComponent {

}
