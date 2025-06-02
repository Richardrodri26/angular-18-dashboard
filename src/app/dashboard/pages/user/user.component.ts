import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';
@Component({
  selector: 'app-user',
  imports: [TitleComponent],
  template: `
    <app-title [title]="titleLabel()"></app-title>
    @if( user() ) {
    <section>
      <img
        [srcset]="user()?.avatar"
        [alt]="user()?.first_name"
        class="rounded w-14"
      />

      <div>
        <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
        <p>{{ user()?.email }}</p>
      </div>
    </section>
    } @else {
    <p>Cargando...</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );
  public titleLabel = computed(() =>
    this.user()
      ? `Información del usuario ${this.user()?.first_name} ${
          this.user()?.last_name
        }`
      : 'Información del usuario'
  );
}
