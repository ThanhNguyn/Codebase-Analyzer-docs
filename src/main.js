/* ═══════════════════════════════════════════
   Codebase Analyzer Docs — Main Script
   ═══════════════════════════════════════════ */

import './style.css'

;(function () {
  'use strict'

  /* ── Navbar scroll shadow ─────────────────── */
  const navbar = document.querySelector('.navbar')
  const onScroll = () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20)
    highlightNav()
  }
  window.addEventListener('scroll', onScroll, { passive: true })

  /* ── Mobile menu ──────────────────────────── */
  const hamburger = document.querySelector('.nav-hamburger')
  const mobileMenu = document.querySelector('.mobile-menu')
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    mobileMenu?.classList.toggle('open')
  })
  mobileMenu?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('open')
      mobileMenu?.classList.remove('open')
    })
  })

  /* ── Active nav highlight ─────────────────── */
  function highlightNav() {
    const sections = document.querySelectorAll('section[id]')
    const links = document.querySelectorAll('.nav-link, .mobile-menu a')
    let current = ''
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id
    })
    links.forEach((l) => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current)
    })
  }

  /* ── Fade-up on scroll ────────────────────── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

  /* ── Hero terminal typing ─────────────────── */
  const heroLines = document.querySelectorAll('.hero-terminal-body .line')
  heroLines.forEach((line, i) => {
    line.style.animationDelay = `${i * 0.28}s`
  })

  /* ── Copy code button ─────────────────────── */
  document.querySelectorAll('.code-copy').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-window')?.querySelector('pre')
      if (!pre) return
      const text = pre.innerText
      navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent
        btn.textContent = 'copied!'
        btn.classList.add('text-accent', 'border-accent')
        setTimeout(() => {
          btn.textContent = orig
          btn.classList.remove('text-accent', 'border-accent')
        }, 1500)
      })
    })
  })

  /* ── Smooth scroll for nav brand ──────────── */
  document.querySelector('.nav-brand')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  /* ── Active link style ────────────────────── */
  const style = document.createElement('style')
  style.textContent = `
    .nav-link.active,
    .mobile-menu a.active {
      color: var(--color-accent) !important;
      background: rgba(34, 197, 94, 0.08);
    }
  `
  document.head.appendChild(style)
})()
