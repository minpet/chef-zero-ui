import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { NodesListComponent } from './nodesList.component'
import { NodesDataSource } from './nodes.datasource';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  declarations: [NodesListComponent],
  providers: [NodesDataSource]
})
export class NodesModule {}
