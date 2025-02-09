import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  standalone: true,
  selector: "app-home",
  imports: [HeaderComponent],
  styleUrls: [`./home.component.scss`],
  template: `
    <div class="background-container"></div>
    <div>
      <app-header class="py-2"></app-header>
    </div>
  `,
})
export class HomeComponent {}
