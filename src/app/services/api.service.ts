/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

//  constructor() { }

 address: any = 'https://techpharm.pythonanywhere.com/api';
 address1: any = 'https://edisease.pythonanywhere.com/api';

 httpOptions = {
   headers: new HttpHeaders({
     Accept: 'text/plain',
     'Content-Type': 'application/json',
   })
 };

 httpPutOptions1 = {
   headers: new HttpHeaders({
     // eslint-disable-next-line @typescript-eslint/naming-convention
     Accept: '*/*'
   })
 };

 httpPutOptions = {
   headers: new HttpHeaders({
     Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token') || '{}')

   })
 };

 constructor(
   private httpClient: HttpClient,
   private platform: Platform, private http: HttpClient,
   private artCtrl: AlertController
 ) {

 }

 public portPostData3(url: string, formData: any): Observable<any> {
   return this.httpClient.post(this.address + url, formData, this.httpPutOptions1);
 }


 public MarketGetData(endPoint: string): Observable<any> {
   return this.http.get(this.address + endPoint, this.httpPutOptions1);
 }

 public MarketDeleteData(endPoint: string): Observable<any> {
   return this.http.delete(this.address + endPoint, this.httpOptions);
 }

 public MarketPostData(url: string, formData: any): Observable<any> {
   return this.http.post(this.address1 + url, formData, this.httpPutOptions);
 }

 public MarketPutData(url: string, formData: any): Observable<any> {
   return this.http.put(this.address + url, formData, this.httpPutOptions);
 }

 public GetData(endPoint: string): Observable<any> {
   return this.http.get(this.address + endPoint, this.httpOptions);
 }

 async presentAlert(err, head, sub) {
   const alert = await this.artCtrl.create({
     header: head,
     subHeader: sub,
     message: err,
     buttons: ['OK']
   });

   await alert.present();
 }

}
