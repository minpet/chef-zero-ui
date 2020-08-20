import { NgModule } from '@angular/core';
import { CookBooksDataSource } from './cookbooks.dataSource';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { CookBooksListComponent } from './cookbooksList.component'

@NgModule({
  imports: [HttpClientModule, CommonModule],
  providers: [CookBooksDataSource],
  declarations: [CookBooksListComponent]
})
export class CookBooksModule { }
