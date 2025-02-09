import { Component, inject } from "@angular/core";
import { HeaderService } from "../../services/header/header.service";
import { HamburgerMenuComponent } from "../hamburger-menu/hamburger-menu.component";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [HamburgerMenuComponent],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  private readonly headerService = inject<HeaderService>(HeaderService);

  public navbarStatus = this.headerService.smNavbarActive;
}
