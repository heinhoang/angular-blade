import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  template: `
    <app-layout>
      <app-layout-header>
        header
      </app-layout-header>
      <app-sidebar class="left-sidebar">
        sidebar
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
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
