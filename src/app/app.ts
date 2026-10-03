import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Certifications } from './components/certifications/certifications';
import { Contact } from './components/contact/contact';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { SkillsMarquee } from './components/skills-marquee/skills-marquee';
import { Trajectory } from './components/trajectory/trajectory';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeader,
    Hero,
    SkillsMarquee,
    Projects,
    Trajectory,
    Certifications,
    Contact,
    SiteFooter,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
