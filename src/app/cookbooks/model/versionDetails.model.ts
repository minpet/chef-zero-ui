import { FileDetails } from './fileDetails.model';
import { VersionMetadata } from './versionMetadata.model';

export class VersionDetails{
  constructor(public all_files: FileDetails[], public metadata: VersionMetadata){}
}
