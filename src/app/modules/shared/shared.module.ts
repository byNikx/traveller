import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';
import { ContainerDirective } from './directives/container.directive';

@NgModule({
  declarations: [ContainerDirective],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    ContainerDirective
  ]
})
export class SharedModule { }
