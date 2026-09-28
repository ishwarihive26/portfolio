# MERN Stack Developer Portfolio

A clean, recruiter-friendly personal portfolio built with **React**, **Vite**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser. To build for production:

```bash
npm run build
npm run preview
```

## What to edit before deploying

Almost everything you need to change lives in **one file**:

```
src/data/portfolioData.js
```

Open it and update:

- `profile` — your name, email, GitHub/LinkedIn URLs, resume path
- `about` — your intro paragraphs
- `skills` — add/remove technologies per category
- `projects` — swap in your real projects, GitHub repos, and live demo links
  (leave `github`/`demo` as empty strings `''` if a link doesn't exist yet —
  the card will show "add link" instead of a broken button)
- `education` — your degree, institution, and duration
- `contact` — the heading/subheading shown above the contact form

## Adding your resume

Place your actual resume PDF at:

```
public/resume.pdf
```

The "Download Resume" buttons already point to `/resume.pdf`.

## Adding project screenshots

Drop images into `public/` (e.g. `public/projects/bus-booking.png`) and set
the `image` field for that project in `portfolioData.js` to the matching
path, e.g. `'/projects/bus-booking.png'`. Until you do, the card shows a
clearly labeled placeholder instead of a fake image.

## Wiring up the contact form

The contact form in `src/components/Contact.jsx` is currently **UI-only** —
it logs the submission to the console. To actually receive messages, either:

1. Point it at a form service like [Formspree](https://formspree.io) or
   [EmailJS](https://www.emailjs.com/) (no backend needed), or
2. Build a small Express endpoint (fits naturally with your MERN stack) and
   `fetch()` it from `handleSubmit`.

## Deploying

This is a static Vite build, so it deploys cleanly to **Vercel**, **Netlify**,
or **GitHub Pages**. For Vercel/Netlify: connect the repo and use the default
`npm run build` command with `dist/` as the output directory.

## Project structure

```
src/
├── main.jsx              # React root
├── App.jsx                # Assembles all sections
├── index.css               # Tailwind directives + base styles
├── data/
│   └── portfolioData.js   # ALL editable content
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── ProjectCard.jsx
    ├── Education.jsx
    ├── Resume.jsx
    ├── Contact.jsx
    └── Footer.jsx
```
