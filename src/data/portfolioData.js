// ─────────────────────────────────────────────────────────────
// EVERYTHING personal/editable lives in this one file.
// Update the values below — no need to touch any component.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ishwari Hive',
  role: 'MERN Stack Developer',
  tagline:
    'Final-year engineering student building full-stack web applications with React, Node.js, Express and MongoDB — focused on writing clean, production-minded code and shipping projects that solve real problems.',
  location: 'Amravati, Maharashtra',
  email: 'ishwarihive67@gmail.com',
  github: 'https://github.com/ishwarihive26',
  linkedin: 'https://linkedin.com/in/ishwari-hive9420591463',
  photo: '/profile.jpg', // your portrait, stored in public/profile.jpg
  resumeFile: '/resume.pdf', // public/resume.pdf — replace the file to update it
}

export const about = {
  paragraphs: [
    "I'm a final-year engineering student with a focus on full-stack web development, particularly the MERN stack. I enjoy the full cycle of building software — designing data models, building REST APIs, and turning them into interfaces people actually want to use.",
    'Alongside coursework, I practice data structures and algorithms consistently and build independent projects to apply what I learn in a real codebase rather than isolated exercises. I care about writing code that is easy for the next person (including future me) to read and extend.',
    "I'm currently looking for a MERN Stack / Full-Stack Developer internship where I can contribute to production systems, learn from experienced engineers, and keep growing as a developer.",
  ],
}

export const facts = [
  { value: '8.1', label: 'SGPA in B.E. Information Technology' },
  { value: '2', label: 'Full projects built and deployed' },
  { value: 'Hackathon', label: 'Team participant: built and presented a solution' },
]

export const skills = {
  Languages: ['Python', 'JavaScript', 'SQL'],
  Frontend: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Database: ['MongoDB', 'MySQL', 'SQLite'],
  Tools: ['Git', 'GitHub', 'VS Code'],
  'Core Concepts': ['Data Structures & Algorithms', 'SDLC', 'API Testing', 'Database Design'],
}

// Replace image with a real screenshot path (e.g. '/projects/bus-booking.png')
// placed in the public/ folder. Leave null to show a placeholder tile instead
// of a fake/broken image.
export const projects = [
  {
    title: 'Bus Booking & Management System',
    image: '/projects/bus-booking-dashboard.jpg',
    description:
      'A full-stack platform for booking intercity bus tickets, with a separate admin dashboard for managing routes, buses and bookings.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'User authentication',
      'Bus search',
      'Seat selection',
      'Booking management',
      'Admin dashboard',
    ],
    github: '', // TODO: add your real repo URL
    demo: '', // TODO: add your real live demo URL, or leave blank
  },
  {
    title: 'CareerAI Pro',
    image: '/projects/careerai-pro-dashboard.jpg',
    description:
      'An AI-powered career toolkit that helps job seekers analyze and improve their applications, evolved from an earlier landing-page prototype.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Claude API'],
    features: [
      'Resume analyzer',
      'ATS compatibility checker',
      'AI cover letter generator',
      'Career guidance tools',
    ],
    github: '', // TODO
    demo: '', // TODO
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering (Information Technology)',
    institution: 'Prof Ram Meghe College of Engineering and Management, Badnera',
    duration: 'Expected June 2027',
    details: 'Final year · SGPA 8.1',
  },
  {
    degree: 'Diploma',
    institution:
      'Government Polytechnic Achalpur (Maharashtra State Board of Technical Education)',
    duration: 'June 2024',
    details: 'SGPA 81.07',
  },
]

export const contact = {
  heading: "Let's work together",
  subheading:
    "I'm actively looking for MERN Stack / Full-Stack Developer internships. Feel free to reach out — I usually reply within a day.",
}
