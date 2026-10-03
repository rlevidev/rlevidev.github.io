import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbSurface } from '@ng-brutalism/ui';

@Component({
  selector: 'app-terminal-card',
  imports: [NbSurface],
  templateUrl: './terminal-card.html',
  styleUrl: './terminal-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerminalCard {}
