import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  template: `
    <app-layout>
      <app-layout-header>
        <app-header></app-header>
      </app-layout-header>
      <app-sidebar class="sidebar__container">
        <app-sidebar-header>
          Header
        </app-sidebar-header>
        <ng-content select="nb-menu"></ng-content>
      </app-sidebar>
      <app-layout-column class="main-content">
        main content
      </app-layout-column>
      <app-layout-footer>
        footer
      </app-layout-footer>
      <router-outlet></router-outlet>
    </app-layout>
  `,
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
