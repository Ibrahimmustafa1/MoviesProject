import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  decodedToken: any

  constructor(private _authService: AuthenticationService, private _Router: Router) {
    _authService.logout();
  }
  loginform = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.pattern('^[A-Z][a-z0-9]{3,12}$'), Validators.required]),

  });
  show = 'password';
  showpassword() {

    if (this.show == 'password') this.show = 'text';
    else this.show = 'password';
  }

  error = '';
  y = 0;
  reset() {
    this.y = 0;
  }

  forminfo(x: any) {
    this._authService.login(x.value).subscribe(res => {
      if (res.message == 'success') {
        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          icon: 'success',
          title: "<h5> signe in successfully </h5>",
          background: '#fff',
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        this.decodedToken = jwtDecode(res.token)
        localStorage.setItem('userToken', res.token);
        localStorage.setItem("userId", `${this.decodedToken._id}`)
        this._authService.getuserdata();
        this._Router.navigate(['/home'])
      }

      else {

        Swal.fire({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          icon: 'error',
          title: "<h5> signe in failed </h5>",
          background: '#fff',
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        this.error = res.message; this.y = 1;
      }

    })

  }
  ngOnInit(): void {
  }

}
