import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCrudService {

  constructor(private http: HttpClient) { }

  public getService(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/`);
  }
}
