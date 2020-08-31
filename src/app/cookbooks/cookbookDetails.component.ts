import { Component } from '@angular/core';
import { CookBook } from './model/cookBook.model';
import { Version } from './model/version.model';
import { VersionDetails } from './model/versionDetails.model';
import { CookBooksDataSource } from './cookbooks.dataSource';
import { VersionDataSource } from './version.dataSource';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RecipesDataSource } from './recipes.datasource';

@Component({
  templateUrl: './cookbookDetails.component.html'
})
export class CookBookDetailsComponent {

  private _selectedCookBook: CookBook;
  private _selectedVersionValue: Version;
  private _versionDetails: VersionDetails;
  private _collapseRecipes: boolean = true;
  private _recipeContent: string;
  private _selectedRecipe;

  constructor(private cbDs: CookBooksDataSource, private verDs: VersionDataSource, private route: ActivatedRoute, private modalService: NgbModal, private recipeDs: RecipesDataSource){
    this.cbDs.getCookBooks().subscribe(cbs => {
      cbs.forEach(cb => {
        if(cb.name == this.route.snapshot.params['cbName']){
          if(cb.versions === undefined){
            cb.versions = []
            this.cbDs.getCookBookVersions(cb).subscribe(versions => {
              versions.forEach(ver =>{
                cb.versions.push(ver);
              });
              this._selectedVersionValue = cb.versions[0];
              this.updateDetails(cb.versions[0]);
            });
          }
          this._selectedCookBook = cb;
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
      if(ver.versionNumber === versionName){
        this._selectedVersionValue = ver;
        this.updateDetails(ver);
      }
    })
  }

  private updateDetails(ver: Version){
    this.verDs.populateDetailsFromUrl(ver.url).subscribe(details => {
      this._versionDetails = details;
      this._collapseRecipes = true;
    });
  }

  public toggleRecipes(){
    this._collapseRecipes = !this._collapseRecipes;
  }

  public getCollapseClass(){
    if(this._collapseRecipes) return "collapse"
    return "collapse.show"
  }

  public open(content, recipe) {
    this._selectedRecipe = recipe;
    this.recipeDs.loadContents(recipe.url).subscribe(data => {
      this._recipeContent = data;
    });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

    });
  }

  get selectedRecipe(){
    return this._selectedRecipe;
  }

  get recipeContent(){
    return this._recipeContent;
  }
}
