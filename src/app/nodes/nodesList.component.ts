import { Component } from '@angular/core';
import { NodesDataSource } from './nodes.datasource';
import { Node } from './model/node.model'

@Component({
  templateUrl: './nodesList.html'
})
export class NodesListComponent {

  private _nodes: Node[] = [];

  constructor(private ds: NodesDataSource){
   this.ds.getNodes().subscribe(result => {
     this._nodes.length = 0;
     result.forEach(n => {
       this._nodes.push(n);
     });
   });
  }

  get nodes(): Node[]{
    return this._nodes;
  }

}
