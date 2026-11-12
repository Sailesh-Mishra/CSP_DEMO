import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Transform } from "../../directives/transform.directive";

@Component({
  selector: 'app-life-cycle',
  imports: [Transform],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log("Contructor Called");
  }

  ngOnChanges() {
    console.log("Ng OnChanges Called when input properties change");
  }

  ngOnInit() {
    console.log("Called Once at the component loading time when to initialize a complex api call or a variable or form...");
  }

  ngDoCheck() {
    console.log("Called after every change detection");
  }

  ngAfterContentInit() {
    console.log("Called after all content projected into component where initialization happens");
  }

  ngAfterContentChecked() {
    console.log("Called to check whether all content projected into componentent succeccfully or not");
  }

  ngAfterViewInit() {
    console.log("Called after view of the particular component or global view initialize for output");
  }

  ngAfterViewChecked() {
    console.log("Called to check whether view checked successfully or not");
  }

  ngOnDestroy() {
    console.log("Called just before destuction of component , used clean up resource & unsubscribe observable & remove event listners");
  }
}
