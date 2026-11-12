import { Component, ViewChild, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ChildComponent } from "../child/child.component";
import { SecondChildComponent } from "../second-child/second-child.component";
import { ThirddChildComponent } from "../thirdd-child/thirdd-child.component";
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, SecondChildComponent, ThirddChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage = "Hello from Parent. ";
  childMessage: string = 'No Message received from child. ';
  childMethodMessage: string = 'No Message received from child method. ';
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  userData: any = [];

  constructor(
    private userService: UserService
  ) { }

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  receiveMessage(data: string) {
    this.childMessage = data;
  }
  receiveMethodMessage(data: string) {
    this.childMethodMessage = data;
  }

  callChildMethod() {
    this.childComponent.showMessage();
  }

  getUserData() {
    this.userService.getUser().subscribe((data: any) => {
      this.userData = data
    });
  }
}
