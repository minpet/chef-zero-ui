import { Version } from './version.model';

export class CookBook {
  constructor(public name: string, public latestUrl: string, public versions: Version[]){}
}
