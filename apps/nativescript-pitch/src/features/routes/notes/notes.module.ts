import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NOTES_COMPONENTS } from './index';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  imports: [NativeScriptCommonModule, NotesRoutingModule],
  declarations: [...NOTES_COMPONENTS],
  exports: [...NOTES_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class NotesModule {}
