# CV Insight - B.Tech CS/IT Resume Analyzer & ATS Optimizer

CV Insight is a modern, privacy-focused client-side web application designed specifically for Computer Science and Information Technology undergraduates (B.Tech CS/IT). It parses resume documents locally in the browser, audits them against core Computer Science subjects, matches skills with fresher job profiles, scans for ATS layout compliance, and provides actionable recommendations to optimize CVs for modern Applicant Tracking Systems.

---

##  Key Features

- ** 100% Client-Side & Private**: All document parsing and analysis are performed directly in the user's browser using `PDF.js` and local JavaScript heuristics. No resume data is stored, transmitted, or uploaded to any server.
- ** Native PDF Parsing**: Upload resumes in PDF format or paste the plain text directly into the scanner to begin execution.
- ** CS Syllabus & Core Subject Audit**: Validates if the resume mentions critical computer science fundamentals that form the baseline of technical interviews, including:
  - Data Structures & Algorithms (DSA)
  - Database Management Systems (DBMS)
  - Operating Systems (OS)
  - Computer Networks (CN)
  - Object-Oriented Programming (OOPs)
  - Software Engineering & Git
- ** Categorized Skills Checklist**: Scrapes the resume text for languages, frameworks, databases, tools, and theoretical competencies, highlighting present skills and recommending additions relevant to today's job market.
- ** Job Readiness & Fitment Matrix**: Maps the user's technical skills to standard entry-level industry roles:
  - Frontend Developer
  - Backend Developer
  - Full Stack Developer
  - DevOps & Cloud Engineer
  - Data Analyst & Scientist
  - Mobile App Developer
- ** ATS Structure & Formatting Scan**: Checks for vital sections (Education, Skills, Projects, Experience), detects contact handles (Email, Phone, LinkedIn, GitHub), and inspects layout factors like word count, bullet points, and complex formatting tables.
- ** Resume Project Auditor**: Assesses the technical depth/complexity tier of personal projects (Basic, Intermediate, Advanced), checks for working URLs (GitHub, live deployment links), and audits the inclusion of impact-driven quantitative metrics.
- ** AI-Powered Bullet Point Enhancer**: Upgrades passive, descriptive sentences (e.g., *"made a database schema"* or *"created a website using React"*) into metrics-driven, action-oriented bullet points tailored to specific tech domains (Web, Backend, Database, Machine Learning).
- ** Capstone Project Ideas**: Suggests high-impact capstone project ideas to build based on the skills missing from the candidate's resume.

---

##  Technology Stack

- **Frontend Core**: Semantic HTML5, CSS3, ES6+ Javascript
- **Styling & Aesthetics**: Vanilla CSS styled with custom glassmorphism design tokens, vibrant background glow effects, smooth transitions, and responsive grid layouts.
- **Libraries & Resources**:
  - [PDF.js](https://mozilla.github.io/pdf.js/) by Mozilla for local PDF text extraction.
  - [Lucide Icons](https://lucide.dev/) for UI iconography.
  - Modern fonts (Inter and Outfit) served via Google Fonts.

---

##  Project Structure

```text
CV-Insight-main/
│
├── CV-Insight-main/           # Main source directory
│   ├── app.js                 # Parsing engines, scoring matrices, and state manager
│   ├── index.html             # Single-page interface layout and tab panels
│   ├── style.css              # Glassmorphic responsive styling stylesheet
│   ├── package.json           # Local server configuration and dependencies
│   └── .gitattributes         # Git settings
│
└── README.md                  # Project documentation (this file)
```

---

##  Local Setup & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation Steps

1. **Clone or Download the Repository**:
   Extract the archive to your workspace directory.

2. **Navigate into the Source Folder**:
   ```bash
   cd CV-Insight-main
   ```

3. **Install Local Development Tools**:
   Install the dev dependency server defined in `package.json`:
   ```bash
   npm install
   ```

4. **Launch the Development Server**:
   Run the local server script:
   ```bash
   npm run dev
   ```
   This command starts the local static server using `http-server` and opens the application in your default browser at `http://localhost:3000`.

---

##  How the Resume Scoring Works

The overall **ATS score (0 to 100)** is calculated dynamically across four core evaluation segments:

1. **CS Academic Core Align (25 Points)**: Points awarded for containing fundamental B.Tech curriculum subjects (DSA, OS, DBMS, Networks, OOPs, Software Engineering).
2. **Technical Skills Variety (30 Points)**: Points awarded for keywords matched across Programming Languages, Web Frameworks, Databases, and Cloud/DevOps tools.
3. **ATS Structure Check (25 Points)**: Checked against contact fields (LinkedIn/GitHub) and standard document layout markers (Education, Skills, Experience, Projects sections).
4. **Project Quality Tier (20 Points)**: Assesses parsed projects for quality indicators like GitHub repository proofs, quantitative metrics, and technical stack depth.
