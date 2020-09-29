import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment';
import { Node } from './model/node.model';
import { NodeDetails } from './model/nodeDetails.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class NodesDataSource {

  constructor(private http: HttpClient){}

  getNodes(): Observable<Node[]> {
    return this.http.get<Object>(environment.restNodesListBaseURL).pipe(
      map(response => {
        var parsed : Node[] = []
        Object.keys(response).map(nodeName =>{
          parsed.push(new Node(nodeName, response[nodeName]));
        })

        return parsed;
      })
    );
  }

  getNodeDetails(url: string): Observable<NodeDetails>{
    return this.http.get(url, {responseType:'text'}).pipe(
      map(response => {
        let details : NodeDetails = JSON.parse(response)
        let obj = JSON.parse(response)

        // manually add fields that do not conform to javascript object
        details.automatic.memory.directmap.fourK = obj.automatic.memory.directmap['4k']
        details.automatic.memory.directmap.twoM = obj.automatic.memory.directmap['2M']
        return details;
      })
    );
  }
}
