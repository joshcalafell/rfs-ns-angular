import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SETTINGS_COMPONENTS } from '.';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [NativeScriptCommonModule, SettingsRoutingModule],
  declarations: [...SETTINGS_COMPONENTS],
  exports: [...SETTINGS_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class SettingsModule {}
