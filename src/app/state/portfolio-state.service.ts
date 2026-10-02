import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Lang, TRANSLATIONS, Translations } from '../data/translations';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class PortfolioState {
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<Theme>('light');
  readonly lang = signal<Lang>('pt');

  readonly t: () => Translations = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const root = this.document.documentElement;
      root.setAttribute('data-theme', this.theme());
      root.setAttribute('data-lang', this.lang());
      root.classList.toggle('dark', this.theme() === 'dark');
    });
  }

  toggleTheme(): void {
    this.theme.update((value) => (value === 'light' ? 'dark' : 'light'));
  }

  toggleLang(): void {
    this.lang.update((value) => (value === 'pt' ? 'en' : 'pt'));
  }
}
