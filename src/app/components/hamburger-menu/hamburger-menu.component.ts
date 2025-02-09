import { Component, inject } from "@angular/core";
import { HeaderService } from "../../services/header/header.service";

@Component({
  selector: "app-hamburger-menu",
  standalone: true,
  imports: [],
  templateUrl: "./hamburger-menu.component.html",
  styleUrl: "./hamburger-menu.component.scss",
})
export class HamburgerMenuComponent {
  private readonly headerService = inject<HeaderService>(HeaderService);

  public readonly isNavbarActive = this.headerService.smNavbarActive;

  public updateNavbarStatus() {
    this.headerService.updateNavbar();
  }
}
