import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class LinklistService {

  constructor(private http: HttpClient) {
    
  }

  getLinks(): any{
    return this.http.get('/linklist/list')
  }
  store(name: String, url: String, description: String): any{
    return this.http.post('/linklist/store', {name, url, description})
  }
}
