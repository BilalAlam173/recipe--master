import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Globals } from '../../globals';
@Injectable()
export class AuthService {
    url= Globals.getserverUrl();
    constructor(private http: HttpClient) {}

    signin(email, password) {
        console.log(Globals.getserverToken());
     const thisurl = this.url + '/signin';
        const body = {
            email: email,
            password: password
            };
            const headsser = {
                Authorization: Globals.getserverToken()
            };

        return this.http.post(thisurl , body , {
            headers: new HttpHeaders().set('Authorization', Globals.getserverToken()),
          });
    }
}