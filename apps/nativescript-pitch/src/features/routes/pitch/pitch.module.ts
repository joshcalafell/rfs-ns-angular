import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { PITCH_COMPONENTS } from './index';
import { PitchRoutingModule } from './pitch-routing.module';

@NgModule({
  imports: [NativeScriptCommonModule, PitchRoutingModule],
  declarations: [...PITCH_COMPONENTS],
  exports: [...PITCH_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class PitchModule {}
