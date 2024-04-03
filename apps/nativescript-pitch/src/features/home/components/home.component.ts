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
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

      .tagline {
        padding-top: 56px;
        font-size: 22px;
        font-weight: 600;
        text-align: center;
        font-family: 'Inter', sans-serif !important;
        color: white;
      }

      .description,
      .org {
        text-align: center;
        font-family: 'Inter', sans-serif !important;
        color: #e0e0e0;
        font-weight: 600;
        font-size: 26px;
      }

      .org {
        font-size: 28px;
        color: #f9d369;
        font-family: 'Inter', sans-serif !important;
        margin-top: 64px;
      }

      .underline {
        text-decoration: underline;
      }

      .yellow {
        color: #f9d369;
      }

      .btn {
        margin-top: 24px;
        margin-bottom: 24px;
        padding: 24px 18px;
        border-radius: 8px;

        color: black !important;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        font-family: 'Inter', sans-serif !important;
      }

      .btn-label {
        font-size: 24px;
        font-weight: 600;
      }
    `,
  ],
})
export class HomeComponent {
  router = inject(Router);
  items = items;
  ngOnInit() {
    setStatusBarColor('dark', '#232323');
  }

  goTo(destination: string): void {
    if (this.router) {
      this.router.navigate(['/']);
      return;
    }
  }
}
