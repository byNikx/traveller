import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatChipsModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSliderModule
} from '@angular/material';

const MaterialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule,
  MatTableModule,
  MatChipsModule,
  MatListModule,
  MatExpansionModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSliderModule,
];

@NgModule({
  imports: [
    ...MaterialModules
  ],
  exports: [
    ...MaterialModules
  ]
})
export class MaterialModule { }
