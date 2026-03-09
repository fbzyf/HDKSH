/**
 * HDKSH 官网 - 主脚本
 * 功能：导航高亮、滚动效果、基础交互
 */

(function () {
  'use strict';

  // 根据当前路径高亮导航
  function setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // 滚动时导航栏样式
  function handleNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(10, 14, 20, 0.95)';
    } else {
      nav.style.background = 'rgba(10, 14, 20, 0.85)';
    }
  }

  // 滚动进入视口时添加动画（可选）
  function initScrollReveal() {
    const cards = document.querySelectorAll('.brand-card, .advantage-card');
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    cards.forEach(function (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
  }

  // 初始化
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    window.addEventListener('scroll', handleNavScroll);
    initScrollReveal();
  });
})();
