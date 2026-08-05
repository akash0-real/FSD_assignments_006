import { useState } from 'react'
import './App.css'

/* ==========================================================================
   ✏️ EDIT YOUR INFORMATION HERE
   Customize your name, bio, projects, skills, and links in the objects below!
   ========================================================================== */

const USER_INFO = {
  name: "Akash bisht",
  roleTitle: "Computer Science & Engineering Student",
  statusTag: "Open for Internships & Full-time Roles",
  tagline: "Passionate CS student crafting efficient algorithms, robust backend systems, and responsive web applications.",
  aboutText: "I am a Computer Science student with a strong foundation in software engineering, data structures, and algorithms. I love solving algorithmic challenges, building full-stack web applications, and learning how low-level systems work under the hood.",
  location: "Banglore / India",
  email: "your.email@university.edu",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  leetcode: "https://leetcode.com/yourusername",
  codeforces: "https://codeforces.com/profile/yourusername",
  resumeLink: "#" // Replace with direct link to your PDF resume
}

// ✏️ EDIT YOUR CS SKILLS
const SKILLS_DATA = [
  {
    category: "Languages",
    icon: "⚡",
    skills: ["C++", "Python", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5/CSS3"]
  },
  {
    category: "Core Computer Science",
    icon: "🧠",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Operating Systems", "DBMS & SQL", "Computer Networks", "System Design Basics"]
  },
  {
    category: "Web & Backend Development",
    icon: "🌐",
    skills: ["React.js", "Node.js", "Express.js", "RESTful APIs", "State Management", "Responsive UI/CSS"]
  },
  {
    category: "Developer Tools & Platforms",
    icon: "🛠️",
    skills: ["Git & GitHub", "Linux / Bash Shell", "VS Code", "Vite", "Postman", "Docker Basics", "Vercel / Netlify"]
  }
]

// ✏️ EDIT YOUR PROJECTS
const PROJECTS_DATA = [
  {
    id: 1,
    title: "Interactive Algorithm Visualizer",
    type: "CS / Web App",
    csMetric: "Time Complexity: O(N log N)",
    description: "Built a web tool to visualize Sorting Algorithms (MergeSort, QuickSort) and Graph Traversals (BFS, DFS) step-by-step with customizable execution speed.",
    tags: ["React", "JavaScript", "Algorithms", "CSS Canvas"],
    github: "https://github.com/yourusername/algo-visualizer",
    demo: "#"
  },
  {
    id: 2,
    title: "Distributed Task Scheduler API",
    type: "Backend & Systems",
    csMetric: "Throughput: 1.2k req/sec",
    description: "Designed a lightweight multi-threaded backend API service in Node.js/Express to handle asynchronous job scheduling and worker queue processing.",
    tags: ["Node.js", "Express", "REST API", "Data Structures"],
    github: "https://github.com/yourusername/task-scheduler",
    demo: "#"
  },
  {
    id: 3,
    title: "Smart Course & GPA Tracker",
    type: "Full-Stack Project",
    csMetric: "Database: Relational SQL",
    description: "Developed a clean student dashboard for managing semester schedules, tracking credit completion, and simulating GPA projections with interactive metrics.",
    tags: ["React", "Node.js", "SQLite/SQL", "CSS Grid"],
    github: "https://github.com/yourusername/course-tracker",
    demo: "#"
  },
  {
    id: 4,
    title: "Custom Shell / Command Parser",
    type: "Systems / C++",
    csMetric: "POSIX Compliant Architecture",
    description: "Implemented a mini C++ command line shell featuring input piping (`|`), process spawning (`fork`, `exec`), and environment variable management.",
    tags: ["C++", "Linux", "OS Fundamentals", "Systems"],
    github: "https://github.com/yourusername/cpp-mini-shell",
    demo: "#"
  }
]

// ✏️ EDIT YOUR CS COURSEWORK
const COURSEWORK_DATA = [
  {
    code: "CS 201",
    name: "Data Structures & Algorithms",
    topics: "Arrays, Trees, Graphs, Sorting, Dynamic Programming, Complexity Analysis"
  },
  {
    code: "CS 301",
    name: "Operating Systems",
    topics: "Process Synchronization, Concurrency, Memory Allocation, File Systems"
  },
  {
    code: "CS 304",
    name: "Database Management Systems",
    topics: "Relational Algebra, SQL Optimization, ER Diagrams, Normalization, ACID Transactions"
  },
  {
    code: "CS 402",
    name: "Computer Networks",
    topics: "TCP/IP Suite, HTTP/DNS Protocols, Socket Programming, Routing Algorithms"
  }
]

// ✏️ EDIT YOUR DEVELOPER STATS
const STATS_DATA = [
  { label: "Problems Solved", value: "350+" },
  { label: "GitHub Commits", value: "200+" },
  { label: "CS Projects Built", value: "8+" },
  { label: "CS Core Subjects", value: "10+" }
]

// 💻 MOCK TERMINAL CODE FILES FOR DISPLAY
const TERMINAL_SNIPPETS = {
  "whoami.sh": `#!/bin/bash
# Developer Profile Query
echo "Name: ${USER_INFO.name}"
echo "Major: Computer Science"
echo "Status: ${USER_INFO.statusTag}"
echo "Location: ${USER_INFO.location}"
echo "Core Focus: Software Engineering & Full-Stack Systems"
echo "Favorite Stack: React, C++, Node.js, Linux"
echo "Build Status: SUCCESS ✔"`,

  "main.cpp": `#include <iostream>
#include <vector>
#include <string>

class CSStudent {
public:
    std::string name = "${USER_INFO.name}";
    std::string field = "Computer Science";
    std::vector<std::string> goals = {"Solve Complex Problems", "Write Clean Code", "Build Scalable Software"};
    
    void printMission() {
        std::cout << "Building high-performance software, one commit at a time." << std::endl;
    }
};

int main() {
    CSStudent dev;
    dev.printMission();
    return 0;
}`,

  "config.json": `{
  "developer": "${USER_INFO.name}",
  "education": "B.S. Computer Science",
  "interests": ["Algorithms", "Web Architecture", "Open Source"],
  "availableForWork": true,
  "contact": "${USER_INFO.email}"
}`
}

function App() {
  const [activeTab, setActiveTab] = useState("whoami.sh")
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <div className="portfolio-app">
      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="brand-logo">
            <span>&lt;CS_Portfolio /&gt;</span>
            <span className="brand-tag">CS Student</span>
          </a>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#coursework">Coursework</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>{USER_INFO.statusTag}</span>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="hero-section">
          <div className="container hero-grid">
            <div>
              <div className="hero-badge">
                <span>💻</span> Computer Science Major & Software Engineer
              </div>

              <h1 className="hero-title">
                Hello, I'm <br />
                <span className="gradient-text">{USER_INFO.name}</span>
              </h1>

              <p className="hero-subtitle">
                {USER_INFO.tagline}
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn-primary">
                  <span>Explore Projects</span>
                  <span>↓</span>
                </a>
                <a href="#contact" className="btn-secondary">
                  <span>Get In Touch</span>
                </a>
                <button onClick={handleCopyEmail} className="btn-secondary" title="Copy Email">
                  <span>{copiedEmail ? "✓ Email Copied!" : "📋 Copy Email"}</span>
                </button>
              </div>

              <div className="hero-cs-chips">
                <span className="cs-chip">Algorithms</span>
                <span className="cs-chip">Full-Stack</span>
                <span className="cs-chip">Data Structures</span>
                <span className="cs-chip">Systems</span>
                <span className="cs-chip">Git & Linux</span>
              </div>
            </div>

            {/* INTERACTIVE TERMINAL CARD */}
            <div className="terminal-window float-anim">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="terminal-title">~/cs-portfolio/terminal</span>
                <span className="code-comment">bash 5.2</span>
              </div>

              <div className="terminal-tabs">
                {Object.keys(TERMINAL_SNIPPETS).map((tab) => (
                  <button
                    key={tab}
                    className={`terminal-tab ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="terminal-body">
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {TERMINAL_SNIPPETS[activeTab]}
                </pre>
                <div style={{ marginTop: '12px', color: 'var(--accent-cyan)' }}>
                  <span>user@cs-machine:~$ </span>
                  <span className="cursor-blink">█</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & QUICK OVERVIEW */}
        <section id="about" className="section-padding">
          <div className="container">
            <div className="glass-card" style={{ padding: '40px' }}>
              <div className="section-tag">// 01. ABOUT ME</div>
              <h2 className="section-title">Driven by Problem Solving & Code Elegance</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px' }}>
                {USER_INFO.aboutText}
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS & CS MATRIX */}
        <section id="skills" className="section-padding">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">// 02. TECHNICAL PROFICIENCY</span>
              <h2 className="section-title">CS Knowledge & Tech Stack</h2>
              <p className="section-subtitle">
                Core Computer Science concepts and modern development tools I work with daily.
              </p>
            </div>

            <div className="skills-grid">
              {SKILLS_DATA.map((cat, idx) => (
                <div key={idx} className="glass-card skill-category-card">
                  <div className="category-header">
                    <span className="category-icon">{cat.icon}</span>
                    <h3 className="category-title">{cat.category}</h3>
                  </div>

                  <div className="skill-tags">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SHOWCASE */}
        <section id="projects" className="section-padding">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">// 03. PORTFOLIO WORK</span>
              <h2 className="section-title">Featured Computer Science Projects</h2>
              <p className="section-subtitle">
                A selection of applications and tools demonstrating algorithmic logic, system design, and software craftsmanship.
              </p>
            </div>

            <div className="projects-grid">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="glass-card project-card">
                  <div className="project-top">
                    <div className="project-meta">
                      <span className="project-type">{proj.type}</span>
                      <span className="project-cs-metric">{proj.csMetric}</span>
                    </div>

                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.description}</p>
                  </div>

                  <div>
                    <div className="project-tech-stack">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="tech-chip">{t}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={proj.github} className="project-link" target="_blank" rel="noreferrer">
                        <span>🐙 GitHub Code</span>
                      </a>
                      {proj.demo !== "#" && (
                        <a href={proj.demo} className="project-link" target="_blank" rel="noreferrer">
                          <span>🚀 Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COURSEWORK & ACADEMICS */}
        <section id="coursework" className="section-padding">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">// 04. ACADEMICS & THEORY</span>
              <h2 className="section-title">Core CS Coursework</h2>
              <p className="section-subtitle">
                Foundational computer science curriculum mastered during undergraduate studies.
              </p>
            </div>

            <div className="coursework-grid">
              {COURSEWORK_DATA.map((course, idx) => (
                <div key={idx} className="glass-card course-card">
                  <div className="course-code">{course.code}</div>
                  <h3 className="course-name">{course.name}</h3>
                  <p className="course-details">Key Concepts: {course.topics}</p>
                </div>
              ))}
            </div>

            {/* DEVELOPER STATS BANNER */}
            <div className="stats-banner">
              <div className="stats-grid">
                {STATS_DATA.map((stat, idx) => (
                  <div key={idx}>
                    <div className="stat-number">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section-padding">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">// 05. LET'S CONNECT</span>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Whether you have a question, internship opportunity, or project collaboration in mind!
              </p>
            </div>

            <div className="contact-container">
              {/* CONTACT INFO CARD */}
              <div className="glass-card contact-info-card">
                <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Contact Details</h3>

                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <div className="contact-text-label">EMAIL ADDRESS</div>
                    <div className="contact-text-val">{USER_INFO.email}</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-text-label">LOCATION</div>
                    <div className="contact-text-val">{USER_INFO.location}</div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🎓</div>
                  <div>
                    <div className="contact-text-label">STATUS</div>
                    <div className="contact-text-val">{USER_INFO.roleTitle}</div>
                  </div>
                </div>

                <div style={{ marginTop: '32px' }}>
                  <div className="contact-text-label" style={{ marginBottom: '12px' }}>SOCIAL & CODING PLATFORMS</div>
                  <div className="social-pills">
                    <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="social-pill">
                      <span>🐙 GitHub</span>
                    </a>
                    <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="social-pill">
                      <span>💼 LinkedIn</span>
                    </a>
                    <a href={USER_INFO.leetcode} target="_blank" rel="noreferrer" className="social-pill">
                      <span>🧩 LeetCode</span>
                    </a>
                    <a href={USER_INFO.codeforces} target="_blank" rel="noreferrer" className="social-pill">
                      <span>⚔️ Codeforces</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="glass-card contact-form">
                <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>Send a Message</h3>
                {formSubmitted ? (
                  <div style={{ padding: '20px', background: 'rgba(52, 211, 153, 0.1)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '8px', color: 'var(--accent-emerald)' }}>
                    ✓ Message received! Thanks for reaching out.
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label className="form-label">YOUR NAME</label>
                      <input type="text" className="form-input" placeholder="e.g. Alex Morgan" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">YOUR EMAIL</label>
                      <input type="email" className="form-input" placeholder="e.g. alex@example.com" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">MESSAGE</label>
                      <textarea className="form-textarea" placeholder="Hi, I'd like to talk about..." required></textarea>
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      <span>Send Message</span>
                      <span>✈️</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <div>
            <span>© {new Date().getFullYear()} {USER_INFO.name} • Built with CS Passion & React</span>
          </div>
          <div>
            <a href="#hero" className="back-to-top">
              <span>Back to Top ↑</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
