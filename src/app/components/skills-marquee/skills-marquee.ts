import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbMarquee, NbMarqueeItem } from '@ng-brutalism/ui';
import { SKILLS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills-marquee',
  imports: [NbMarquee, NbMarqueeItem],
  templateUrl: './skills-marquee.html',
  styleUrl: './skills-marquee.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsMarquee {
  protected readonly skills = SKILLS;
}
