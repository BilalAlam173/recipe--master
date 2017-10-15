import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    static serverToken = 'dmFsbGV5Zm9yZ2U6MTY3NDA=';
    static serverUrl= 'https://recipe-app-server.herokuapp.com';
    static currentUser= '';
    // static serverUrl= 'http://localhost:8090';
    static getserverToken() {
      return Globals.serverToken;
    }
    static getserverUrl() {
      return Globals.serverUrl;
    }
    static setUser(user) {
      Globals.currentUser = user;
    }
    static getUser() {
      return Globals.currentUser;
    }
    static removeUser() {
      Globals.currentUser = '';
    }
  }