import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [],
  template: '<div>HeavyLoadersSlowComponent</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent { }
