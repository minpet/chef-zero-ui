import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CookBooksModule } from './cookbooks/cookbook.module';
import { CookBooksListComponent } from './cookbooks/cookbooksList.component';

import { NodesModule } from './nodes/nodes.module';
import { NodesListComponent } from './nodes/nodesList.component';
import { AppComponent } from './app.component';

const routes = RouterModule.forRoot([
  {path: 'cookbooks', component: CookBooksListComponent},
  {path: 'nodes', component: NodesListComponent},
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
    NodesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
