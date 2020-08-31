import { NgModule } from '@angular/core';
import { CookBooksDataSource } from './cookbooks.dataSource';
import { VersionDataSource } from './version.dataSource';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { CookBooksListComponent } from './cookbooksList.component'
import { CookBookDetailsComponent } from './cookbookDetails.component'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesDataSource } from './recipes.datasource';

@NgModule({
  imports: [HttpClientModule, CommonModule, RouterModule, NgbModule],
  providers: [CookBooksDataSource, VersionDataSource, RecipesDataSource],
  declarations: [CookBooksListComponent, CookBookDetailsComponent]
})
export class CookBooksModule { }
