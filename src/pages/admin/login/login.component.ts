import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';
import { Login } from './../../../models/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  @ViewChild('closeModal') closeModal!: ElementRef;
  constructor(private authService:AuthService) {

    this.createForm(new Login());
   }

  ngOnInit(): void {
  }

  createForm(login: Login) {
    this.loginForm = new FormGroup({
      username: new FormControl(login.username, [Validators.required]),
      password: new FormControl(login.password, [Validators.required]),
    })
  }

  
  onSubmit() {
    Swal.fire("Entrando...").then(() => { });
    console.log(this.loginForm.value);
    this.authService.authenticate(this.loginForm.value).subscribe(async (response: any) => {
      Swal.fire('Usuario Logado!', '', 'success');
      this.authService.successfullLogin(response['access_token']);
      console.log(response);
      this.closeModal.nativeElement.click();
    }, (errors => {
    }))
}

}
