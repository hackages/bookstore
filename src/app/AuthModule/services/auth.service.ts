import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private router: Router) {}
  login(email, password) {
    localStorage.setItem("token", JSON.stringify({ password, email }));
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }

  isAuthenticated() {
    return !!localStorage.getItem("token");
  }
}
