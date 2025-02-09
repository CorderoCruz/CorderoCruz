import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";
import { By } from "@angular/platform-browser";
import { HeaderService } from "../../services/header/header.service";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let service: HeaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [HeaderService],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    service = TestBed.inject(HeaderService);
    component = fixture.componentInstance;
  });

  it("should set navbar class", () => {
    fixture.detectChanges();
    const navbar = fixture.debugElement.query(By.css("nav"));
    expect(navbar.classes["navbar-inactive"]).toBeTruthy();
    service.updateNavbar();
    fixture.detectChanges();
    expect(navbar.classes["navbar-active"]).toBeTruthy();
    expect(navbar.classes["navbar-inactive"]).toBeFalsy();
  });
});
