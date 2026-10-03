import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NbButton, NbCluster, NbSection, NbSurface } from '@ng-brutalism/ui';
import { SOCIALS } from '../../data/portfolio.data';
import { PortfolioState } from '../../state/portfolio-state.service';

@Component({
  selector: 'app-contact',
  imports: [NbButton, NbCluster, NbSection, NbSurface],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly state = inject(PortfolioState);
  protected readonly socials = SOCIALS;
}
