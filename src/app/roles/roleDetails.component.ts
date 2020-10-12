import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RolesDataSource } from './roles.datasource';
import { RoleDetails } from './model/roleDetails.model'

@Component({
  templateUrl: './roleDetails.component.html'
})
export class RoleDetailsComponent {
  private _selectedRole: RoleDetails;

  constructor(private rolesDs: RolesDataSource, private route: ActivatedRoute){
    this.rolesDs.getRolesList().subscribe(roles => {
      roles.forEach(role => {
        if(role.name == this.route.snapshot.params['roleName']){
          this.rolesDs.getRoleDetails(role.url).subscribe(roleDetails => {
            this._selectedRole = roleDetails;
          })
        }
      });
    });
  }

  get role(): RoleDetails {
    return this._selectedRole;
  }
}
