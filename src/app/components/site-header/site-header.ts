import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NbButton } from '@ng-brutalism/ui';
import { PortfolioState } from '../../state/portfolio-state.service';

@Component({
  selector: 'app-site-header',
  imports: [NbButton],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly state = inject(PortfolioState);

  /** Destination language of the next press, matching the PT → EN → ES cycle. */
  protected readonly langLabel = computed(() => {
    const order = ['pt', 'en', 'es'] as const;
    return order[(order.indexOf(this.state.lang()) + 1) % 3].toUpperCase();
  });
}
