/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketLayoutBodyComponent } from '../component/layout/body/layout-body.component';
import { RocketLayoutRowComponent } from '../component/layout/row/layout-row.component';
import { RocketLayoutSpanComponent } from '../component/layout/span/layout-span.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RocketLayoutBodyComponent,
    RocketLayoutRowComponent,
    RocketLayoutSpanComponent
  ],
  exports: [
    RocketLayoutBodyComponent,
    RocketLayoutRowComponent,
    RocketLayoutSpanComponent
  ]
})
export class RocketLayoutModule {}
