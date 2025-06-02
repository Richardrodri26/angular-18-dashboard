import { booleanAttribute, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {

  @Input({ required: true })
  public title!: string;

  @Input({ transform: booleanAttribute }) withShadow: boolean = false

}
