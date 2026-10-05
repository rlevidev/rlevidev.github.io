import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { NbText } from '@ng-brutalism/ui';
import { SOCIALS } from '../../data/portfolio.data';
import { Lang, TRANSLATIONS } from '../../data/translations';
import { PortfolioState } from '../../state/portfolio-state.service';
import { TerminalCard } from '../terminal-card/terminal-card';

const TYPE_MS = 95;
const DELETE_MS = 55;
const HOLD_MS = 1400;

@Component({
  selector: 'app-hero',
  imports: [NbText, TerminalCard],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements OnDestroy {
  protected readonly state = inject(PortfolioState);
  protected readonly socials = SOCIALS;

  /** Cycles on its own: the header language button must not drive this loop. */
  protected readonly typedGreeting = signal('');

  private readonly cycle: Lang[] = ['pt', 'en', 'es'];
  private index = 0;
  private deleting = false;
  private timer?: number;

  constructor() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.typedGreeting.set(TRANSLATIONS[this.cycle[this.index]].hero_greeting);
      return;
    }
    this.step();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private step(): void {
    const word = TRANSLATIONS[this.cycle[this.index]].hero_greeting;
    const text = this.typedGreeting();

    if (this.deleting) {
      if (!text) {
        this.deleting = false;
        this.index = (this.index + 1) % this.cycle.length;
      } else {
        this.typedGreeting.set(text.slice(0, -1));
      }
      this.timer = setTimeout(() => this.step(), DELETE_MS);
      return;
    }

    if (text === word) {
      this.deleting = true;
      this.timer = setTimeout(() => this.step(), HOLD_MS);
      return;
    }

    this.typedGreeting.set(text + word[text.length]);
    this.timer = setTimeout(() => this.step(), TYPE_MS);
  }
}
