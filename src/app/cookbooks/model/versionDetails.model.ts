import { FileDetails } from './fileDetails.model';
import { VersionMetadata } from './versionMetadata.model';
import { Recipe } from './recipe.model';

export class VersionDetails{
  constructor(public files: FileDetails[], public metadata: VersionMetadata, public name: string, public recipes: Recipe[]){}
}
