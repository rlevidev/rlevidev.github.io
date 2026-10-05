import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Lang, TRANSLATIONS, Translations } from '../data/translations';

export type Theme = 'light' | 'dark';

/** BCP 47 tags per language, mirrored on <html lang>. */
const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };

/** Target language of the next `toggleLang()` press, in cycle order. */
const NEXT_LANG: Record<Lang, Lang> = { pt: 'en', en: 'es', es: 'pt' };

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
      // Programmatic language of the page: screen readers need this to give the
      // English copy an English voice instead of reading it as Portuguese.
      root.setAttribute('lang', HTML_LANG[this.lang()]);
      root.classList.toggle('dark', this.theme() === 'dark');
    });
  }

  toggleTheme(): void {
    this.theme.update((value) => (value === 'light' ? 'dark' : 'light'));
  }

  toggleLang(): void {
    this.lang.update((value) => NEXT_LANG[value]);
  }
}
