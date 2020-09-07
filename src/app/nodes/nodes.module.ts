import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { NodesListComponent } from './nodesList.component'
import { NodeDetailsComponent } from './nodeDetails.component';
import { NodesDataSource } from './nodes.datasource';

@NgModule({
  imports: [HttpClientModule, CommonModule, RouterModule],
  declarations: [NodesListComponent, NodeDetailsComponent],
  providers: [NodesDataSource]
})
export class NodesModule {}
