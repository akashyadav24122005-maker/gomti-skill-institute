# Gomti Skill Institute

This is my website for a made-up training institute in Lucknow. It has three sections on one page: Home, Courses and Contact. The institute, its courses, fees, address and phone number are all invented for this exercise.

**Live site:** https://gomti-skill-institute.netlify.app

## How to run it

There is nothing to install.

1. Download or clone the repo.
2. Open `index.html` in your browser.

That's it. If you want to run it on a local server instead, open a terminal in the folder and run `python -m http.server 8000`, then go to `http://localhost:8000`.

The fonts come from Google Fonts, so you need internet to see them. Without it the page still works and just uses your system font.

## What's in the folder

- `index.html` has the page structure
- `style.css` has all the styling
- `script.js` has the menu, the course filter and the form checks
- `screenshot-desktop.png` and `screenshot-mobile.png` show how it looks on a big screen and a phone
- `screenshot-mobile-menu.png` shows the menu open on a phone

## What I built and why

**Layout.** I designed for phones first and then added rules for wider screens. On a phone everything stacks in one column. On a tablet the courses go into two columns, and on a laptop into three, with the intro and the timetable sitting side by side. I used Grid for the page layouts and Flexbox for the smaller things like the header and the buttons.

**Semantic HTML.** I used `header`, `nav`, `main`, `section`, `article`, `address` and `footer` instead of putting everything in divs. Every form field has a proper label, and there is a "skip to content" link for keyboard users.

**Mobile menu.** On small screens the links hide behind a menu button. It opens and closes on tap, closes when you pick a link, and also closes if you press Escape.

**Course filter.** This wasn't in the brief, but I added Tech and Business buttons above the course cards because six cards felt like a lot to scroll through.

**Form validation.** The form checks each field when you leave it, and again when you press Send. The error message appears right under the field in red, and says what to fix rather than just "invalid". For example, the phone number message says it needs 10 digits starting with 6, 7, 8 or 9. If something is wrong, the cursor jumps to the first bad field. Once every field is correct, a thank-you message shows. The form doesn't actually send anything because there is no backend.

## Things that aren't perfect

- The form doesn't send the message anywhere yet.
- There are no real photos. I used colour, type and a timetable instead, so the page doesn't depend on images I don't have.
- The course list is written directly in the HTML, so adding a course means copying a block by hand.
- I tested in Chrome and in the browser's phone view, but not on many real devices.

## What I would improve next

1. Connect the contact form to something like Formspree so the enquiries actually reach an inbox.
2. Add real photos of classrooms and teachers, sized properly for phones.
3. Move the course details into a JSON file and build the cards with JavaScript, so adding a course is one line instead of a whole block.
4. Give each course its own page with a syllabus and start dates.
5. Run a Lighthouse accessibility check and fix whatever it finds.
6. Add a dark mode.