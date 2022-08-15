import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error=''
  z=0;
  constructor(private _authService:AuthenticationService,private _Router:Router) {
    this._authService.logout()
   };
 show='password';
 
   registerForm = new FormGroup({
   first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
   last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
   email:new FormControl(null,[Validators.email,Validators.required]),
   password:new FormControl(null,[Validators.pattern('^[A-Z][a-z0-9]{3,12}$'),Validators.required]),
   age:new FormControl(null,[Validators.required,Validators.min(18)]),
   
 })

 showpassword(){
 
  if(this.show=='password') this.show='text';
  else this.show='password';
 }
 
 forminfo(x:any){
  this._authService.register(x.value).subscribe((res)=>{

    if(res.message=='success'){
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
      this._Router.navigate(['/login']); 
    }
    else{
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
      
      this.error=res.errors.email.message;
      this.z=1;
    }
  });

 }
reset(){
  this.z=0;
}

  ngOnInit(): void {
  }

}
