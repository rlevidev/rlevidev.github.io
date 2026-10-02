import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NbSection, NbStack, NbSticker } from '@ng-brutalism/ui';
import { PortfolioState } from '../../state/portfolio-state.service';

@Component({
  selector: 'app-certifications',
  imports: [NbSection, NbStack, NbSticker],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Certifications {
  protected readonly state = inject(PortfolioState);
}
