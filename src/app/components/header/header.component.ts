import { Component, inject } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderService } from "../../services/header/header.service";
import { HamburgerMenuComponent } from "../hamburger-menu/hamburger-menu.component";

@Component({
  standalone: true,
  selector: `app-header`,
  styleUrls: ["./header.component.scss"],
  imports: [NavbarComponent, HamburgerMenuComponent],
  templateUrl: `./header.component.html`,
})
export class HeaderComponent {
  private readonly headerService = inject<HeaderService>(HeaderService);

  public readonly isNavbarActive = this.headerService.smNavbarActive;

  public updateNavbarStatus() {
    this.headerService.updateNavbar();
  }
}
