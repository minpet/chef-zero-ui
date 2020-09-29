import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuLink } from './model/common/menuLink.model';
import { VersionDataSource } from './version/version.datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version = '1.0'
  private links: MenuLink[] = [];
  public selectedMenu: MenuLink = null;

  constructor(private router: Router, private versionDS: VersionDataSource) {
    this.links = [
      new MenuLink('About', '/about'),
      new MenuLink('Cookbooks', '/cookbooks'),
      new MenuLink('Nodes', '/nodes')
      ];
    this.versionDS.getVersion().subscribe(response => {
      this.version = response;
    });
  }

  get menuLinks(): MenuLink[] {
    return this.links;
  }

  changeMenu(menu: MenuLink) {
    if (menu) {
      this.selectedMenu = menu;
      this.router.navigateByUrl(menu.target);
    }
  }

}
