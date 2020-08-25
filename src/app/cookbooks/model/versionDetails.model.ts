import { FileDetails } from './fileDetails.model';
import { VersionMetadata } from './versionMetadata.model';

export class VersionDetails{
  constructor(public files: FileDetails[], public metadata: VersionMetadata, public name: string){}
}
