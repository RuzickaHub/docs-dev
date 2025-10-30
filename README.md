# docs-dev (repo) — MkDocs + Vite React demo — Auto-deploy to GitHub Pages

Repozitory: https://github.com/RuzickaHub/docs-dev

Tento projekt slouží pro hostování dokumentace na GitHub Pages pod cestou `/rj-docs`:
- Výsledná stránka: `https://RuzickaHub.github.io/rj-docs`
- Automatické nasazení: GitHub Actions spustí build a deploy při každém **push** (každém commitu).

Obsah projektu:
- MkDocs (Material) + `mkdocs-live-edit-plugin`
- Root Tailwind build pro dokumentaci (`docs/assets/styles/tailwind.css`)
- `apps/demo` — Vite + React + TypeScript demo (shadcn-style komponenty). Build se zkopíruje do `docs/assets/demo/`.
- GitHub Actions workflow spouští `npm run build:all`, `mkdocs build` a deploy do větve `gh-pages`.

Jak nasadit do GitHub:
1. Vytvoř repozitář `RuzickaHub/docs-dev` (nebo použij existující).
2. Nahraj obsah tohoto projektu do kořene repozitáře (push).
3. GitHub Actions automaticky buildne a nasadí site do `gh-pages` branch.
4. V nastavení repozitáře -> Pages: zvol `gh-pages` branch a `/(root)` pokud je potřeba (většinou action už to zřídí).

Poznámky:
- `mkdocs.yml` má `site_url` nastaveno na `https://RuzickaHub.github.io/rj-docs`.
- Workflow je nakonfigurován tak, aby se spouštěl při každém pushu (bez omezení větví).
