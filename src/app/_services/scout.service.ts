import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { appConfig } from '../app.config';
import { Scout } from '../_models/index';
 
@Injectable()
export class ScoutService {
    constructor(private http: HttpClient) { }
 
    list() {
        return this.http.get<Scout[]>(appConfig.apiUrl + '/scout/list');
    }
 
    detail(_id: string) {
        return this.http.get(appConfig.apiUrl + '/scout/' + _id + '/detail');
    }
 
    insert(scout: Scout) {
        return this.http.post(appConfig.apiUrl + '/scout/insert', scout);
    }
 
    update(_id: string, scout: Scout) {
        return this.http.put(appConfig.apiUrl + '/scout/' + _id + '/update', scout);
    }
 
    delete(_id: string) {
      return this.http.delete(appConfig.apiUrl + '/scout/' + _id + '/delete');
    }

    addTransaction(_id: string, transaction: Transaction) {
      return this.http.put(appConfig.apiUrl + '/scout/' + _id + '/transaction/insert', transaction);
    }

    deleteTransaction(_id: string, trId: string) {
      return this.http.delete(appConfig.apiUrl + '/scout/' + _id + '/transaction/' + trId + '/delete');
    }

    getQR(_id: string) {
      return this.http.get(appConfig.apiUrl + '/scout/' + _id + '/qrcode');
    }

    listQR() {
      return this.http.get(appConfig.apiUrl + '/scout/qrcode');
    }
}