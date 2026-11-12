import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage: any = "Parent Message";
  userName: any = '';

  type(data: any) {
    this.userName = data;
  }

  receive(msg: any) {
    console.log(msg);
  }
}
