import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideNgBrutalism } from '@ng-brutalism/ui';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideNgBrutalism({
      theme: {
        yellow: '#F5C242',
        pink: '#FF5C93',
        mint: '#5FE0C0',
        lavender: '#9B8CFA',
        radius: '0px',
        borderWidth: '3px',
        shadowOffsetX: '6px',
        shadowOffsetY: '6px',
        fontSans: "'Space Grotesk', sans-serif",
        fontMono: "'Space Mono', monospace",
      },
    }),
  ],
};
