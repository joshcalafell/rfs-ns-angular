import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SCALES_COMPONENTS } from './index';
import { ScalesRoutingModule } from './scales-routing.module';

@NgModule({
  imports: [NativeScriptCommonModule, ScalesRoutingModule],
  declarations: [...SCALES_COMPONENTS],
  exports: [...SCALES_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class ScalesModule {}
