import { Component } from "@angular/core";
import { HeaderComponent } from "../header/header.component";

@Component({
  standalone: true,
  selector: "app-home",
  imports: [HeaderComponent],
  template: `
    <div class="w-100">
      <app-header class="py-2"></app-header>
    </div>
  `,
})
export class HomeComponent {}
