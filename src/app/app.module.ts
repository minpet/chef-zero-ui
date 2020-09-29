import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutModule } from './about/about.module'
import { AboutComponent } from './about/about.component'

import { CookBooksModule } from './cookbooks/cookbook.module';
import { CookBooksListComponent } from './cookbooks/cookbooksList.component';
import { CookBookDetailsComponent } from './cookbooks/cookbookDetails.component';

import { NodesModule } from './nodes/nodes.module';
import { NodesListComponent } from './nodes/nodesList.component';
import { NodeDetailsComponent } from './nodes/nodeDetails.component';

import { VersionDataSource } from './version/version.datasource';

import { AppComponent } from './app.component';

const routes = RouterModule.forRoot([
  {path: 'about', component: AboutComponent},
  {path: 'cookbooks', component: CookBooksListComponent},
  {path: 'cookBookDetails/:cbName', component: CookBookDetailsComponent},
  {path: 'nodes', component: NodesListComponent},
  {path: 'nodeDetails/:nodeName', component: NodeDetailsComponent},
  {path: '**', component: AboutComponent}
]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routes,
    AboutModule,
    CookBooksModule,
    NodesModule
  ],
  providers: [VersionDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
