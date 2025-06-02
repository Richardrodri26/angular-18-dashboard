import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@app/shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  imports: [TitleComponent, CommonModule],
  templateUrl: './change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(() => `${this.frameworkAsSignal().name} v${this.frameworkAsSignal().releaseDate}`);

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  })
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  }

  constructor() {
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React'

      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }))

      console.log('Hecho')

    }, 3000)
  }

}
