import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class VersionDataSource {

  constructor(private http: HttpClient){}

  public getVersion(): Observable<string>{
    return this.http.get(environment.restVersionBaseURL, {responseType: 'text'});
  }
}
