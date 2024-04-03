// src/app/features/details/details-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { PitchComponent } from './pitch.component';

export const routes: Routes = [
  {
    path: '',
    component: PitchComponent,
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
})
export class PitchRoutingModule {}
