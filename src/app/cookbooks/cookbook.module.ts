import { NgModule } from '@angular/core';
import { CookBooksDataSource } from './cookbooks.dataSource';
import { VersionDataSource } from './version.dataSource';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { CookBooksListComponent } from './cookbooksList.component'
import { CookBookDetailsComponent } from './cookbookDetails.component'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [HttpClientModule, CommonModule, RouterModule],
  providers: [CookBooksDataSource, VersionDataSource],
  declarations: [CookBooksListComponent, CookBookDetailsComponent]
})
export class CookBooksModule { }
