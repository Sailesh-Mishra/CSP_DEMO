import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { APP_NAME } from '../../config/api-injection-token';
import { FakeStoreAPI } from '../../services/fakeStoreApi.service';
@Component({
  selector: 'app-structural-demo',
  imports: [NgStyle, NgClass],
  providers: [
    {
      provide: APP_NAME,
      useValue: 'MY 1st App'
    },
    FakeStoreAPI
  ],
  templateUrl: './structural-demo.component.html',
  styleUrl: './structural-demo.component.css',
})
export class StructuralDemoComponent {
  age: number = 34;
  day: string = 'Friday';
  Fruits: any[] = ['Apple', 'Banana', 'Orange', 'grapes'];
  products: any = [];
  constructor(private appName: FakeStoreAPI) {
    console.log(this.appName.getAppName());
  }
}
