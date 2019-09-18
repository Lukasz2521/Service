import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import User from '../../model/user';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: FormGroup;
  submitted: boolean = false;
 
  constructor(private authService: AuthenticationService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      login: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  login({ value, valid }: { value: User, valid: boolean }) {
    this.submitted = true;

    if (valid) {
      this.authService.logIn().subscribe(() => {
        this.authService.isLoggedIn = true;
        this.router.navigateByUrl('/');
      });
    }
  }
}
