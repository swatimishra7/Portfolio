// === SCROLL REVEAL ANIMATIONS === ScrollReveal({ reset: true, distance: '60px', duration: 1000, delay: 100 });

ScrollReveal().reveal('.hero, .btn, .rolling-text', { origin: 'top' }); ScrollReveal().reveal('section h2', { origin: 'left' }); ScrollReveal().reveal('section p, section ul, .skill-tags', { origin: 'bottom', interval: 100 });

// === TYPEWRITER EFFECT === const subtitle = document.querySelector('.subtitle'); const text = "| Web & Game Developer | Prompt Engineer | AI Explorer |"; let idx = 0;

function typeEffect() { if (idx < text.length) { subtitle.textContent += text.charAt(idx); idx++; setTimeout(typeEffect, 70); } }

subtitle.textContent = ""; typeEffect();

// === BACK TO TOP BUTTON === const backToTop = document.createElement('button'); backToTop.innerHTML = '↑'; backToTop.style.position = 'fixed'; backToTop.style.bottom = '30px'; backToTop.style.right = '30px'; backToTop.style.padding = '0.8rem 1rem'; backToTop.style.border = 'none'; backToTop.style.borderRadius = '50%'; backToTop.style.backgroundColor = '#ff004f'; backToTop.style.color = 'white'; backToTop.style.cursor = 'pointer'; backToTop.style.display = 'none'; backToTop.style.zIndex = '999'; document.body.appendChild(backToTop);

window.addEventListener('scroll', () => { if (window.scrollY > 300) { backToTop.style.display = 'block'; } else { backToTop.style.display = 'none'; } });

backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// === DARK / LIGHT THEME TOGGLE === const toggle = document.createElement('button'); toggle.textContent = 'Toggle Theme'; toggle.style.position = 'fixed'; toggle.style.top = '30px'; toggle.style.right = '30px'; toggle.style.padding = '0.6rem 1.2rem'; toggle.style.border = 'none'; toggle.style.borderRadius = '20px'; toggle.style.backgroundColor = '#ff004f'; toggle.style.color = 'white'; toggle.style.cursor = 'pointer'; toggle.style.zIndex = '999'; document.body.appendChild(toggle);

toggle.addEventListener('click', () => { document.body.classList.toggle('light-mode'); });

