import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-second-child',
  imports: [],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.css'
})
export class SecondChildComponent implements OnInit {

  siblingMessage: string = 'No shared Data';

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.receiveFromSibling();
  }

  receiveFromSibling() {
    this.sharedService.currentMessage.subscribe(data => this.siblingMessage = data);
  }
}
