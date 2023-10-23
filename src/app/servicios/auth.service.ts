import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean= false;
  
  constructor(public storage: Storage) { }

  login(user: string, pass: string): Promise <boolean> {
    return this.storage.get('usuario').then(userGuardado => {
      if(userGuardado.user == user && userGuardado.pass == pass) {
        this.isAuthenticated = true;
        return true;
      } else {
        this.isAuthenticated = false;
        return false;
      }
    })
  }

  logout(): void {
    this.isAuthenticated = false;
  }

}
