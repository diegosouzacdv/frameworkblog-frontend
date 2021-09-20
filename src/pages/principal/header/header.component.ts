import { Component, OnInit } from '@angular/core';
import { StorageService } from './../../../services/storage.service';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuarioLogado: string | null =  null;
  constructor(public storage: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.usuariologado ? this.authService.usuariologado : null;
    console.log(this.usuarioLogado);
  }

  ngAfterViewInit() {
    this.usuarioLogado = this.authService.usuariologado ? this.authService.usuariologado : null;
    console.log(this.usuarioLogado);
  }

  sair() {
    this.authService.logout();
  }
}
