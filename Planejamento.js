(function () {
  'use strict';

  const SALVAR_AUTOMATICAMENTE = true;
  const OFFSET = 4;

  const dados = [
    // --- DISCIPLINA 1 ---
    `Conteúdo da Disciplina 1`,
    `Habilidade BNCC / Código`,
    `Metodologia e Materiais Utilizados`,
    `Aprendizado Esperado do Trimestre`,

    // --- DISCIPLINA 2 ---
    `Conteúdo da Disciplina 2`,
    `Habilidade BNCC / Código`,
    `Metodologia e Materiais Utilizados`,
    `Aprendizado Esperado do Trimestre`
  ];

  const textareas = document.querySelectorAll('textarea');

  function preencherElemento(el, valor) {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
    setter.call(el, valor);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
    el.style.outline = '2px solid #2ecc71';
    setTimeout(() => (el.style.outline = ''), 1500);
  }

  let preenchidos = 0;
  dados.forEach((valor, i) => {
    const el = textareas[i + OFFSET];
    if (el) {
      preencherElemento(el, valor);
      preenchidos++;
    }
  });

  if (!SALVAR_AUTOMATICAMENTE || preenchidos !== dados.length) return;

  const matrizSection = document.querySelector('#matriz-planejamento') || document;
  const botaoSalvar = [...matrizSection.querySelectorAll('button, input[type="submit"], input[type="button"], a, [role="button"]')].find((b) => {
    const texto = (b.textContent || b.value || b.title || b.getAttribute('aria-label') || '').trim().toLowerCase();
    return texto.includes('salvar');
  });

  if (botaoSalvar) botaoSalvar.click();
})();