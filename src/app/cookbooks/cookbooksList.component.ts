import { Component } from '@angular/core'
import { CookBooksDataSource } from './cookbooks.dataSource';
import { CookBook } from './model/cookBook.model'

@Component({
  templateUrl: './cookbooksList.component.html'
})
export class CookBooksListComponent {

 private _cookbooks: CookBook[] = []

 constructor(private ds: CookBooksDataSource){
   this.ds.getCookBooks().subscribe(result => {
     this._cookbooks.length = 0;
     result.forEach(cb => {
       this._cookbooks.push(cb);
     });
   });
 }

 get cookbooks(): CookBook[]{
   return this._cookbooks;
 }

}
