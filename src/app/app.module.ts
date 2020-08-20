import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CookBooksModule } from './cookbooks/cookbook.module';
import { CookBooksListComponent } from './cookbooks/cookbooksList.component';
import { AppComponent } from './app.component';

const routes = RouterModule.forRoot([
  {path: 'cookbooks', component: CookBooksListComponent},
  {path: '**', component: CookBooksListComponent}
]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routes,
    CookBooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
