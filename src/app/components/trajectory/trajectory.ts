import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NbSection, NbSplit, NbStack, NbSticker, NbSurface } from '@ng-brutalism/ui';
import { PortfolioState } from '../../state/portfolio-state.service';

interface TrajectoryColumn {
  readonly tone: 'edu' | 'exp';
  readonly icon: string;
  readonly headKey: 'traj_edu_head' | 'traj_exp_head';
}

@Component({
  selector: 'app-trajectory',
  imports: [NbSection, NbSplit, NbStack, NbSticker, NbSurface],
  templateUrl: './trajectory.html',
  styleUrl: './trajectory.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trajectory {
  protected readonly state = inject(PortfolioState);

  protected readonly columns: readonly TrajectoryColumn[] = [
    { tone: 'edu', icon: '🎓', headKey: 'traj_edu_head' },
    { tone: 'exp', icon: '💼', headKey: 'traj_exp_head' },
  ];
}
