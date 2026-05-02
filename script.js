/* ══════════════════════════════════════
   KRISS BEAUTY - Site JavaScript
══════════════════════════════════════ */

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── TYPEWRITER ──
const phrases = [
  'UGC Creator',
  'Content Strategist',
  'Chronic Illness Advocate',
  'Beauty & Wellness Creator',
  'Storytelling Specialist'
];

let phraseIndex = 0, charIndex = 0, deleting = false;
const typeEl = document.getElementById('heroTypewriter');

function type() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typeEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    typeEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 50 : 80);
}
setTimeout(type, 800);

// ── COUNTING STATS ──
function animateCount(el, target, divide) {
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    let val = Math.round(target * ease);
    if (divide) val = (val / divide).toFixed(val % divide === 0 ? 0 : 1);
    el.textContent = val;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsSection = document.getElementById('stats');
let statsCounted = false;

const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !statsCounted) {
    statsCounted = true;
    document.querySelectorAll('.stat-item').forEach(item => {
      const countEl = item.querySelector('.count');
      const target = parseInt(item.dataset.target);
      const divide = item.dataset.divide ? parseInt(item.dataset.divide) : null;
      animateCount(countEl, target, divide);
    });
  }
}, { threshold: 0.3 });

statsObserver.observe(statsSection);

// ── VIDEO DATA ──
// ── VIDEO DATA with real TikTok links ──
const videos = {
  beauty: [
    { views: '826.8K', title: 'ChatGPT for Lab Results', url: 'https://www.tiktok.com/@thekrissbeauty/video/7480322387376885035' },
    { views: '496.6K', title: 'Beauty/Skin Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7496653826561281322' },
    { views: '186.0K', title: 'AI Content Breakdown', url: 'https://www.tiktok.com/@thekrissbeauty/video/7486194272933268782' },
    { views: '157.9K', title: 'AI Tool Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7481020091216186667' },
    { views: '72.6K',  title: 'ACV Shots Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7236376322619002158' },
    { views: '45.2K',  title: 'ACV Shots Pt 2', url: 'https://www.tiktok.com/@thekrissbeauty/video/7237571108680027435' },
  ],
  skincare: [
    { views: '280.0K', title: 'Skincare Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7496653826561281322' },
    { views: '198.3K', title: 'Supplement Routine', url: 'https://www.tiktok.com/@thekrissbeauty/video/7277992710127013162' },
    { views: '134.5K', title: 'Supplement Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7335240175016021290' },
    { views: '89.1K',  title: 'Supplement Collab', url: 'https://www.tiktok.com/@thekrissbeauty/video/7335596289683459374' },
    { views: '62.4K',  title: 'Health Supplement', url: 'https://www.tiktok.com/@thekrissbeauty/video/7436789982448127263' },
    { views: '41.0K',  title: 'Hair Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7265813373323922730' },
  ],
  health: [
    { views: '3.7M',   title: 'Shapewear POV', url: 'https://www.tiktok.com/@thekrissbeauty/video/7270176297089862955' },
    { views: '296.6K', title: 'Weight Loss Journey', url: 'https://www.tiktok.com/@thekrissbeauty/video/7312489386925477162' },
    { views: '212.0K', title: 'Chronic Illness', url: 'https://www.tiktok.com/@thekrissbeauty/video/7315063354882673966' },
    { views: '186.0K', title: 'GLP-1 Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7361175634455924011' },
    { views: '98.7K',  title: 'Health Journey', url: 'https://www.tiktok.com/@thekrissbeauty/video/7404644655922515231' },
    { views: '67.3K',  title: 'Wellness Routine', url: 'https://www.tiktok.com/@thekrissbeauty/video/7411612862348528926' },
    { views: '58.2K',  title: 'Fertility & Hormones', url: 'https://www.tiktok.com/@thekrissbeauty/video/7191914359671639339' },
    { views: '44.1K',  title: 'Hormone Health', url: 'https://www.tiktok.com/@thekrissbeauty/video/7210190761118207274' },
  ],
  fashion: [
    { views: '280.0K', title: 'Plus-Size Fashion Haul', url: 'https://www.tiktok.com/@thekrissbeauty/video/7280559170074578219' },
    { views: '178.4K', title: 'Fashion Try-On', url: 'https://www.tiktok.com/@thekrissbeauty/video/7295768521072479519' },
    { views: '145.2K', title: 'Fashion Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7334733362877222187' },
    { views: '93.6K',  title: 'OOTD Video', url: 'https://www.tiktok.com/@thekrissbeauty/video/7343694865626156330' },
    { views: '71.1K',  title: 'Style Video', url: 'https://www.tiktok.com/@thekrissbeauty/video/7348576526784302382' },
    { views: '52.8K',  title: 'Fashion Collab', url: 'https://www.tiktok.com/@thekrissbeauty/video/7371523484679228715' },
    { views: '48.3K',  title: 'Outfit Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7381577562822020395' },
    { views: '39.7K',  title: 'Fashion Haul', url: 'https://www.tiktok.com/@thekrissbeauty/video/7416831956412894495' },
  ],
  lifestyle: [
    { views: '240.0K', title: 'Travel Vlog', url: 'https://www.tiktok.com/@thekrissbeauty/video/7262343799920135466' },
    { views: '167.3K', title: 'Travel Content', url: 'https://www.tiktok.com/@thekrissbeauty/video/7288348172252957982' },
    { views: '119.8K', title: 'Travel Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7294737016468540702' },
    { views: '88.4K',  title: 'Home & Furniture', url: 'https://www.tiktok.com/@thekrissbeauty/video/7330987233299795246' },
    { views: '61.2K',  title: 'Home Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7331328369914694955' },
    { views: '43.9K',  title: 'Home Haul', url: 'https://www.tiktok.com/@thekrissbeauty/video/7355231133434514731' },
    { views: '38.1K',  title: 'Jewelry Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7312521104743075114' },
    { views: '29.4K',  title: 'App Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7263095277819645230' },
  ],
  wellness: [
    { views: '310.5K', title: 'Wellness Journey', url: 'https://www.tiktok.com/@thekrissbeauty/video/7412323810537377054' },
    { views: '198.7K', title: 'Health & Wellness', url: 'https://www.tiktok.com/@thekrissbeauty/video/7416071155817254174' },
    { views: '142.1K', title: 'Healing Out Loud', url: 'https://www.tiktok.com/@thekrissbeauty/video/7420953967976287519' },
    { views: '96.3K',  title: 'Wellness Routine', url: 'https://www.tiktok.com/@thekrissbeauty/video/7423557218592656671' },
    { views: '74.8K',  title: 'Health Update', url: 'https://www.tiktok.com/@thekrissbeauty/video/7429756277422705951' },
    { views: '51.6K',  title: 'Soft Life Content', url: 'https://www.tiktok.com/@thekrissbeauty/video/7434166548702547231' },
    { views: '44.2K',  title: 'Hair Care Review', url: 'https://www.tiktok.com/@thekrissbeauty/video/7315935731300502830' },
    { views: '33.8K',  title: 'Hair Tutorial', url: 'https://www.tiktok.com/@thekrissbeauty/video/7510386263808314670' },
  ]
};

const gradients = [
  'linear-gradient(160deg,#3a1a2a,#5a2840)',
  'linear-gradient(160deg,#2a1830,#3d2248)',
  'linear-gradient(160deg,#1a2230,#243040)',
  'linear-gradient(160deg,#2a1a18,#4a2820)',
  'linear-gradient(160deg,#1a2218,#243020)',
  'linear-gradient(160deg,#1c1828,#2a2240)',
];

function renderVideos(cat) {
  const grid = document.getElementById('videoGrid');
  const items = videos[cat] || [];
  grid.innerHTML = items.map((v, i) => `
    <a class="vid-card" href="${v.url}" target="_blank" rel="noopener" style="background:${gradients[i % gradients.length]};text-decoration:none;">
      <div class="vid-overlay"></div>
      <div style="position:absolute;top:10px;left:10px;right:10px;z-index:1;">
        <div style="font-size:10px;color:rgba(255,255,255,0.6);line-height:1.4;">${v.title}</div>
      </div>
      <div class="vid-meta">
        <div class="vid-views">▶ ${v.views}</div>
        <div class="vid-cat">${cat} - tap to watch</div>
      </div>
    </a>
  `).join('');
}

// Video tabs
document.querySelectorAll('.vtab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.vtab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderVideos(tab.dataset.cat);
  });
});

renderVideos('beauty');

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = btn.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-q').forEach(b => {
      b.classList.remove('open');
      b.parentElement.querySelector('.faq-a').style.display = 'none';
    });

    if (!isOpen) {
      btn.classList.add('open');
      answer.style.display = 'block';
    }
  });
});

// ── CONTACT FORM ──
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';

  // Also open mailto as fallback
  const name = this.name.value;
  const email = this.email.value;
  const company = this.company.value;
  const budget = this.budget.value;
  const message = this.message.value;
  const subject = encodeURIComponent(`UGC Inquiry from ${company || name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nBudget: ${budget}\n\n${message}`);
  window.location.href = `mailto:thekrissbeauty@gmail.com?subject=${subject}&body=${body}`;
});

// ── SCROLL FADE-INS ──
const fadeEls = document.querySelectorAll(
  '.pkg-card, .roas-card, .brand-pill, .tl-item, .addon-card, .faq-item, .stat-item'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * (Array.from(fadeEls).indexOf(entry.target) % 6));
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));

// ── SMOOTH ACTIVE NAV ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.style.color = scrollY >= top && scrollY < top + height
        ? 'var(--rose)'
        : '';
    }
  });
});
