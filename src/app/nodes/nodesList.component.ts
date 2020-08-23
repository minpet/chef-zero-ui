import { Component } from '@angular/core';
import { NodesDataSource } from './nodes.datasource';
import { Node } from './model/node.model'

@Component({
  templateUrl: './nodesList.html'
})
export class NodesListComponent {

  private _nodes;

  constructor(nodesDS: NodesDataSource){

  }

  get nodes(): Node[]{
    return this._nodes;
  }

  public showDetails(node: Node){
  }
}
