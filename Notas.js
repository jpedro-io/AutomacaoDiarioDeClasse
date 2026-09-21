(function () {
  'use strict';

  const SALVAR_AUTOMATICAMENTE = false;

  const notasSequenciais = [
    "30, 25...",
    "28, 23...",
    "14, 21"
  ];

  const camposNota = document.querySelectorAll('table input[type="text"], table input[type="number"], table select, .linha-aluno input');

  function aplicarValor(el, valor) {
    const proto = el instanceof HTMLSelectElement ? window.HTMLSelectElement.prototype : window.HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
    
    setter.call(el, valor);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.dispatchEvent(new Event('blur', { bubbles: true }));
    
    el.style.backgroundColor = '#e8f8f5';
    el.style.border = '1px solid #2ecc71';
  }

  let lancados = 0;
  notasSequenciais.forEach((nota, index) => {
    if (camposNota[index]) {
      aplicarValor(camposNota[index], nota);
      lancados++;
    }
  });

  if (SALVAR_AUTOMATICAMENTE && lancados > 0) {
    const btnSalvar = [...document.querySelectorAll('button, input[type="submit"], input[type="button"]')].find(b => {
      const txt = (b.textContent || b.value || '').trim().toLowerCase();
      return txt.includes('salvar') || txt.includes('gravar') || txt.includes('finalizar');
    });

    if (btnSalvar) btnSalvar.click();
  }
})();