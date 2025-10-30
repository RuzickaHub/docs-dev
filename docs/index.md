# Until design fluent — Dokumentace (docs-dev)

Vítejte — tady je ukázka integrace Tailwind + **React (Vite)** demo s *shadcn-style* komponentami.

## Demo aplikace (React + Vite)

<!-- Demo app se načte jako čistý JS bundle (vytvořený Vite). -->
<div id="demo-root"></div>

<script>
  // Fallback: pokud se demo nenačte (např. při lokálním renderu bez buildu), zobrazíme odkaz.
  window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('demo-root');
    if (!window.__DEMO_LOADED__) {
      root.innerHTML = '<p><a href="/assets/demo/index.html" target="_blank">Otevřít demo aplikaci (nové okno)</a></p>';
    }
  });
</script>

---

## Hero (shadcn-style)

<div class="header-hero">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-4xl font-extrabold">Design header hero</h1>
    <p class="mt-4 text-lg text-slate-600">Krátký popisek, který vysvětluje co děláme.</p>
    <div class="mt-6">
      <a class="inline-flex items-center gap-2 px-4 py-2 rounded-md shadow-sm text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-white" href="#kontakt">Kontakt</a>
    </div>
  </div>
</div>

