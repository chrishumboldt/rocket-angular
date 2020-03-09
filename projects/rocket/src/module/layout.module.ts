/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RocketLayoutBodyComponent } from '../component/layout/body/layout-body.component';
import { RocketLayoutRowComponent } from '../component/layout/row/layout-row.component';
import { RocketLayoutSpacerComponent } from '../component/layout/spacer/layout-spacer.component';
import { RocketLayoutSpanComponent } from '../component/layout/span/layout-span.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RocketLayoutBodyComponent,
    RocketLayoutRowComponent,
    RocketLayoutSpacerComponent,
    RocketLayoutSpanComponent
  ],
  exports: [
    RocketLayoutBodyComponent,
    RocketLayoutRowComponent,
    RocketLayoutSpacerComponent,
    RocketLayoutSpanComponent
  ]
})
export class RocketLayoutModule {}
