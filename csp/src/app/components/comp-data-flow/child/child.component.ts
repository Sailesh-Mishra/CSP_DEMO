import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message: string = 'No Message received from parent. ';
  @Output() sendData = new EventEmitter<any>();
  @Output() sendMethodData = new EventEmitter<any>();

  constructor(
    private sharedService: SharedService
  ) { }

  sendMessage() {
    this.sendData.emit("Hello from Child. ");
  }

  showMessage() {
    this.sendMethodData.emit("Hello from Child Method. ");
  }

  sendDataSibling() {
    this.sharedService.changeMessage("Hello from child 1. ");
  }


}
