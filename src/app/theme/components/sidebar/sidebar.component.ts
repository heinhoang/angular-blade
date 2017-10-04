import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  template: `
    <ng-content></ng-content>
  `
})
export class SidebarHeaderComponent {
}

@Component({
  selector: 'app-sidebar-footer',
  template: `
    <ng-content></ng-content>
  `
})
export class SidebarFooterComponent {
}

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar__container">
      <ng-content select="app-sidebar-header"></ng-content>
      <div class="scrollable">
        <ng-content></ng-content>
      </div>
      <ng-content select="app-sidebar-footer"></ng-content>
    </div>
  `,
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
