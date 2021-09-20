import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CadastrarUsuario } from '../../../models/cadastro_usuario';
import { AuthService } from './../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {

  @ViewChild('closeModal') closeModal!: ElementRef;
  usuarioForm!: FormGroup;
  spinner: boolean = false;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.createForm(new CadastrarUsuario());
  }

  ngOnInit(): void {

  }

  createForm(credenciais: CadastrarUsuario) {
    this.usuarioForm = new FormGroup({
      nome: new FormControl(credenciais.nome, [Validators.required]),
      email: new FormControl(credenciais.email, [Validators.required, Validators.email]),
      senha: new FormControl(credenciais.senha, [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    Swal.fire().then(() => {});
    this.spinner = true;
    this.authService.criarUsuario(this.usuarioForm.value).subscribe((response: any) => {
      Swal.fire('Salvo!', '', 'success');
      this.spinner = false;
      this.closeModal.nativeElement.click();
    }, (errors => {
      this.spinner = false;
    }))
    // Usar o método reset para limpar os controles na tela
    //this.usuarioForm.reset(new CadastrarUsuario());
  }
}

