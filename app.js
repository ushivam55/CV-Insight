// Configure PDF.js Global Worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

// --- DATA STRUCTURES: TECH SKILLS DIRECTORY ---
const TECHNICAL_SKILLS = {
    languages: {
        title: "Programming Languages",
        skills: {
            "python": ["python", "py"],
            "javascript": ["javascript", "js", "ecmascript"],
            "typescript": ["typescript", "ts"],
            "java": ["java "], // space to avoid matching javascript
            "c++": ["c\\+\\+", "cpp"],
            "c": ["\\bc\\b", "ansi c"],
            "c#": ["c#", "csharp", "c-sharp"],
            "ruby": ["ruby"],
            "php": ["php"],
            "go": ["\\bgo\\b", "golang"],
            "rust": ["rust"],
            "kotlin": ["kotlin"],
            "swift": ["swift"],
            "sql": ["\\bsql\\b", "mysql", "postgresql", "sqlite", "pl/sql", "t-sql"]
        }
    },
    frameworks: {
        title: "Web & Frameworks",
        skills: {
            "react": ["react", "reactjs", "react.js"],
            "angular": ["angular", "angularjs"],
            "vue": ["vue", "vuejs", "vue.js"],
            "node.js": ["node", "nodejs", "node.js"],
            "next.js": ["next", "nextjs", "next.js"],
            "express": ["express", "expressjs", "express.js"],
            "django": ["django"],
            "flask": ["flask"],
            "spring boot": ["spring", "springboot", "spring boot"],
            "laravel": ["laravel"],
            "html5": ["html", "html5"],
            "css3": ["css", "css3", "scss", "sass"],
            "tailwind css": ["tailwind", "tailwindcss"],
            "bootstrap": ["bootstrap"]
        }
    },
    databases: {
        title: "Databases & Storage",
        skills: {
            "mysql": ["mysql"],
            "postgresql": ["postgresql", "postgres"],
            "mongodb": ["mongodb", "mongo"],
            "sqlite": ["sqlite"],
            "redis": ["redis"],
            "oracle": ["oracle"],
            "dynamodb": ["dynamodb"],
            "cassandra": ["cassandra"],
            "firebase": ["firebase", "firestore"]
        }
    },
    tools: {
        title: "Cloud & DevOps Tools",
        skills: {
            "git": ["git", "github", "gitlab", "bitbucket"],
            "docker": ["docker"],
            "kubernetes": ["kubernetes", "k8s"],
            "aws": ["aws", "amazon web services", "ec2", "s3"],
            "gcp": ["gcp", "google cloud"],
            "azure": ["azure"],
            "jenkins": ["jenkins"],
            "ci/cd": ["ci/cd", "cicd", "github actions", "gitlab ci"],
            "linux": ["linux", "unix", "ubuntu", "centos", "redhat"],
            "bash": ["bash", "shell scripting", "powershell"],
            "nginx": ["nginx"],
            "terraform": ["terraform"]
        }
    },
    theory: {
        title: "CS Fundamentals & Theory",
        skills: {
            "data structures": ["data structures", "dsa", "arrays", "linked list", "trees", "graphs"],
            "algorithms": ["algorithms", "dsa", "sorting", "searching", "recursion", "dynamic programming"],
            "dbms": ["dbms", "database management", "sql database", "relational database"],
            "operating systems": ["operating system", "os", "linux architecture", "multithreading", "concurrency"],
            "computer networks": ["computer networks", "networking", "tcp/ip", "http", "routing", "dns"],
            "oops": ["oops", "oop", "object oriented", "polymorphism", "inheritance", "encapsulation", "abstraction"],
            "system design": ["system design", "scalability", "load balancing", "microservices"],
            "software engineering": ["software engineering", "sdlc", "agile", "scrum", "git workflow"]
        }
    }
};

// --- DATA STRUCTURES: JOB PROFILE WEIGHTS ---
const JOB_ROLES = [
    {
        name: "Frontend Developer",
        tags: ["HTML/CSS", "JavaScript", "React", "UI/UX"],
        weights: {
            languages: ["javascript", "typescript", "html5", "css3"],
            frameworks: ["react", "angular", "vue", "tailwind css", "bootstrap", "next.js"],
            tools: ["git"],
            theory: ["oops"]
        },
        tips: "Focus on UI responsiveness, Web Performance, Tailwind, TypeScript, and modern state managers."
    },
    {
        name: "Backend Developer",
        tags: ["Node.js", "APIs", "SQL", "System Design"],
        weights: {
            languages: ["java", "python", "go", "c++", "sql"],
            frameworks: ["node.js", "express", "django", "flask", "spring boot"],
            databases: ["mysql", "postgresql", "mongodb", "redis"],
            tools: ["git", "docker", "aws", "linux"],
            theory: ["dbms", "system design", "oops"]
        },
        tips: "Strengthen API construction, SQL optimization, caching (Redis), Docker containerization, and System Design."
    },
    {
        name: "Full Stack Developer",
        tags: ["React", "Node.js", "MongoDB", "DevOps"],
        weights: {
            languages: ["javascript", "typescript", "sql", "html5", "css3"],
            frameworks: ["react", "node.js", "express", "next.js"],
            databases: ["mongodb", "mysql", "postgresql"],
            tools: ["git", "docker", "aws"],
            theory: ["dbms", "oops", "data structures", "algorithms"]
        },
        tips: "Combine frontend interfaces (React) with backend frameworks (Node/Express). Dockerize and host your apps."
    },
    {
        name: "DevOps & Cloud Engineer",
        tags: ["AWS", "Docker", "CI/CD", "Linux"],
        weights: {
            languages: ["python", "go", "bash"],
            databases: ["redis"],
            tools: ["git", "docker", "kubernetes", "aws", "gcp", "azure", "jenkins", "ci/cd", "linux", "terraform", "nginx"],
            theory: ["computer networks", "operating systems"]
        },
        tips: "Learn Infrastructure as Code (Terraform), shell scripting (Bash), networking fundamentals, and setup CI/CD logs."
    },
    {
        name: "Data Analyst & Scientist",
        tags: ["Python", "SQL", "Pandas", "Machine Learning"],
        weights: {
            languages: ["python", "sql", "r"],
            databases: ["mysql", "postgresql", "mongodb"],
            frameworks: ["django", "flask"],
            tools: ["git", "gcp"],
            theory: ["data structures", "algorithms", "dbms"]
        },
        tips: "Master analysis libraries (Pandas, NumPy, Scikit-Learn), SQL querying, data visualization tools, and basic statistics."
    },
    {
        name: "Mobile App Developer",
        tags: ["Kotlin", "Swift", "Flutter", "Android/iOS"],
        weights: {
            languages: ["java", "kotlin", "swift", "javascript", "typescript"],
            frameworks: ["react"], // placeholder for React Native / mobile web
            databases: ["sqlite", "firebase"],
            tools: ["git"],
            theory: ["oops", "data structures", "algorithms"]
        },
        tips: "Build applications using Android SDK (Kotlin/Java), iOS (Swift), or cross-platform Flutter/React Native."
    }
];

// --- BULLET POINT UPGRADERS ---
const BULLET_TEMPLATES = {
    web: [
        "Architected and launched a responsive React web app, slicing page load speeds by 35% and elevating mobile user retention.",
        "Refactored modular JavaScript components, accelerating DOM rendering by 22% and cleaning 400+ lines of redundant markup.",
        "Integrated custom state management pipelines, stabilizing component re-renders and reducing bug occurrences by 18%."
    ],
    backend: [
        "Engineered scalable REST APIs using Node.js, slashing SQL query execution times by 40% using customized database indices.",
        "Constructed a secure user authorization backend using JWT and bcrypt, guarding personal records and reducing login failure rates.",
        "Configured Redis caching servers to handle active server routing, decreasing direct database query loads by 50% under peak spikes."
    ],
    database: [
        "Normalized complex relational schemas to 3NF standards, securing data integrity and speeding up transaction write times.",
        "Implemented database backup cron-jobs and migration configurations, securing zero-loss disaster recoveries.",
        "Engineered automated script indexes in PostgreSQL, reducing system search latency from 4.2 seconds down to 300ms."
    ],
    ml: [
        "Programmed a custom Random Forest predictive model in Python, scaling prediction speed and obtaining a 94.2% test accuracy score.",
        "Assembled ETL data parsing models scraping 12k+ daily profiles, compiling cleanly into dashboard reports.",
        "Optimized deep learning tensor layers on GPU servers, decreasing neural network training durations by 25%."
    ],
    generic: [
        "Spearheaded software module redesigns, optimizing code readability and accelerating compilation times by 15%.",
        "Collaborated with project developers using Git version controls, resolving code conflicts and streamlining builds.",
        "Pioneered critical cleanups of technical debts, reducing memory leaks by 12% and stabilizing local production runtimes."
    ]
};

// --- CORE APPLICATION CONTROLLER ---
document.addEventListener("DOMContentLoaded", () => {
    // Refresh Lucide Icons
    lucide.createIcons();

    // DOM Elements Bindings
    const fileInput = document.getElementById("fileInput");
    const dropZone = document.getElementById("dropZone");
    const pasteArea = document.getElementById("pasteArea");
    const btnScanText = document.getElementById("btnScanText");
    const btnReset = document.getElementById("btnReset");
    
    const uploadState = document.getElementById("uploadState");
    const loadingState = document.getElementById("loadingState");
    const dashboardState = document.getElementById("dashboardState");
    const loadingStatusText = document.getElementById("loadingStatusText");
    
    // Steps UI list
    const stepPdf = document.getElementById("step-pdf");
    const stepSkills = document.getElementById("step-skills");
    const stepCs = document.getElementById("step-cs");
    const stepAts = document.getElementById("step-ats");

    // Optimizer Form elements
    const bulletInput = document.getElementById("bulletInput");
    const btnEnhance = document.getElementById("btnEnhance");
    const enhancedResults = document.getElementById("enhancedResults");
    const alternativesList = document.getElementById("alternativesList");

    // DRAG AND DROP EVENTS
    ["dragenter", "dragover"].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.add("dragover");
        }, false);
    });

    ["dragleave", "drop"].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            dropZone.classList.remove("dragover");
        }, false);
    });

    dropZone.addEventListener("drop", (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    });

    fileInput.addEventListener("change", (e) => {
        if (fileInput.files.length > 0) {
            handleFileUpload(fileInput.files[0]);
        }
    });

    // SCAN BUTTON (TEXT AREA)
    btnScanText.addEventListener("click", () => {
        const text = pasteArea.value.trim();
        if (!text) {
            alert("Please paste some text content to scan!");
            return;
        }
        analyzeResumeText(text);
    });

    // SCAN ANOTHER / RESET BUTTON
    btnReset.addEventListener("click", () => {
        // Clear fields
        fileInput.value = "";
        pasteArea.value = "";
        bulletInput.value = "";
        enhancedResults.style.display = "none";
        
        // Toggle view
        uploadState.style.display = "grid";
        dashboardState.style.display = "none";
        btnReset.style.display = "none";
    });

    // BULLET POINT ENHANCER ACTION
    btnEnhance.addEventListener("click", () => {
        const text = bulletInput.value.trim().toLowerCase();
        if (!text) {
            alert("Please enter a bullet point sentence first!");
            return;
        }

        let category = "generic";
        if (text.includes("react") || text.includes("web") || text.includes("html") || text.includes("css") || text.includes("frontend") || text.includes("javascript")) {
            category = "web";
        } else if (text.includes("backend") || text.includes("api") || text.includes("node") || text.includes("express") || text.includes("server")) {
            category = "backend";
        } else if (text.includes("database") || text.includes("sql") || text.includes("mongo") || text.includes("postgres") || text.includes("query")) {
            category = "database";
        } else if (text.includes("model") || text.includes("machine learning") || text.includes("ml") || text.includes("python") || text.includes("data")) {
            category = "ml";
        }

        // Generate recommendations
        alternativesList.innerHTML = "";
        const templates = BULLET_TEMPLATES[category];
        templates.forEach(tpl => {
            const div = document.createElement("div");
            div.className = "alt-item";
            div.innerHTML = `<p>${tpl}</p>`;
            div.addEventListener("click", () => {
                navigator.clipboard.writeText(tpl);
                alert("Copied to clipboard!");
            });
            alternativesList.appendChild(div);
        });

        enhancedResults.style.display = "block";
    });

    // TABS SWITCHING LOGIC
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const targetId = btn.getAttribute("data-tab");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // SKILLS CATEGORY FILTER LOGIC
    document.querySelector(".skills-filter-container").addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-chip")) {
            // Update active chip
            document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
            e.target.classList.add("active");

            const filter = e.target.getAttribute("data-filter");
            const cards = document.querySelectorAll(".skill-category-card");
            
            cards.forEach(card => {
                if (filter === "all") {
                    card.style.display = "block";
                } else {
                    if (card.getAttribute("data-category") === filter) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                }
            });
        }
    });

    // --- UPLOAD PARSING ENGINE ---
    function handleFileUpload(file) {
        if (file.type !== "application/pdf") {
            alert("CV Insight only accepts PDF documents. For other formats, please paste the text directly into the text scanner.");
            return;
        }

        // Show loading screen
        uploadState.style.display = "none";
        loadingState.style.display = "block";
        resetLoadingSteps();

        // Step 1: Read PDF
        loadingStatusText.innerText = "Extracting text from PDF document...";
        stepPdf.className = "active";

        const fileReader = new FileReader();
        fileReader.onload = function () {
            const typedarray = new Uint8Array(this.result);
            
            pdfjsLib.getDocument(typedarray).promise.then(async function (pdf) {
                let fullText = "";
                const totalPages = pdf.numPages;

                for (let i = 1; i <= totalPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    const pageText = textContent.items.map(item => item.str).join(" ");
                    fullText += pageText + "\n";
                }

                stepPdf.className = "complete";
                
                // Call core analyzer
                setTimeout(() => {
                    analyzeResumeText(fullText);
                }, 800);

            }).catch(error => {
                console.error("PDF Parsing Error:", error);
                alert("Failed to parse PDF. The file may be password protected or image-only. Try copy-pasting its content instead.");
                resetToUpload();
            });
        };
        fileReader.readAsArrayBuffer(file);
    }

    function resetLoadingSteps() {
        stepPdf.className = "";
        stepSkills.className = "";
        stepCs.className = "";
        stepAts.className = "";
    }

    function resetToUpload() {
        loadingState.style.display = "none";
        uploadState.style.display = "grid";
    }

    // --- ANALYZER LOGIC ---
    function analyzeResumeText(rawText) {
        // Show scanning state if directly pasting text
        if (loadingState.style.display === "none") {
            uploadState.style.display = "none";
            loadingState.style.display = "block";
            resetLoadingSteps();
            stepPdf.className = "complete";
        }

        const lowercaseText = rawText.toLowerCase();

        // 1. Scan Technical Skills
        stepSkills.className = "active";
        loadingStatusText.innerText = "Indexing skill keywords...";
        const matchedSkills = scanSkills(lowercaseText);
        stepSkills.className = "complete";

        // 2. Scan Core CS Academic Subjects
        stepCs.className = "active";
        loadingStatusText.innerText = "Verifying B.Tech syllabus core modules...";
        const matchedCsCore = scanCsCore(lowercaseText);
        stepCs.className = "complete";

        // 3. Scan ATS Layout & Details
        stepAts.className = "active";
        loadingStatusText.innerText = "Analyzing formatting structure and contact tags...";
        const atsAudit = scanAtsCompliance(rawText, lowercaseText);
        stepAts.className = "complete";

        // 4. Extract and Evaluate Resume Projects
        const auditedProjects = extractAndJudgeProjects(rawText, lowercaseText);

        // 5. Calculate Final Score
        const scoringResult = calculateScore(matchedSkills, matchedCsCore, atsAudit, auditedProjects);
        
        // 6. Populate Dashboard Data
        setTimeout(() => {
            renderDashboard(rawText, matchedSkills, matchedCsCore, atsAudit, scoringResult, auditedProjects);
            
            // Toggle view to Dashboard
            loadingState.style.display = "none";
            dashboardState.style.display = "grid";
            btnReset.style.display = "inline-flex";
            
            // Trigger circular ring animation
            animateScoreRing(scoringResult.finalScore);
            
            // Refresh lucide icons inside dashboard
            lucide.createIcons();
        }, 800);
    }

    // Keyword Matcher using custom regex
    function scanSkills(text) {
        const results = {};
        
        for (const [catKey, catData] of Object.entries(TECHNICAL_SKILLS)) {
            results[catKey] = [];
            
            for (const [skillName, patterns] of Object.entries(catData.skills)) {
                let found = false;
                
                for (const pattern of patterns) {
                    const regex = new RegExp(pattern, "i");
                    if (regex.test(text)) {
                        found = true;
                        break;
                    }
                }
                
                results[catKey].push({
                    name: skillName,
                    found: found
                });
            }
        }
        return results;
    }

    // Core CS subject checker
    function scanCsCore(text) {
        const csSubjects = {
            "Data Structures & Algorithms": ["data structures", "\\bdsa\\b", "algorithms"],
            "Database Management (DBMS)": ["dbms", "database management", "relational database"],
            "Operating Systems (OS)": ["operating system", "\\bos\\b", "multithreading", "concurrency"],
            "Computer Networks (CN)": ["computer network", "tcp/ip", "\\bnetworking\\b", "http protocol"],
            "Object-Oriented Programming (OOPs)": ["oops", "\\boop\\b", "object oriented", "polymorphism", "inheritance"],
            "Software Engineering & Git": ["software engineering", "\\bsdlc\\b", "\\bgit\\b", "agile", "scrum"]
        };
        
        const results = [];
        for (const [subjName, patterns] of Object.entries(csSubjects)) {
            let found = false;
            for (const pattern of patterns) {
                const regex = new RegExp(pattern, "i");
                if (regex.test(text)) {
                    found = true;
                    break;
                }
            }
            results.push({
                name: subjName,
                found: found
            });
        }
        return results;
    }

    // Audit compliance
    function scanAtsCompliance(rawText, text) {
        const audit = {
            contact: {
                email: { found: false, val: null, label: "Email Address" },
                phone: { found: false, val: null, label: "Phone Number" },
                linkedin: { found: false, val: null, label: "LinkedIn Profile URL" },
                github: { found: false, val: null, label: "GitHub Profile URL" }
            },
            structure: {
                education: { found: false, label: "Education Details Section" },
                skills: { found: false, label: "Skills Summary Section" },
                projects: { found: false, label: "Projects Portfolio Section" },
                experience: { found: false, label: "Professional/Internship Experience" }
            },
            formatting: {
                wordCount: 0,
                bulletPoints: false,
                hasComplexTables: false, // checking simple markers that suggest complex templates
                hasUnreadableChars: false
            },
            educationMeta: {
                degree: "B.Tech (CS/IT) Candidate",
                cgpa: null,
                gradYear: null
            }
        };

        // Regex definitions
        const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
        const phoneRegex = /(\+?\d{1,4}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g; // general 10 digit, support international formats
        const linkedinRegex = /(linkedin\.com\/in\/[a-zA-Z0-9_-]+)/gi;
        const githubRegex = /(github\.com\/[a-zA-Z0-9_-]+)/gi;
        
        // Scan contact
        const emailMatch = text.match(emailRegex);
        if (emailMatch) {
            audit.contact.email.found = true;
            audit.contact.email.val = emailMatch[0];
        }
        
        const phoneMatch = text.match(phoneRegex);
        if (phoneMatch) {
            audit.contact.phone.found = true;
            audit.contact.phone.val = phoneMatch[0];
        }

        const linkedinMatch = text.match(linkedinRegex);
        if (linkedinMatch) {
            audit.contact.linkedin.found = true;
            audit.contact.linkedin.val = "https://" + linkedinMatch[0];
        }

        const githubMatch = text.match(githubRegex);
        if (githubMatch) {
            audit.contact.github.found = true;
            audit.contact.github.val = "https://" + githubMatch[0];
        }

        // Scan structure (lowercase matching)
        if (text.includes("education") || text.includes("academic qualification") || text.includes("studies")) {
            audit.structure.education.found = true;
        }
        if (text.includes("skill") || text.includes("technologies") || text.includes("languages")) {
            audit.structure.skills.found = true;
        }
        if (text.includes("project") || text.includes("capstone") || text.includes("work sample")) {
            audit.structure.projects.found = true;
        }
        if (text.includes("experience") || text.includes("internship") || text.includes("employment") || text.includes("work history")) {
            audit.structure.experience.found = true;
        }

        // Scan formatting
        const words = rawText.split(/\s+/).filter(w => w.length > 1);
        audit.formatting.wordCount = words.length;

        // Check for list elements
        if (rawText.includes("•") || rawText.includes("▪") || rawText.includes("◦") || rawText.includes("- ") || rawText.includes("* ")) {
            audit.formatting.bulletPoints = true;
        }

        // Check for complex characters or table structures (heuristic checking tabs, blocks, vertical bars)
        if (rawText.includes("│") || rawText.includes("║") || (rawText.match(/\|/g) || []).length > 6) {
            audit.formatting.hasComplexTables = true;
        }

        // Education metadata extract
        // Degree detect
        if (text.includes("information technology") || text.includes("b.tech it") || text.includes("btech it")) {
            audit.educationMeta.degree = "B.Tech (Information Technology)";
        } else if (text.includes("computer science") || text.includes("b.tech cse") || text.includes("btech cse") || text.includes("b.tech cs")) {
            audit.educationMeta.degree = "B.Tech (Computer Science & Eng.)";
        }

        // CGPA / percentage check
        const cgpaRegex = /(cgpa|gpa|pointer|percentage|aggregate)\s*:?\s*(\b[0-9]{1,2}(\.[0-9]{1,2})?\b(%|(\/10))?)/gi;
        const cgpaMatch = text.match(cgpaRegex);
        if (cgpaMatch) {
            audit.educationMeta.cgpa = cgpaMatch[0].replace(/cgpa|gpa|pointer|percentage|aggregate/i, "").replace(/[:\s]/g, "");
        } else {
            // General decimal search near grading keywords
            const decimalNearCgpa = /([5-9]\.[0-9]{1,2})\s*(\/10)?/g;
            const decMatch = text.match(decimalNearCgpa);
            if (decMatch) {
                audit.educationMeta.cgpa = decMatch[0];
            }
        }

        // Graduation year search (between 2020 and 2030)
        const yearRegex = /\b(202[0-9])\b/g;
        const yearMatch = text.match(yearRegex);
        if (yearMatch) {
            // Take the highest matching year as likely graduation
            const years = yearMatch.map(Number);
            audit.educationMeta.gradYear = Math.max(...years);
        }

        return audit;
    }

    // Project parsing & complexity auditing heuristic
    function extractAndJudgeProjects(rawText, lowercaseText) {
        const projects = [];
        
        // Locate Projects boundaries
        let startIndex = -1;
        const headerRegex = /(projects|personal projects|academic projects|capstone projects|key projects|academic works)/gi;
        let match;
        
        while ((match = headerRegex.exec(rawText)) !== null) {
            startIndex = match.index;
        }
        
        let sectionText = "";
        if (startIndex !== -1) {
            const nextHeaders = /(experience|work history|skills|education|certificates|achievements|languages|leadership|extracurriculars|profiles)/gi;
            nextHeaders.lastIndex = startIndex + 10;
            const nextMatch = nextHeaders.exec(rawText);
            
            if (nextMatch) {
                sectionText = rawText.substring(startIndex, nextMatch.index);
            } else {
                sectionText = rawText.substring(startIndex);
            }
        }
        
        // Split section text into single project records
        if (sectionText.trim().length > 40) {
            const lines = sectionText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
            let currentProject = null;
            
            // Exclude header line if matching
            if (lines.length > 0 && lines[0].toLowerCase().includes("project")) {
                lines.shift();
            }
            
            lines.forEach(line => {
                // Short, bold-looking non-bulleted lines are likely project titles
                const isTitle = line.length > 5 && line.length < 80 && 
                                !line.startsWith("•") && !line.startsWith("-") && !line.startsWith("*") &&
                                !line.toLowerCase().includes("technologies") && !line.toLowerCase().includes("tech stack") &&
                                (line.split(/\s+/).length >= 2 && line.split(/\s+/).length <= 9);
                
                if (isTitle) {
                    if (currentProject) {
                        projects.push(currentProject);
                    }
                    currentProject = {
                        title: line,
                        description: "",
                        bullets: []
                    };
                } else if (currentProject) {
                    currentProject.description += line + " ";
                    if (line.startsWith("•") || line.startsWith("-") || line.startsWith("*")) {
                        currentProject.bullets.push(line);
                    }
                }
            });
            
            if (currentProject) {
                projects.push(currentProject);
            }
        }
        
        // Fallback: create simulated projects if no Projects section parsed
        if (projects.length === 0) {
            const sentences = rawText.split(/[.!?]+/).map(s => s.trim()).filter(s => s.length > 20);
            const prjSentences = sentences.filter(s => 
                s.toLowerCase().includes("develop") || 
                s.toLowerCase().includes("implement") || 
                s.toLowerCase().includes("build") || 
                s.toLowerCase().includes("creat") || 
                s.toLowerCase().includes("design")
            );
            
            if (prjSentences.length > 0) {
                const count = Math.min(2, prjSentences.length);
                for (let i = 0; i < count; i++) {
                    projects.push({
                        title: `Identified Project Block #${i + 1}`,
                        description: prjSentences[i] + ".",
                        bullets: [prjSentences[i]]
                    });
                }
            } else {
                // Hard fallback mock project
                projects.push({
                    title: "Portfolio Website & API Integration",
                    description: "Built a responsive portfolio website with backend REST API integrations. Implemented styling sheet components and loaded project code onto GitHub handles.",
                    bullets: ["Built a responsive portfolio website with backend REST API integrations.", "Implemented styling sheet components.", "Loaded project code onto GitHub handles."]
                });
            }
        }
        
        // Rate and Audit projects
        const auditedProjects = projects.map(proj => {
            const text = proj.description.toLowerCase() + " " + proj.title.toLowerCase();
            
            // 1. Complexity Tier Rules
            let tier = "Basic";
            const advKeywords = ["docker", "kubernetes", "microservices", "system design", "scalability", "load balancer", "redis", "rabbitmq", "kafka", "graphql", "webrtc", "websocket", "neural network", "tensorflow", "pytorch", "compiler", "parser", "interpreter", "distributed", "aws", "gcp", "ci/cd", "pipeline"];
            const intKeywords = ["react", "node", "express", "mongodb", "mysql", "postgresql", "django", "flask", "firebase", "sqlite", "api", "restful", "crud", "machine learning", "algorithms", "ajax", "bootstrap", "tailwind"];
            
            let advScore = 0;
            let intScore = 0;
            
            advKeywords.forEach(kw => {
                if (text.includes(kw)) advScore++;
            });
            
            intKeywords.forEach(kw => {
                if (text.includes(kw)) intScore++;
            });
            
            if (advScore >= 1) {
                tier = "Advanced";
            } else if (intScore >= 1) {
                tier = "Intermediate";
            }
            
            // 2. Code Link rules
            const hasLink = /(github\.com|vercel\.app|github\.io|http:\/\/|https:\/\/|www\.)/gi.test(proj.description + " " + proj.title);
            
            // 3. Impact Metrics rules
            const hasMetrics = /([0-9]+%|[0-9]+\s*(ms|sec|kb|mb|gb|users|request|queries|fps|latency|speed|performance|accuracy|reduction))/gi.test(proj.description);
            
            // 4. Recommendation Tips
            const tips = [];
            if (tier === "Basic") {
                tips.push("Upgrade tech stack: Basic static projects (HTML/CSS calculator, simple website) are too common for B.Tech CSE/IT grads. Re-engineer this by integrating databases, backend routes, or basic algorithms.");
            } else if (tier === "Intermediate") {
                tips.push("Configure containerization: Solid full-stack implementation. Push it to Advanced by writing a Dockerfile, packaging it, and setting up an automation workflow with GitHub Actions.");
            } else {
                tips.push("Display scale & benchmarking: Excellent! You are showcasing advanced engineering. Add load-balancing metrics or benchmark test query durations directly inside the text to prove impact.");
            }
            
            if (!hasLink) {
                tips.push("Verify code integrity: Recruiter filters discard unverified items. Insert a working GitHub repository link next to the project title.");
            }
            
            if (!hasMetrics) {
                tips.push("Add quantitative indicators: Quantify project results. Use templates like: 'relocated schema properties, accelerating search query response times by 30% under active peak spikes'.");
            }
            
            return {
                title: proj.title,
                description: proj.description.trim(),
                tier: tier,
                hasLink: hasLink,
                hasMetrics: hasMetrics,
                tips: tips
            };
        });
        
        return auditedProjects;
    }

    // Score calculations incorporating project evaluations
    function calculateScore(skills, csCore, ats, auditedProjects) {
        let skillsPoints = 0;
        let totalFoundSkills = 0;
        
        for (const cat of Object.values(skills)) {
            cat.forEach(s => {
                if (s.found) totalFoundSkills++;
            });
        }
        // Max 25 points for skills (3 points per tech, up to 25)
        skillsPoints = Math.min(25, totalFoundSkills * 3);

        // Core CS subjects (max 25 points)
        let csPoints = 0;
        csCore.forEach(subj => {
            if (subj.found) csPoints += 4.5; // 6 subjects * 4.5 points = 27 (capped at 25)
        });
        csPoints = Math.min(25, csPoints);

        // Project Quality Score (max 20 points)
        let projectPoints = 0;
        if (auditedProjects.length > 0) {
            // Highest complexity tier points
            const tiers = auditedProjects.map(p => p.tier);
            if (tiers.includes("Advanced")) {
                projectPoints += 10;
            } else if (tiers.includes("Intermediate")) {
                projectPoints += 6;
            } else {
                projectPoints += 2;
            }
            
            // Check links and metrics
            const anyLink = auditedProjects.some(p => p.hasLink);
            const anyMetrics = auditedProjects.some(p => p.hasMetrics);
            
            if (anyLink) projectPoints += 5;
            if (anyMetrics) projectPoints += 5;
        }

        // ATS compliance score (max 30 points)
        let atsPoints = 0;
        
        // Contact details (3 points each = max 12)
        if (ats.contact.email.found) atsPoints += 3;
        if (ats.contact.phone.found) atsPoints += 3;
        if (ats.contact.linkedin.found) atsPoints += 3;
        if (ats.contact.github.found) atsPoints += 3;

        // Section Headers (2 points each = max 8)
        if (ats.structure.education.found) atsPoints += 2;
        if (ats.structure.skills.found) atsPoints += 2;
        if (ats.structure.projects.found) atsPoints += 2;
        if (ats.structure.experience.found) atsPoints += 2;

        // Formatting compliance (max 10 points)
        const wc = ats.formatting.wordCount;
        if (wc >= 350 && wc <= 750) {
            atsPoints += 5;
        } else if (wc > 200 && wc < 900) {
            atsPoints += 2.5;
        }
        
        if (ats.formatting.bulletPoints) {
            atsPoints += 5;
        }

        const finalScore = Math.round(skillsPoints + csPoints + projectPoints + atsPoints);

        return {
            finalScore: finalScore,
            skillsPoints: Math.round((skillsPoints / 25) * 100),
            csPoints: Math.round((csPoints / 25) * 100),
            projectPoints: Math.round((projectPoints / 20) * 100),
            atsPoints: Math.round((atsPoints / 30) * 100),
            totalSkillsFound: totalFoundSkills
        };
    }

    // Animate radial meter SVG
    function animateScoreRing(score) {
        const meter = document.getElementById("scoreMeter");
        const circumference = 339.29; // 2 * PI * 54
        const offset = circumference - (score / 100) * circumference;
        
        // Apply dashoffset
        meter.style.strokeDashoffset = offset;

        // Animate counter text
        const scoreText = document.getElementById("scoreText");
        let startVal = 0;
        const duration = 1200; // ms
        const stepTime = Math.abs(Math.floor(duration / score));
        
        const timer = setInterval(() => {
            startVal++;
            scoreText.innerText = startVal;
            if (startVal >= score) {
                clearInterval(timer);
                scoreText.innerText = score; // absolute final safety alignment
            }
        }, stepTime);
    }

    // --- VIEW RENDERING ENGINE ---
    function renderDashboard(rawText, skills, csCore, ats, scoreResult, auditedProjects) {
        // Set Profile Sidebar details
        document.getElementById("metaDegree").innerText = ats.educationMeta.degree;
        document.getElementById("metaCgpa").innerText = ats.educationMeta.cgpa ? ats.educationMeta.cgpa : "Not Found (Add!)";
        document.getElementById("metaGradYear").innerText = ats.educationMeta.gradYear ? ats.educationMeta.gradYear : "Not Found";
        document.getElementById("metaWordCount").innerText = ats.formatting.wordCount + " words";

        // Style score label badge
        const labelBadge = document.getElementById("scoreLabel");
        labelBadge.className = "score-label"; // clear classes
        if (scoreResult.finalScore >= 80) {
            labelBadge.innerText = "Excellent Ready";
            labelBadge.classList.add("score-success");
        } else if (scoreResult.finalScore >= 60) {
            labelBadge.innerText = "Solid Base";
            labelBadge.classList.add("score-warning");
        } else {
            labelBadge.innerText = "Needs Redesign";
            labelBadge.classList.add("score-danger");
        }

        // Render Contact pills
        const contactPills = document.getElementById("contactPills");
        contactPills.innerHTML = "";
        
        const contacts = [
            { key: "email", icon: "mail", title: "Email" },
            { key: "phone", icon: "phone", title: "Phone" },
            { key: "linkedin", icon: "linkedin", title: "LinkedIn" },
            { key: "github", icon: "github", title: "GitHub" }
        ];

        contacts.forEach(c => {
            const data = ats.contact[c.key];
            if (data.found) {
                const link = document.createElement("a");
                link.href = c.key === "email" ? `mailto:${data.val}` : (c.key === "phone" ? `tel:${data.val}` : data.val);
                link.target = "_blank";
                link.className = "contact-pill";
                link.title = `${data.label}: ${data.val}`;
                link.innerHTML = `<i data-lucide="${c.icon}"></i>`;
                contactPills.appendChild(link);
            }
        });

        // 1. OVERVIEW VIEW
        // Set progress fills
        document.getElementById("progCsScoreVal").innerText = scoreResult.csPoints + "%";
        document.getElementById("progCsScore").style.width = scoreResult.csPoints + "%";
        
        document.getElementById("progSkillsScoreVal").innerText = scoreResult.skillsPoints + "%";
        document.getElementById("progSkillsScore").style.width = scoreResult.skillsPoints + "%";
        
        document.getElementById("progAtsScoreVal").innerText = scoreResult.atsPoints + "%";
        document.getElementById("progAtsScore").style.width = scoreResult.atsPoints + "%";

        document.getElementById("progProjectScoreVal").innerText = scoreResult.projectPoints + "%";
        document.getElementById("progProjectScore").style.width = scoreResult.projectPoints + "%";

        // Setup strategic feedback message
        const strategicTxt = document.getElementById("overviewFeedbackText");
        const statusBadge = document.getElementById("overviewStatusBadge");
        statusBadge.className = "feedback-badge";
        
        if (scoreResult.finalScore >= 80) {
            statusBadge.innerText = "Strong";
            statusBadge.classList.add("score-success");
            strategicTxt.innerText = "Your resume displays robust core credentials. You have a solid representation of technical stacks and core theory modules. Focus on enhancing project quantitative metrics using the Optimizer tab and polishing specific formatting quirks.";
        } else if (scoreResult.finalScore >= 60) {
            statusBadge.innerText = "Moderate";
            statusBadge.classList.add("score-warning");
            strategicTxt.innerText = "You have standard technical capabilities, but critical pieces are missing. Ensure all B.Tech core syllabus theory headers (DBMS, Operating Systems) are named explicitly so ATS parsers index them. Boost your projects section.";
        } else {
            statusBadge.innerText = "Weak Structure";
            statusBadge.classList.add("score-danger");
            strategicTxt.innerText = "Your resume requires severe refactoring. Formatting omissions (like lacking Git handles or missing bullet points) combined with sparse keywords will disqualify you from algorithmic parsing passes. Adopt the recommendations in the Optimizer tab.";
        }

        // Render Academic checklist items
        const csList = document.getElementById("csCoreList");
        csList.innerHTML = "";
        csCore.forEach(subj => {
            const div = document.createElement("div");
            div.className = `cs-check-item ${subj.found ? "pass" : "fail"}`;
            div.innerHTML = `
                <span class="cs-name">${subj.name}</span>
                <span class="cs-status">
                    <i data-lucide="${subj.found ? "check-circle" : "x-circle"}"></i>
                    ${subj.found ? "Found" : "Missing"}
                </span>
            `;
            csList.appendChild(div);
        });

        // Dynamic Quick Roadmap items
        const roadmap = document.getElementById("quickRoadmap");
        roadmap.innerHTML = "";
        
        const missingSubjects = csCore.filter(s => !s.found);
        if (missingSubjects.length > 0) {
            const li = document.createElement("li");
            li.innerHTML = `Integrate specific academic keywords for missing core subjects: <strong>${missingSubjects.map(s => s.name).join(", ")}</strong>.`;
            roadmap.appendChild(li);
        }

        const missingContacts = Object.entries(ats.contact).filter(([k, v]) => !v.found);
        if (missingContacts.length > 0) {
            const li = document.createElement("li");
            li.innerHTML = `Add missing vital links & contacts to header area: <strong>${missingContacts.map(([k, v]) => v.label).join(", ")}</strong>.`;
            roadmap.appendChild(li);
        }

        if (!ats.formatting.bulletPoints) {
            const li = document.createElement("li");
            li.innerText = "Redesign text paragraphs using structural bullet points (•) to allow parsed keywords indexing.";
            roadmap.appendChild(li);
        }

        if (scoreResult.totalSkillsFound < 7) {
            const li = document.createElement("li");
            li.innerText = "Technical keywords density is light. Build projects to incorporate modern framework modules (React, Node.js, SQL).";
            roadmap.appendChild(li);
        }

        if (roadmap.children.length === 0) {
            const li = document.createElement("li");
            li.innerText = "Excellent structure! Elevate project metrics (e.g., 'accelerated speeds by 30%') and focus on mock technical interview drills.";
            roadmap.appendChild(li);
        }

        // 2. SKILLS CHECKLIST RENDERING
        const skillsGrid = document.getElementById("skillsGrid");
        skillsGrid.innerHTML = "";

        for (const [catKey, catData] of Object.entries(skills)) {
            const card = document.createElement("div");
            card.className = "glass-card skill-category-card";
            card.setAttribute("data-category", catKey);
            
            let tagsHtml = "";
            catData.forEach(s => {
                tagsHtml += `
                    <span class="skill-tag ${s.found ? "found" : "missing"}">
                        <i data-lucide="${s.found ? "check-circle-2" : "plus"}"></i>
                        ${s.name}
                    </span>
                `;
            });

            card.innerHTML = `
                <h3>${TECHNICAL_SKILLS[catKey].title}</h3>
                <div class="skills-list">
                    ${tagsHtml}
                </div>
            `;
            skillsGrid.appendChild(card);
        }

        // 3. JOB READINESS VIEW
        const readinessGrid = document.getElementById("readinessGrid");
        readinessGrid.innerHTML = "";

        // Calculate fit scores for each role based on weights
        const flatSkillsFound = [];
        for (const cat of Object.values(skills)) {
            cat.forEach(s => {
                if (s.found) flatSkillsFound.push(s.name);
            });
        }

        JOB_ROLES.forEach(role => {
            let matches = 0;
            let totalWeightKeys = 0;

            // Compute match percentage
            for (const [catKey, skillKeys] of Object.entries(role.weights)) {
                skillKeys.forEach(sKey => {
                    totalWeightKeys++;
                    if (flatSkillsFound.includes(sKey)) {
                        matches++;
                    }
                });
            }

            const matchPercent = totalWeightKeys > 0 ? Math.round((matches / totalWeightKeys) * 100) : 0;
            
            // Score tier categorization
            let rating = "Low Match";
            let ratingClass = "low";
            if (matchPercent >= 65) {
                rating = "Strong Fit";
                ratingClass = "high";
            } else if (matchPercent >= 35) {
                rating = "Medium Fit";
                ratingClass = "medium";
            }

            const card = document.createElement("div");
            card.className = "glass-card role-card";
            card.innerHTML = `
                <div>
                    <div class="role-card-header">
                        <div class="role-title">
                            <h3>${role.name}</h3>
                        </div>
                        <span class="role-rating ${ratingClass}">${rating}</span>
                    </div>
                    <div class="role-score-row">
                        <div class="role-score-text">${matchPercent}<span>% Match</span></div>
                    </div>
                    <div class="role-skills-summary">
                        <strong>Required Focus:</strong> ${role.weights.frameworks ? role.weights.frameworks.slice(0, 3).join(", ") : "CS skills"}
                    </div>
                </div>
                <div class="role-action-tips">
                    <i data-lucide="info" style="width:12px; height:12px; display:inline-block; margin-right:4px;"></i>
                    ${role.tips}
                </div>
            `;
            readinessGrid.appendChild(card);
        });

        // 4. ATS COMPLIANCE AUDIT VIEW
        const atsList = document.getElementById("atsAuditList");
        atsList.innerHTML = "";

        // Core Section Audit
        const auditItems = [];

        // Check contacts
        const missingCount = Object.values(ats.contact).filter(c => !c.found).length;
        if (missingCount === 0) {
            auditItems.push({
                title: "Contact Links Fully Complete",
                desc: "Email, phone number, and online portfolios (LinkedIn, GitHub) were correctly extracted from header space.",
                status: "audit-success",
                icon: "check-circle"
            });
        } else if (missingCount <= 2) {
            auditItems.push({
                title: "Incomplete Contact Omissions",
                desc: `Missing ${missingCount} core communication links (GitHub/LinkedIn handles are vital for freshers).`,
                status: "audit-warning",
                icon: "alert-triangle"
            });
        } else {
            auditItems.push({
                title: "Critical Contact Details Missing",
                desc: "Could not find standard portfolio URLs. Human recruiters will discard resumes without LinkedIn/Git linkages.",
                status: "audit-danger",
                icon: "x-circle"
            });
        }

        // Check structure headers
        const missingHeaders = Object.values(ats.structure).filter(s => !s.found);
        if (missingHeaders.length === 0) {
            auditItems.push({
                title: "All Core Sections Detected",
                desc: "ATS verified standard semantic headings: Education, Skills, Projects, and Experience.",
                status: "audit-success",
                icon: "check-circle"
            });
        } else {
            auditItems.push({
                title: `Missing Section Headers: ${missingHeaders.map(s => s.label.split(" ")[0]).join(", ")}`,
                desc: "Use simple header terms. Clever headings (like 'Where I Studied') break standard scanner parsing loops.",
                status: "audit-danger",
                icon: "x-circle"
            });
        }

        // Check Word Count
        const wc = ats.formatting.wordCount;
        if (wc >= 350 && wc <= 750) {
            auditItems.push({
                title: `Word Count Compliant (${wc} words)`,
                desc: "Optimal bounds for a single-page B.Tech graduate profile. Readable and density-sound.",
                status: "audit-success",
                icon: "check-circle"
            });
        } else if (wc < 250) {
            auditItems.push({
                title: `Low Word Count Density (${wc} words)`,
                desc: "Resume text is too sparse. Add technical project milestones, tools details, or course modules.",
                status: "audit-warning",
                icon: "alert-triangle"
            });
        } else {
            auditItems.push({
                title: `High Word Count Overage (${wc} words)`,
                desc: "Exceeds standard density guidelines. Condense text summaries, reduce filler words, and fit layout to a single page.",
                status: "audit-warning",
                icon: "alert-triangle"
            });
        }

        // Bullet points check
        if (ats.formatting.bulletPoints) {
            auditItems.push({
                title: "Structural Bullet Points Active",
                desc: "Resume utilizes format markers. Facilitates clean technical parsing.",
                status: "audit-success",
                icon: "check-circle"
            });
        } else {
            auditItems.push({
                title: "Missing List Bulleting Markers",
                desc: "Large block paragraphs detected. ATS software fails to extract semantic skills from sentence blocks.",
                status: "audit-danger",
                icon: "x-circle"
            });
        }

        // Complex elements checks
        if (ats.formatting.hasComplexTables) {
            auditItems.push({
                title: "Graphic Tables/Borders Detected",
                desc: "Gridlines or vertical divider symbols identified. Relocate contents into single-column text format.",
                status: "audit-warning",
                icon: "alert-triangle"
            });
        } else {
            auditItems.push({
                title: "ATS-friendly Flat Layout",
                desc: "No tabular grids detected that would derail typical text scanner reading pipelines.",
                status: "audit-success",
                icon: "check-circle"
            });
        }

        // Render checklist items
        auditItems.forEach(item => {
            const div = document.createElement("div");
            div.className = `audit-item ${item.status}`;
            div.innerHTML = `
                <div class="audit-icon"><i data-lucide="${item.icon}"></i></div>
                <div class="audit-details">
                    <h4>${item.title}</h4>
                    <p>${item.desc}</p>
                </div>
            `;
            atsList.appendChild(div);
        });

        // Extracted text preview setup
        const rawPreview = document.getElementById("rawTextPreview");
        rawPreview.innerText = rawText.substring(0, 1000) + (rawText.length > 1000 ? "\n\n... [Truncated for preview] ..." : "");

        // 5. PROJECT AUDITOR VIEW RENDER
        const projStatCount = document.getElementById("projStatCount");
        const projStatLinks = document.getElementById("projStatLinks");
        const projStatMetrics = document.getElementById("projStatMetrics");
        const projStatComplexity = document.getElementById("projStatComplexity");
        const projectAuditCards = document.getElementById("projectAuditCards");

        // Set counts
        projStatCount.innerText = auditedProjects.length;
        
        const countLinks = auditedProjects.filter(p => p.hasLink).length;
        projStatLinks.innerText = countLinks;
        
        const countMetrics = auditedProjects.filter(p => p.hasMetrics).length;
        projStatMetrics.innerText = countMetrics;

        // Determine average complexity
        const tiersFound = auditedProjects.map(p => p.tier);
        let avgComplexity = "Basic";
        if (tiersFound.includes("Advanced")) {
            avgComplexity = "Advanced";
        } else if (tiersFound.includes("Intermediate")) {
            avgComplexity = "Intermediate";
        }
        projStatComplexity.innerText = avgComplexity;

        // Render individual project evaluation cards
        projectAuditCards.innerHTML = "";
        auditedProjects.forEach(proj => {
            const card = document.createElement("div");
            
            let tierClass = "tier-bsc";
            let badgeClass = "tier-bsc";
            let visualTier = "Basic Tier";
            if (proj.tier === "Advanced") {
                tierClass = "tier-advanced";
                badgeClass = "tier-adv";
                visualTier = "SDE Tier (Advanced)";
            } else if (proj.tier === "Intermediate") {
                tierClass = "tier-intermediate";
                badgeClass = "tier-int";
                visualTier = "Full Stack (Intermediate)";
            }

            card.className = `glass-card project-audit-card ${tierClass}`;
            
            // Build tips list html
            let tipsHtml = "";
            proj.tips.forEach(tip => {
                tipsHtml += `<li>${tip}</li>`;
            });

            card.innerHTML = `
                <div class="proj-audit-header">
                    <span class="proj-audit-title">${proj.title}</span>
                    <span class="proj-tier-badge ${badgeClass}">${visualTier}</span>
                </div>
                
                <div class="proj-audit-checklists">
                    <span class="proj-checklist-badge ${proj.hasLink ? "pass" : "fail"}">
                        <i data-lucide="${proj.hasLink ? "check-circle-2" : "x-circle"}"></i>
                        GitHub Link: ${proj.hasLink ? "Verified" : "Missing"}
                    </span>
                    <span class="proj-checklist-badge ${proj.hasMetrics ? "pass" : "fail"}">
                        <i data-lucide="${proj.hasMetrics ? "check-circle-2" : "x-circle"}"></i>
                        Impact Metrics: ${proj.hasMetrics ? "Detected" : "None"}
                    </span>
                </div>
                
                <p class="proj-audit-description">${proj.description}</p>
                
                <div class="proj-audit-tips">
                    <h5>Audit Suggestions & Enhancements</h5>
                    <ul class="proj-tips-list">
                        ${tipsHtml}
                    </ul>
                </div>
            `;
            projectAuditCards.appendChild(card);
        });

        // 6. RESUME OPTIMIZER & CAPSTONE PROPOSALS
        const projectList = document.getElementById("projectSuggestionsList");
        projectList.innerHTML = "";

        const projectIdeas = [
            {
                name: "Distributed Task Scheduler API",
                desc: "Develop a backend job distribution server with RabbitMQ queues, Node.js triggers, and Redis lock tracking. Build standard REST endpoints.",
                skills: ["node.js", "redis", "databases", "system design"],
                trigger: ["node.js", "redis", "system design"]
            },
            {
                name: "Relational CRM Schema Engine",
                desc: "Design and program a PostgreSQL data manager, handling queries, creating indexes, auditing triggers, and logging benchmarks.",
                skills: ["postgresql", "sql", "dbms"],
                trigger: ["postgresql", "sql", "dbms"]
            },
            {
                name: "Graph Pathfinding Engine UI",
                desc: "Construct an interactive React dashboard modeling BFS, DFS, and Dijkstra algorithms on coordinate grids. Show live sorting logs.",
                skills: ["react", "data structures", "algorithms"],
                trigger: ["react", "data structures", "algorithms"]
            },
            {
                name: "Full Stack Portfolio & CI/CD Logs",
                desc: "Dockerize a basic React/Express web application. Setup automated testing logs using GitHub Actions and push images to AWS registry.",
                skills: ["docker", "ci/cd", "aws"],
                trigger: ["docker", "ci/cd", "aws", "kubernetes"]
            },
            {
                name: "Data Scraper & Pipeline Dashboard",
                desc: "Create python script pipelines automating web ingestion, organizing fields in SQLite databases, and mapping output metrics on charts.",
                skills: ["python", "sql", "databases"],
                trigger: ["python", "languages"]
            }
        ];

        // Gather flat array of missing skills names
        const flatSkillsMissing = [];
        for (const cat of Object.values(skills)) {
            cat.forEach(s => {
                if (!s.found) flatSkillsMissing.push(s.name);
            });
        }

        // Select projects matching missing elements, or show top ideas
        let suggestedCount = 0;
        projectIdeas.forEach(idea => {
            const fitsMissing = idea.trigger.some(t => flatSkillsMissing.includes(t));
            
            if (fitsMissing || suggestedCount < 3) {
                const div = document.createElement("div");
                div.className = "project-idea-item";
                
                let tagsHtml = "";
                idea.skills.forEach(ts => {
                    tagsHtml += `<span>${ts}</span>`;
                });

                div.innerHTML = `
                    <h4>${idea.name}</h4>
                    <p>${idea.desc}</p>
                    <div class="project-tags">
                        ${tagsHtml}
                    </div>
                `;
                projectList.appendChild(div);
                suggestedCount++;
            }
        });
    }
});
