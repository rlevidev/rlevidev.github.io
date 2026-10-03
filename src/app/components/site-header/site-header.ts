import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NbButton, NbIconButton } from '@ng-brutalism/ui';
import { PortfolioState } from '../../state/portfolio-state.service';

@Component({
  selector: 'app-site-header',
  imports: [NbButton, NbIconButton],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly state = inject(PortfolioState);

  protected readonly themeIcon = computed(() => (this.state.theme() === 'dark' ? '☾' : '☀'));
  protected readonly langLabel = computed(() => this.state.lang().toUpperCase());
}
