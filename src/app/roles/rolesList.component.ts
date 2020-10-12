import { Component } from '@angular/core';
import { RolesDataSource } from './roles.datasource';
import { Role } from './model/role.model'

@Component({
  templateUrl: './rolesList.component.html'
})
export class RolesListComponent {

  private _roles: Role[];

  constructor(private rolesDs: RolesDataSource){
    this._roles = [];
    this.rolesDs.getRolesList().subscribe(result => {
      result.forEach(role =>{
        this._roles.push(role);
      });
    })
  }

  get roles(): Role[] {
    return this._roles;
  }
}
