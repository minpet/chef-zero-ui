import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CookBook } from './model/cookBook.model';
import { Version } from './model/version.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class CookBooksDataSource {
  constructor(private http: HttpClient){}

  getCookBooks(): Observable<CookBook[]> {
    return this.http.get<Object>(environment.restCookbooksListBaseURL).pipe(
      map(response => {
        var parsed : CookBook[] = []
        Object.keys(response).map(cbName =>{
          var cdVersions: Version[] = [];
          let ver: any
          for(ver in response[cbName].versions){
            cdVersions.push(new Version(ver.version, ver.url))
          }
          parsed.push(new CookBook(cbName, response[cbName].url, cdVersions));
        })

        return parsed;
      })
    );
  }

}
