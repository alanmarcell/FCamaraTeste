import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'fc-register',
  templateUrl: './app/components/register/register.component.html',
  styleUrls: ['./app/components/register/register.component.css']
})

export class RegisterComponent implements OnInit {
  @Input() user: User;
  newUser: boolean = false;
  error: any;
  myForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authenticationService: AuthService) {
    this.myForm = fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.newUser = true;
    this.user = new User();
    this.user.admin = false;
  }

  authenticate() {
    this.authenticationService
      .authenticateUser(this.user)
      .catch(error => this.error = error);
  }

  save() {
    this.userService
      .save(this.user)
      .then(user => {
        if (user) {
          this.user = user;
        }
        this.authenticate();
      })
      .catch(error => this.error = error);
  }
}
