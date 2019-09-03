import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.logIn().subscribe(() => {
      this.authService.isLoggedIn = true;
      this.router.navigateByUrl('/');
    });
  }
}
