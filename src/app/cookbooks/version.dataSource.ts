import { Injectable } from '@angular/core';
import { VersionDetails } from './model/versionDetails.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VersionDataSource {
  constructor(private http: HttpClient){}

  populateDetailsFromUrl(url: string): Observable<VersionDetails> {
    return this.http.get<VersionDetails>(url)
  }

}
