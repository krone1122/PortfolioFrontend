import { Injectable } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders, HttpRequest} from '@angular/common/http';
import { User } from '../shared/entities';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(public http: HttpClient) { }

  getAllUsers():Observable<User[]>{
    let headers = new HttpHeaders();

    return this.http.get('http://localhost:5000/user', {headers:headers})
      .pipe(map(response => <User[]>response));
  }
}
