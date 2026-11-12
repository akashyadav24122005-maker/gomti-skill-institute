'use strict';

/* ===== 1. Mobile menu ===== */
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  siteNav.classList.toggle('is-open', open);
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

// Close after choosing a link
siteNav.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});

// Close with Escape and return focus to the button
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
    setMenu(false);
    menuToggle.focus();
  }
});

// Reset when the screen grows to desktop width
window.matchMedia('(min-width: 900px)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});

/* ===== 2. Highlight current section in nav ===== */
const navLinks = [...siteNav.querySelectorAll('a')];
const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href')));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((a) =>
          a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id)
        );
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach((s) => s && observer.observe(s));
}

/* ===== 3. Course filter ===== */
const chips = document.querySelectorAll('.chip');
const courses = document.querySelectorAll('.course');
const emptyMsg = document.getElementById('emptyMsg');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => {
      const active = c === chip;
      c.classList.toggle('is-active', active);
      c.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    courses.forEach((course) => {
      const show = filter === 'all' || course.dataset.category === filter;
      course.hidden = !show;
      if (show) visible++;
    });
    emptyMsg.hidden = visible > 0;
  });
});

/* ===== 4. Form validation ===== */
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

// Each rule returns an error message, or '' when the value is fine.
const rules = {
  name(v) {
    if (!v) return 'Enter your full name.';
    if (v.length < 2) return 'Your name must have at least 2 characters.';
    if (!/^[A-Za-z][A-Za-z .'-]*$/.test(v)) return 'Use letters only. Numbers and symbols are not allowed in names.';
    return '';
  },
  email(v) {
    if (!v) return 'Enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Enter a valid email, for example name@example.com.';
    return '';
  },
  phone(v) {
    const digits = v.replace(/[\s-]/g, '');
    if (!digits) return 'Enter your mobile number.';
    if (!/^\d+$/.test(digits)) return 'Use digits only, without letters or symbols.';
    if (!/^[6-9]\d{9}$/.test(digits)) return 'Enter a 10-digit Indian mobile number starting with 6, 7, 8 or 9.';
    return '';
  },
  course(v) {
    return v ? '' : 'Choose the course you are interested in.';
  },
  message(v) {
    if (!v) return 'Write a short message.';
    if (v.length < 10) return `Add a little more detail. ${10 - v.length} more character${10 - v.length === 1 ? '' : 's'} needed.`;
    if (v.length > 500) return 'Keep your message under 500 characters.';
    return '';
  }
};

function validateField(input) {
  const field = input.closest('.field');
  const errorEl = document.getElementById(input.id + '-error');
  const message = rules[input.name](input.value.trim());

  errorEl.textContent = message;
  field.classList.toggle('has-error', Boolean(message));
  field.classList.toggle('is-valid', !message);
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
  return !message;
}

const inputs = [...form.querySelectorAll('input, select, textarea')];

inputs.forEach((input) => {
  // Validate when leaving a field; once it has an error, re-check while typing.
  input.addEventListener('blur', () => validateField(input));
  const recheck = () => {
    if (input.closest('.field').classList.contains('has-error')) validateField(input);
  };
  input.addEventListener('input', recheck);
  input.addEventListener('change', recheck);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  statusEl.textContent = '';
  statusEl.className = 'form-status';

  const results = inputs.map(validateField);
  const firstInvalid = inputs[results.indexOf(false)];

  if (firstInvalid) {
    const count = results.filter((ok) => !ok).length;
    statusEl.textContent = `Please fix ${count} field${count === 1 ? '' : 's'} and send again.`;
    statusEl.classList.add('is-fail');
    firstInvalid.focus();
    return;
  }

  // No backend in this exercise: show a success message instead of sending.
  const name = form.elements.name.value.trim().split(' ')[0];
  statusEl.textContent = `Thank you, ${name}. We have received your enquiry and will reply within one working day.`;
  statusEl.classList.add('is-success');
  form.reset();
  inputs.forEach((i) => {
    i.closest('.field').classList.remove('is-valid', 'has-error');
    i.removeAttribute('aria-invalid');
  });
});

/* ===== 5. Footer year ===== */
document.getElementById('year').textContent = new Date().getFullYear();
