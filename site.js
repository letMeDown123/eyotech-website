(() => {
  'use strict';
  let language = 'zh';
  const switcher = document.querySelector('.lang-switch');
  const translations = document.querySelectorAll('[data-zh][data-en]');
  const toast = document.querySelector('.toast');
  let toastTimer;
  function notify(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3000);
  }
  switcher?.addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    translations.forEach(element => { element.textContent = element.dataset[language]; });
    switcher.innerHTML = language === 'zh' ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
    switcher.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换为中文');
    const navigation = document.querySelector('.desktop-nav');
    if (navigation) navigation.setAttribute('aria-label', language === 'zh' ? '主导航' : 'Main navigation');
    const artwork = document.querySelector('.hero-art');
    if (artwork) artwork.setAttribute('aria-label', language === 'zh' ? '由游戏按键、像素方块和轨道构成的抽象游戏插画' : 'An original illustration of a handheld game console and floating pixel blocks');
  });
  document.querySelector('.copy-email')?.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText('303433732@qq.com');
      notify(language === 'zh' ? '邮箱地址已复制' : 'Email address copied');
    } catch {
      notify(language === 'zh' ? '请长按或选中邮箱地址复制' : 'Select the email address to copy it');
    }
  });
})();
