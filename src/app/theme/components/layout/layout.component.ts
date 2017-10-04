import {
  Component,
  OnInit,
  Input,
  HostBinding
} from '@angular/core';
import { toBool } from '../../utils/helpers';

/**
 * Page header component.
 * Located on top of the page above the layout columns and sidebars.
 * Could be made `fixed` by setting the corresponding property. In the fixed mode the header becomes
 * sticky to the top of the nb-layout (to of the page).
 */
@Component({
  selector: 'app-layout-header',
  template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `
})
export class LayoutHeaderComponent {
  @HostBinding('class.fixed') fixedValue: boolean;

  @Input()
  set fixed(val: boolean) {
    this.fixedValue = toBool(val);
  }
}

/**
 * Page footer.
 * Located under the nb-layout content (specifically, under the columns).
 * Could be made `fixed`, becoming sticky to the bottom of the view port (window).
 */
@Component({
  selector: 'app-layout-footer',
  template: `
    <footer [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </footer>
  `
})
export class LayoutFooterComponent {
  @HostBinding('class.fixed') fixedValue: boolean;

  @Input()
  set fixed(val: boolean) {
    this.fixedValue = toBool(val);
  }
}

/**
 * A container component which determines a content position inside of the layout.
 * The layout could contain unlimited columns (not including the sidebars).
 *
 * @example By default the columns are ordered from the left to the right,
 * but it's also possible to overwrite this behavior by setting a `left` attribute to the column,
 * moving it to the very first position:
 * ```
 * <app-layout>
 *   <app-layout-column>Second</app-layout-column>
 *   <app-layout-column>Third</app-layout-column>
 *   <app-layout-column left>First</app-layout-column>
 * </app-layout>
 * ```
 */
@Component({
  selector: 'app-layout-column',
  template: `
    <ng-content></ng-content>
  `
})
export class LayoutColumnComponent {
  @HostBinding('class.lefft') leftValue: boolean;

  @Input()
  set left(val: boolean) {
    this.leftValue = toBool(val);
  }
}

/**
 * Main layout container
 * @example A simple layout example:
 *
 * ```
 * <app-layout>
 *   <app-layout-header>Great Company</app-layout-header>
 *
 *   <app-layout-column>
 *     Hello World!
 *   </app-layout-column>
 *
 *   <app-layout-footer>Contact us</nb-layout-footer>
 * </app-layout>
 * ```
 */
@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.component.css'],
  template: `
    <ng-template #appLayoutTop></ng-template>
    <div class="scrollable-container">
      <div class="layout">
        <ng-content select="app-layout-header"></ng-content>
        <div class="layout__container">
          <ng-content select="app-layout-sidebar"></ng-content>
          <div class="layout__main">
            <div class="layout__collumns">
              <ng-content select="app-layout-column"></ng-content>
            </div>
            <ng-content select="router-outlet"></ng-content>
            <ng-content select="app-layout-footer"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
