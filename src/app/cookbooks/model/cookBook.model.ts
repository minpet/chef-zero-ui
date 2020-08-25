import { Version } from './version.model';

export class CookBook {
  constructor(public name: string, public url: string, public versions?: Version[]){}
}
