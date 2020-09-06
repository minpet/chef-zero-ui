import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class FileContentsDataSource {

  constructor(private http: HttpClient){}

  public loadContents(url: string): Observable<string>{
    return this.http.get(url, {responseType: 'text'});
  }
}
