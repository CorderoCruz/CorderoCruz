import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  public readonly smNavbarActive = signal<boolean>(false);

  public updateNavbar() {
    this.smNavbarActive.update((bool) => !bool);
  }
}
