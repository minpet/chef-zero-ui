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
    return this.http.get<NodeDetails>(url);
  }
}
