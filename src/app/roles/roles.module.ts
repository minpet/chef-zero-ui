import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { RolesListComponent } from './rolesList.component';
import { RoleDetailsComponent } from './roleDetails.component';
import { RolesDataSource } from './roles.datasource';

@NgModule({
  imports: [ HttpClientModule, CommonModule, RouterModule],
  declarations: [RolesListComponent, RoleDetailsComponent],
  providers: [RolesDataSource]
})
export class RolesModule {}
