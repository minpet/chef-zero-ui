import { LSB } from './lsb.model';
import { Kernel } from './kernel.model';
import { Memory } from './memory.model';

export class Automatic {
  constructor(public lsb: LSB, public kernel: Kernel, public memory: Memory){}
}
