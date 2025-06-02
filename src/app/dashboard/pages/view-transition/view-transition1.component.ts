import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  imports: [TitleComponent],
  template: `
  <app-title title="View Transition 1"></app-title>

  <section class="flex justify-start">
  <img
    srcset="https://picsum.photos/id/10/400/200"
    alt="picsum"
    width="400"
    height="200"
    style="view-transition-name: hero1"
  />

  <div class="bg-blue-800 w-32 h-32 rounded-full fixed bottom-16 right-10" style="view-transition-name: hero2">

  </div>
  </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionComponent { }
