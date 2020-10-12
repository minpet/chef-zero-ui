import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './model/role.model';
import { RoleDetails } from './model/roleDetails.model';
import { environment} from '../../environments/environment'
import { map } from 'rxjs/operators'

@Injectable()
export class RolesDataSource {
  constructor(private http: HttpClient){}

  public getRolesList(): Observable<Role[]>{
    return this.http.get<Role[]>(environment.restRolesListBaseURL).pipe(
      map(response => {
        var parsed : Role[] = []
        Object.keys(response).map(roleName =>{
          parsed.push(new Role(roleName, response[roleName]));
        })

        return parsed;
    }));
  }

  public getRoleDetails(url: string): Observable<RoleDetails> {
    return this.http.get<RoleDetails>(url);
  }
}
