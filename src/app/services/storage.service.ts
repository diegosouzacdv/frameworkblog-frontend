import { Injectable } from '@angular/core';
import { LocalUser } from '../models/local_user';
import { STORAGE_KEYS } from '../config/storage_keys.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class StorageService {

    constructor(
        private http: HttpClient
        ) {}

    getLocalUser() : string {

        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        if (user == null ) {
            return null || '';
        }
        else {
            return JSON.parse(user);
        }
    }

    setLocalUser(objeto : LocalUser | null) {
        
        if (objeto == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(objeto));
        }
    }

    setUsuarioLogado(objeto : string | null) {
        
        if (objeto == null) {
            localStorage.removeItem(STORAGE_KEYS.usuarioLogado);
        }
        else {
            localStorage.setItem(STORAGE_KEYS.usuarioLogado, JSON.stringify(objeto));
        }
    }

    getUsuarioLogado() : string {

        let user = localStorage.getItem(STORAGE_KEYS.usuarioLogado);
        if (user == null ) {
            return null || '';
        }
        else {
            return JSON.parse(user);
        }
    }
}