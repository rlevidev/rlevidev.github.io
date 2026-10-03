import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  NbCard,
  NbCardActions,
  NbCardContent,
  NbCardDescription,
  NbCardHeader,
  NbCardTitle,
  NbButton,
  NbChip,
  NbChipGroup,
  NbCluster,
  NbSection,
  NbStack,
  NbText,
  NbTypography,
} from '@ng-brutalism/ui';
import { PROJECTS, SOCIALS, Project } from '../../data/portfolio.data';
import { PortfolioState } from '../../state/portfolio-state.service';

@Component({
  selector: 'app-projects',
  imports: [
    NbCard,
    NbCardActions,
    NbCardContent,
    NbCardDescription,
    NbCardHeader,
    NbCardTitle,
    NbButton,
    NbChip,
    NbChipGroup,
    NbCluster,
    NbSection,
    NbStack,
    NbText,
    NbTypography,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly state = inject(PortfolioState);
  protected readonly projects = PROJECTS;
  protected readonly socials = SOCIALS;

  protected statusTone(status: Project['status']): 'mint' | 'yellow' {
    return status === 'done' ? 'mint' : 'yellow';
  }
}
