import { NgModule } from '@angular/core';
import { CookBooksDataSource } from './cookbooks.dataSource';
import { VersionDataSource } from './version.dataSource';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { CookBooksListComponent } from './cookbooksList.component'
import { CookBookDetailsComponent } from './cookbookDetails.component'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileContentsDataSource } from './fileContents.datasource';

@NgModule({
  imports: [HttpClientModule, CommonModule, RouterModule, NgbModule],
  providers: [CookBooksDataSource, VersionDataSource, FileContentsDataSource],
  declarations: [CookBooksListComponent, CookBookDetailsComponent]
})
export class CookBooksModule { }
