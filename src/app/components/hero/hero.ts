import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NbButton, NbCluster, NbDisplay, NbStat, NbStatusDot, NbText } from '@ng-brutalism/ui';
import { SOCIALS, STATS } from '../../data/portfolio.data';
import { PortfolioState } from '../../state/portfolio-state.service';
import { TerminalCard } from '../terminal-card/terminal-card';

@Component({
  selector: 'app-hero',
  imports: [NbButton, NbCluster, NbDisplay, NbStat, NbStatusDot, NbText, TerminalCard],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly state = inject(PortfolioState);
  protected readonly stats = STATS;
  protected readonly socials = SOCIALS;
}
