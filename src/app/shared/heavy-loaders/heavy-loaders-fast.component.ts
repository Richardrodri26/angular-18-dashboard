import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [],
  template: '<div>HeavyLoadersFastComponent</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersFastComponent { }
