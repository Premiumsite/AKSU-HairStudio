
const loader = document.getElementById('loader')
window.addEventListener('load', () => setTimeout(() => loader?.classList.add('hide'), 700))

const topbar = document.getElementById('topbar')
let lastY = 0
window.addEventListener('scroll', () => {
  const y = window.scrollY
  topbar?.classList.toggle('scrolled', y > 30)
  topbar?.classList.toggle('hide', y > lastY && y > 220)
  lastY = y
}, { passive: true })

const menuBtn = document.getElementById('menuBtn')
const nav = document.getElementById('nav')
menuBtn?.addEventListener('click', () => nav?.classList.toggle('open'))
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')))

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show')
  })
}, { threshold: 0.14 })
document.querySelectorAll('.reveal').forEach(el => io.observe(el))

const cursorGlow = document.getElementById('cursorGlow')
window.addEventListener('mousemove', e => {
  if (!cursorGlow) return
  cursorGlow.style.left = e.clientX + 'px'
  cursorGlow.style.top = e.clientY + 'px'
}, { passive: true })

document.querySelectorAll('.spotlight').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width) * 100 + '%')
    card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height) * 100 + '%')
  })
})
