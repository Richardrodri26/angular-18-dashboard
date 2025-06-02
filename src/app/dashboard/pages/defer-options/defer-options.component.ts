import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@app/shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-defer-options',
  imports: [HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent { }
