// Small JS: prefers-color-scheme switcher placeholder
(function(){
  try {
    const btn = document.createElement('button');
    btn.innerText = 'Toggle theme';
    btn.style.position = 'fixed';
    btn.style.right = '12px';
    btn.style.bottom = '12px';
    btn.className = 'p-2 rounded shadow bg-white/80 backdrop-blur';
    btn.onclick = () => {
      document.documentElement.classList.toggle('dark');
      alert('Theme toggle (simple demo). For persistent dark mode integrate with theme system.');
    };
    document.body.appendChild(btn);
  } catch(e){ console.error(e) }
})();
