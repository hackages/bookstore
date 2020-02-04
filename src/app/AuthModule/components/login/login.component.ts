import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "bs-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      login: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [
        Validators.minLength(8),
        Validators.required
      ])
    });
  }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  login() {
    const login = this.loginForm.controls.login.value;
    const password = this.loginForm.controls.password.value;
    this.authService.login(login, password);
    this.router.navigate(["dashboard"]);
  }
}
