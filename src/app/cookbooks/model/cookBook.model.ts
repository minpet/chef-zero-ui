import { Version } from './version.model';

export class CookBook {
  constructor(public name: string, public versions: Version[]){}
}
