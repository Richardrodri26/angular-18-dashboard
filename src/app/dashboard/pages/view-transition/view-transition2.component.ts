import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  imports: [TitleComponent],
  template: `
  <app-title title="View Transition 2"></app-title>

  <section class="flex justify-end">
  <img
    srcset="https://picsum.photos/id/10/400/200"
    alt="picsum"
    width="400"
    height="200"
    style="view-transition-name: hero1"
  />

  <div class="bg-blue-500 w-56 h-56" style="view-transition-name: hero2">

  </div>
  </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionComponent { }
