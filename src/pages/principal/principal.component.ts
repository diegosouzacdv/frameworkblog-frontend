import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
   }

}
