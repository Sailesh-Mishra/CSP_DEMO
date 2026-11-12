import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CompDataFlowComponent } from "./components/comp-data-flow/comp-data-flow.component";
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { StructuralDemoComponent } from './components/structural-demo/structural-demo.component';
import { ParentComponent } from "./components/data-flow/parent/parent.component";
import { HomeComponent } from "./components/routing-demo/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'csp';
}
