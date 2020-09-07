import { Automatic } from './automatic.model';

export class NodeDetails {
  constructor(public name: string, public chef_environment: string, public automatic: Automatic){}
}
