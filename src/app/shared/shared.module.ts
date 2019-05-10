import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatSelectModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatTableModule,
  MatRadioModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatSortModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatDialogModule
} from "@angular/material";

const materialModules = [
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatTabsModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatTableModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatRadioModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatSortModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModules],
  exports: [...materialModules]
})
export class SharedModule {}
