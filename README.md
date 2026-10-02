# rlevidev.github.io

Portfólio pessoal — Angular 21 + [ng-brutalism](https://github.com/khangtrannn/ng-brutalism) + Tailwind CSS v4.

## Desenvolvimento

```bash
npm ci
npm start
```

## Build

```bash
npm run build
```

Saída estática em `dist/rlevidev-github-io/browser`.

## Deploy

Push na branch `main` dispara `.github/workflows/deploy.yml`, que builda e publica no GitHub Pages (source: **GitHub Actions**).

## Estrutura

```text
src/app/
├── components/     # blocos da página (header, hero, projects, ...)
├── data/           # projetos, skills e traduções PT/EN tipadas
├── state/          # Signals de tema e idioma
└── app.*           # shell da página
```
