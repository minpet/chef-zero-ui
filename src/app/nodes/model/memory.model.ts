import { Swap } from './swap.model';
import { Hugepages } from './hugepages.model';
import { Directmap } from './directmap.model';

export class Memory {
  constructor(
    public swap: Swap,
    public hugepages: Hugepages,
    public directmap: Directmap,
    public total: string,
    public free: string,
    public available: string,
    public buffers: string,
    public cached: string,
    public active: string,
    public inactive: string,
    public dirty: string,
    public writeback: string,
    public anon_pages: string,
    public mapped: string,
    public slab: string,
    public slab_reclaimable: string,
    public slab_unreclaim: string,
    public page_tables: string,
    public nfs_unstable: string,
    public bounce: string,
    public commit_limit: string,
    public committed_as: string,
    public vmalloc_total: string,
    public vmalloc_used: string,
    public vmalloc_chunk: string,
    public hugepage_size: string,
    public hugetlb: string){}
}
