// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular';

// app
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./features/routes/notes/notes.module').then((m) => m.NotesModule),
  },
  {
    path: 'pitch',
    loadChildren: () =>
      import('./features/routes/pitch/pitch.module').then((m) => m.PitchModule),
  },
  {
    path: 'scales',
    loadChildren: () =>
      import('./features/routes/scales/scales.module').then(
        (m) => m.ScalesModule,
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/routes/settings/settings.module').then(
        (m) => m.SettingsModule,
      ),
  },
];

@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
