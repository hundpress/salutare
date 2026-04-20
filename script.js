function initRotator() {
  const titles = ["Toda a Família.", "O seu Bem-estar.", "Vila Verde.", "Si."];
  const container = document.getElementById('title-rotator');
  if (!container) return;
  
  container.innerHTML = titles.map(t => `<span class="title-item">${t}</span>`).join('');
  const items = container.querySelectorAll('.title-item');
  let idx = 0;
  
  gsap.set(items[0], { opacity: 1, y: 0 });
  
  setInterval(() => {
    const cur = items[idx]; 
    idx = (idx + 1) % titles.length; 
    const nxt = items[idx];
    
    gsap.to(cur, { y: "-100%", opacity: 0, duration: 0.8, ease: "power2.inOut" });
    gsap.fromTo(nxt, { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.8, ease: "power2.out" });
  }, 3000);
}

function initMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const toggle = document.getElementById('menu-toggle');
    const close = document.getElementById('menu-close');
    const links = document.querySelectorAll('.mobile-link');

    if (toggle && menu && close) {
        toggle.addEventListener('click', () => menu.classList.add('active'));
        close.addEventListener('click', () => menu.classList.remove('active'));
        links.forEach(l => l.addEventListener('click', () => menu.classList.remove('active')));
    }
}

window.addEventListener('load', () => {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Initialize custom components
  initRotator();
  initMobileMenu();

  // Entrance animations
  gsap.from("#nav", { y: -100, opacity: 0, duration: 1.2, ease: "power4.out" });

  // Scroll animations for elements with .reveal class
  ScrollTrigger.batch(".reveal", { 
    onEnter: b => gsap.to(b, { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }),
    start: "top 90%"
  });
});