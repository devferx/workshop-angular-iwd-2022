import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { CardContentComponent } from './card-content/card-content.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    CardTitleComponent,
    CardActionsComponent,
    CardContentComponent,
    CardComponent,
  ],
  template: `
  <div class="container pt-2">
    <app-card *ngFor="let framework of frameworks">
      <app-card-title title={{framework}} />
      <app-card-content />
      <app-card-actions />
    </app-card>
  </div>
  `,
})
export class App {
  frameworks = ['Angular', 'React', "vue", "Next.js", 'Svelte'];
  name = 'Angular';
}

bootstrapApplication(App);
