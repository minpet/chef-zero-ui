import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NodesDataSource } from './nodes.datasource';
import { NodeDetails } from './model/nodeDetails.model'

@Component({
  templateUrl:'./nodeDetails.component.html'
})
export class NodeDetailsComponent {

  private _selectedNode: NodeDetails;
  private _collapseLsb: boolean = true;
  private _collapseKernel: boolean = true;

  constructor(private nodesDs: NodesDataSource, private route: ActivatedRoute){
    this.nodesDs.getNodes().subscribe(nodes => {
      nodes.forEach(node => {
        if(node.name == this.route.snapshot.params['nodeName']){
          this.nodesDs.getNodeDetails(node.url).subscribe(nodeDetails => {
            this._selectedNode = nodeDetails;
          })
        }
      });
    });
  }

  get node(): NodeDetails {
    return this._selectedNode;
  }

  public toggleLsb(){
    this._collapseLsb = !this._collapseLsb;
  }

  public getLsbCollapseClass(){
    if(this._collapseLsb) return "collapse"
    return "collapse.show"
  }

  public toggleKernel(){
    this._collapseKernel = !this._collapseKernel;
  }

  public getKernelCollapseClass(){
    if(this._collapseKernel) return "collapse"
    return "collapse.show"
  }
}
