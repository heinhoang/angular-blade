import { Component, OnInit, ElementRef, Renderer2, AfterViewInit, Input } from '@angular/core';

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
    <div class="sidebar">
      <ng-content select="app-sidebar-header"></ng-content>
      <div class="scrollable">
        <ng-content></ng-content>
      </div>
      <ng-content select="app-sidebar-footer"></ng-content>
    </div>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    protected elementRef: ElementRef,
    protected renderer: Renderer2
  ) {

  }

}
