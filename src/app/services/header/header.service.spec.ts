import { TestBed } from "@angular/core/testing";

import { HeaderService } from "./header.service";

describe("HeaderService", () => {
  let service: HeaderService;

  beforeEach(() => {
    service = TestBed.inject(HeaderService);
  });

  it("should update navbar status", () => {
    expect(service.smNavbarActive()).toBeFalsy();
    service.updateNavbar();
    expect(service.smNavbarActive()).toBeTruthy();
    service.updateNavbar();
    expect(service.smNavbarActive()).toBeFalsy();
  });
});
