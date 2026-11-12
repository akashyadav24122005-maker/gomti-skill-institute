# Gomti Skill Institute – responsive 3-section website

A fictional training institute site with **Home**, **Courses** and **Contact** sections.
Built with plain HTML, CSS and JavaScript. No frameworks, no build step.

## Files

| File | Purpose |
|---|---|
| `index.html` | Semantic markup: `header`, `nav`, `main`, `section`, `article`, `address`, `form`, `footer` |
| `style.css` | Mobile-first styles using CSS variables, Grid and Flexbox, with breakpoints at 640px and 900px |
| `script.js` | Mobile menu, course filter, active-link highlight and form validation |
| `screenshot-desktop.png` | Full page at 1366px wide |
| `screenshot-mobile.png` | Contact form at 390px wide showing validation messages |
| `screenshot-mobile-menu.png` | Mobile menu open |

## How to run

1. Download or clone the folder.
2. Double-click `index.html` to open it in a browser.

Optional: serve it locally with `python3 -m http.server 8000` and visit `http://localhost:8000`.
Fonts load from Google Fonts. Without internet the page falls back to system fonts.

## What it does

- **Responsive layout:** one column on phones, two-column course grid on tablets, three columns plus a two-column hero and contact area on desktop.
- **Mobile menu:** a button toggles the nav. It updates `aria-expanded`, closes after choosing a link, closes with Escape, and resets when the screen widens.
- **Form validation:** rules for name, email, Indian mobile number, course and message. Errors appear under each field in red, on blur and on submit, and update as the user fixes them. The first invalid field gets focus. A success message shows when everything is valid (no backend, so nothing is sent).
- **Accessibility:** skip link, visible focus rings, labels on every input, `role="alert"` on errors, 44px minimum touch targets, and reduced-motion support.

## What I would improve next

1. Connect the form to a real backend or a service such as Formspree so enquiries are actually delivered, and add a spam check.
2. Add real photos of classrooms and mentors, with `srcset` and lazy loading.
3. Give each course its own page with syllabus, fees and a start-date picker.
4. Move course data into a JSON file and render the cards from it, so adding a course needs no HTML edits.
5. Add automated tests for the validation rules and a Lighthouse accessibility check.
6. Add a dark mode and a Hindi language toggle.
