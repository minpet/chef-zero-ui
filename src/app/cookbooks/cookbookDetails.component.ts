import { Component } from '@angular/core';
import { CookBook } from './model/cookBook.model';
import { Version } from './model/version.model';
import { VersionDetails } from './model/versionDetails.model';
import { CookBooksDataSource } from './cookbooks.dataSource';
import { VersionDataSource } from './version.dataSource';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './cookbookDetails.component.html'
})
export class CookBookDetailsComponent {

  private _selectedCookBook: CookBook;
  private _selectedVersionValue: Version;
  private _versionDetails: VersionDetails;

  constructor(private cbDs: CookBooksDataSource, private verDs: VersionDataSource, private route: ActivatedRoute){
    this.cbDs.getCookBooks().subscribe(cbs => {
      cbs.forEach(cb => {
        if(cb.name == this.route.snapshot.params['cbName']){
          this._selectedCookBook = cb;
          this._selectedVersionValue = cb.versions[0];
          this.updateDetails(cb.versions[0]);
        }
      });
    });
  }

  get cookbook(): CookBook {
    return this._selectedCookBook;
  }

  get selectedVersion(): Version {
    return this._selectedVersionValue;
  }

  get versionDetails(): VersionDetails {
    return this._versionDetails;
  }

  public changeSelectedVersion(versionName: string){
    this._selectedCookBook.versions.forEach(ver => {
      if(ver.versionNumber == versionName){
        this._selectedVersionValue = ver;
        this.updateDetails(ver);
      }
    })
  }

  private updateDetails(ver: Version){
    this.verDs.populateDetailsFromUrl(ver.url).subscribe(details => {
      this._versionDetails = details;
    });
  }
}
