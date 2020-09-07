export class Kernel {
  constructor(public name: string, public release: string, public version: string, public machine: string, public processor: string, public os: string,
  public modules: Object){}
}
