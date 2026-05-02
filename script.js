/* ══════════════════════════════════════
   KRISS BEAUTY — Site JavaScript
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
const videos = {
  beauty: [
    { views: '826.8K', title: 'Pinned · ChatGPT for Lab Results' },
    { views: '296.6K', title: 'Easiest 7 lbs I\'ve Ever Lost' },
    { views: '186.0K', title: 'Unboxing & Review UGC Ad' },
    { views: '157.9K', title: 'Beauty Routine Breakdown' },
    { views: '72.6K',  title: 'Get Ready With Me' },
    { views: '45.2K',  title: 'Product First Impressions' },
  ],
  skincare: [
    { views: '280.0K', title: 'Skincare for Dry Skin Review' },
    { views: '198.3K', title: 'Mixsoon Bean Essence GRWM' },
    { views: '134.5K', title: 'Morning Skincare Routine' },
    { views: '89.1K',  title: 'Affordable Skincare Finds' },
    { views: '62.4K',  title: 'Skin Tone Matching Tutorial' },
    { views: '41.0K',  title: 'Physician\'s Choice Unboxing' },
  ],
  health: [
    { views: '3.7M',   title: 'Shapewear POV Testimonial' },
    { views: '296.6K', title: 'Brello Health ROAS Story' },
    { views: '212.0K', title: 'Chronic Illness Girlies: What Are We Doing' },
    { views: '186.0K', title: 'GLP-1 Journey Honest Review' },
    { views: '98.7K',  title: 'Supplement Routine 2024' },
    { views: '67.3K',  title: 'Regenics Review + Results' },
  ],
  fashion: [
    { views: '280.0K', title: 'Plus-Size Fashion Haul' },
    { views: '178.4K', title: 'Torrid Try-On Review' },
    { views: '145.2K', title: 'Adore Me Unboxing' },
    { views: '93.6K',  title: 'Bloomchic Honest Review' },
    { views: '71.1K',  title: 'OOTD for Chronic Illness Days' },
    { views: '52.8K',  title: 'heyshape Shapewear Test' },
  ],
  lifestyle: [
    { views: '240.0K', title: 'Day in My Life with Chronic Illness' },
    { views: '167.3K', title: 'Healing Girlie Morning Routine' },
    { views: '119.8K', title: 'Soft Life Products I\'m Obsessed With' },
    { views: '88.4K',  title: 'Costway Home Haul' },
    { views: '61.2K',  title: 'Magic Spoon Honest Review' },
    { views: '43.9K',  title: 'Skinny Mixes Recipe Collab' },
  ],
  wellness: [
    { views: '310.5K', title: 'Wellness Routine for Spoonies' },
    { views: '198.7K', title: 'Autoimmune Disease Journey' },
    { views: '142.1K', title: 'Healing Out Loud Story' },
    { views: '96.3K',  title: 'Supplements That Actually Work' },
    { views: '74.8K',  title: 'Aspect Health Telehealth Review' },
    { views: '51.6K',  title: 'Soft Life for Chronic Girlies' },
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
    <div class="vid-card" style="background:${gradients[i % gradients.length]}">
      <div class="vid-overlay"></div>
      <div class="vid-meta">
        <div class="vid-views">▶ ${v.views}</div>
        <div class="vid-cat">${cat}</div>
      </div>
      <div style="position:absolute;top:10px;left:10px;right:10px;z-index:1;">
        <div style="font-size:10px;color:rgba(255,255,255,0.5);line-height:1.4;">${v.title}</div>
      </div>
    </div>
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
