import { Component, inject } from '@angular/core';
import { setStatusBarColor } from '../../../utils';
import { Router } from '@angular/router';

const items = Array.from({ length: 100 }).map((_, i) => ({
  title: `Item ${i}`,
}));

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  router = inject(Router);
  items = items;
  ngOnInit() {
    setStatusBarColor('dark', '#232323');
  }

  goTo(destination: string): void {
    if (this.router) {
      this.router.navigate([destination.toLowerCase()]);
      return;
    }
  }
}
