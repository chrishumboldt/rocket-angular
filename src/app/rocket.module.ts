/**
 * @author Chris Humboldt
 */

import { NgModule } from '@angular/core';

import { RocketLoaderModule } from '@chrishumboldt/rocket';

const importExport = [
   RocketLoaderModule
];

@NgModule({
   imports: importExport,
   exports: importExport
})
export class RocketModule {}
