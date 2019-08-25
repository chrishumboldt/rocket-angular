/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';

import { RocketLoaderModule } from '@rocket';

const importExport = [
   RocketLoaderModule
];

@NgModule({
   imports: importExport,
   exports: importExport
})
export class RocketModule {}
