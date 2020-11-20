import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiValueUpdateDirective } from './directives/ui-value-update.pipe';
import { ToDatePipe } from './pipes/to-date.pipe';
import { NbInputModule, NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';



@NgModule({
  declarations: [UiValueUpdateDirective, ToDatePipe, SanitizeHtmlPipe],
  imports: [
    CommonModule,
    NbInputModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule
  ],
  exports: [UiValueUpdateDirective, ToDatePipe, NbInputModule, FormsModule, NbCardModule, NbButtonModule, NbIconModule, SanitizeHtmlPipe]
})
export class SharedModule { }
