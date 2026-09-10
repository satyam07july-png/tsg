import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaShieldAlt,
  FaChartLine,
  FaDatabase,
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaBriefcase,
  FaGraduationCap,
  FaStar,
  FaAward,
  FaRocket,
  FaChevronRight,
  FaPhoneAlt,
  FaCalendarAlt,
  FaUsers,
  FaCheck,
  FaUndo,
} from "react-icons/fa";

// ==========================================
// SKILLING DATA ARCHITECTURE (4 DOMAINS)
// ==========================================
const DOMAINS = [
  // 1. Digital Marketing
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Performance Marketing, SEO, Social Media & Growth Funnels",
    icon: <FaChartLine />,
    badge: "High ROI & Demand",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    avgSalary: "₹4.5 - ₹15 LPA",
    description:
      "Master ROI-driven digital campaigns, paid performance ads on Meta & Google, organic search optimization, viral social media branding, and automated sales funnels.",
    courses: [
      {
        id: "performance-marketing",
        title: "Performance Marketing & Paid Ads",
        subtitle: "Meta Ads, Google Ads, TikTok Ads & ROAS Optimization",
        level: "Beginner to Advanced",
        durationDefault: "6 Months",
        techStack: ["Meta Ads Manager", "Google Ads", "Google Analytics 4", "Canva", "Tag Manager"],
        highlights: [
          "Manage live ad budgets with real ROAS optimization",
          "Conversion Rate Optimization (CRO) & landing pages",
          "Retargeting funnels & custom audience lookalikes",
        ],
        modules: [
          "Marketing Psychology & High-Converting Funnel Architecture",
          "Google Search, Display & Performance Max Ads Setup",
          "Meta Ads: Creative Testing, CBO/ABO & Budget Scaling",
          "Analytics, Tracking Pixels, Conversion API & GA4",
          "Client Acquisition, Portfolio & Agency Scaling Model",
        ],
      },
      {
        id: "seo-masterclass",
        title: "SEO & Content Marketing Strategy",
        subtitle: "Technical SEO, On-Page, Off-Page, Semrush & AI Workflows",
        level: "Beginner to Intermediate",
        durationDefault: "6 Months",
        techStack: ["Semrush", "Ahrefs", "Google Search Console", "Screaming Frog", "WordPress"],
        highlights: [
          "Rank websites #1 on Google for high-intent keywords",
          "Technical site audits & Core Web Vitals fixes",
          "Authority link building & programmatic SEO",
        ],
        modules: [
          "Search Engine Algorithms & Advanced Keyword Research",
          "On-Page SEO, Content Optimization & Schema Markup",
          "Technical SEO Audits, Crawlability & Speed Optimization",
          "Backlink Strategies, Broken Links & Digital PR",
          "AI-Assisted Content Production & Programmatic SEO",
        ],
      },
      {
        id: "social-media-growth",
        title: "Social Media & Personal Brand Growth",
        subtitle: "Instagram, YouTube, LinkedIn Inbound & Viral Content",
        level: "Beginner to Intermediate",
        durationDefault: "6 Months",
        techStack: ["CapCut", "Canva", "Notion", "Buffer", "YouTube Studio"],
        highlights: [
          "Script, film & edit viral short-form content",
          "Organic follower growth strategies across platforms",
          "Brand partnerships & monetization pipelines",
        ],
        modules: [
          "Platform Algorithms, Trends & Content Strategy",
          "Hook Writing, Storytelling & Short-Form Video Production",
          "LinkedIn Thought Leadership & B2B Inbound Leads",
          "Community Management, Live Streams & Brand Engagement",
          "Monetization: Brand Sponsorships, Products & Consulting",
        ],
      },
      {
        id: "marketing-automation",
        title: "Marketing Automation & Sales Funnels",
        subtitle: "HubSpot, Mailchimp, Zapier, WhatsApp API & CRM",
        level: "Intermediate to Advanced",
        durationDefault: "6 Months",
        techStack: ["HubSpot", "Mailchimp", "Zapier", "WhatsApp API", "Make.com"],
        highlights: [
          "Automate lead nurture sequences & onboarding flows",
          "High-converting WhatsApp Business broadcast funnels",
          "CRM integration & customer lifecycle management",
        ],
        modules: [
          "Customer Lifecycle Mapping & Predictive Lead Scoring",
          "Automated Email Drip Sequences & Deliverability Setup",
          "WhatsApp Business API & Conversational AI Chatbots",
          "Zapier & Make.com Automated Workflow Pipelines",
          "CRM Pipeline Reporting & Revenue Attribution",
        ],
      },
    ],
  },

  // 2. Data science & data analystic
  {
    id: "data-science",
    title: "Data Science & Data Analytics",
    subtitle: "Python, SQL, Power BI, Tableau, Machine Learning & Statistics",
    icon: <FaDatabase />,
    badge: "High Growth",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    avgSalary: "₹6 - ₹22 LPA",
    description:
      "Transform complex raw data into actionable business decisions. Master data wrangling with Python, advanced SQL, interactive business intelligence dashboards, and predictive modeling.",
    courses: [
      {
        id: "bi-data-analytics",
        title: "Data Analytics & Business Intelligence (BI)",
        subtitle: "Power BI, Tableau, Advanced SQL & Excel Dashboards",
        level: "Beginner to Intermediate",
        durationDefault: "6 Months",
        techStack: ["Power BI", "Tableau", "SQL", "Advanced Excel", "DAX"],
        highlights: [
          "Build 10+ real-time interactive business dashboards",
          "Advanced DAX formulas and multi-table data modeling",
          "Automated executive reports & data storytelling",
        ],
        modules: [
          "Advanced Excel, Pivot Modeling & Power Query ETL",
          "Relational Databases & Advanced SQL (Joins, Windows, CTEs)",
          "Star & Snowflake Data Modeling in Power BI",
          "Advanced DAX Measures & Time-Intelligence Calculations",
          "Interactive Visualizations & Storyboarding in Tableau",
        ],
      },
      {
        id: "python-data-science",
        title: "Python for Data Science & Machine Learning",
        subtitle: "Pandas, NumPy, Scikit-Learn, Matplotlib & EDA",
        level: "Beginner to Advanced",
        durationDefault: "6 Months",
        techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
        highlights: [
          "Exploratory Data Analysis on million-row datasets",
          "Supervised & unsupervised machine learning models",
          "Statistical hypothesis testing & A/B test experiments",
        ],
        modules: [
          "Python Foundations & Vectorized Math with NumPy",
          "Data Cleaning, Wrangling & Aggregation with Pandas",
          "Statistical Methods, Distributions & A/B Testing",
          "Machine Learning with Scikit-Learn (Regression & Classification)",
          "Clustering, Dimensionality Reduction & Capstone Project",
        ],
      },
      {
        id: "advanced-sql-engineering",
        title: "Advanced SQL & Database Engineering",
        subtitle: "PostgreSQL, MySQL, Query Optimization & Data Warehousing",
        level: "Intermediate to Advanced",
        durationDefault: "6 Months",
        techStack: ["PostgreSQL", "MySQL", "Snowflake", "DBeaver", "Git"],
        highlights: [
          "High-performance SQL query tuning & execution plan analysis",
          "ACID transactions, stored procedures & triggers",
          "Modern cloud data warehousing concepts",
        ],
        modules: [
          "Complex SQL Queries, Window Functions & Subqueries",
          "Indexes, Partitioning & Execution Plan Tuning",
          "Stored Procedures, Triggers & Transactions in PostgreSQL",
          "Data Warehouse Dimensional Modeling (Star/Snowflake Schema)",
          "ETL Data Pipelines & Cloud Warehouse Integration",
        ],
      },
      {
        id: "predictive-big-data",
        title: "Predictive Analytics & Big Data",
        subtitle: "Time-Series Forecasting, Apache Spark & Machine Learning",
        level: "Intermediate to Pro",
        durationDefault: "6 Months",
        techStack: ["Apache Spark", "PySpark", "Statsmodels", "ARIMA", "Databricks"],
        highlights: [
          "Forecast sales, stock trends & customer churn",
          "Big data processing with PySpark on Databricks",
          "Production deployment of predictive pipelines",
        ],
        modules: [
          "Time-Series Analysis & Decomposition with ARIMA/Prophet",
          "Classification Models for Customer Churn & Credit Risk",
          "Distributed Computing Fundamentals & PySpark DataFrames",
          "Data Lakehouse Architecture on Databricks",
          "End-to-End Enterprise Predictive Pipeline Capstone",
        ],
      },
    ],
  },

  // 3. Cyber Security
  {
    id: "cyber-security",
    title: "Cyber Security",
    subtitle: "Ethical Hacking, SOC Analyst, Network Defence & Penetration Testing",
    icon: <FaShieldAlt />,
    badge: "Mission Critical",
    badgeColor: "bg-red-100 text-red-900 border-red-300",
    avgSalary: "₹6 - ₹24 LPA",
    description:
      "Defend digital infrastructure against modern threats, detect cyber attacks in real time, identify system vulnerabilities, and master ethical hacking techniques.",
    courses: [
      {
        id: "ethical-hacking",
        title: "Certified Ethical Hacking & Penetration Testing",
        subtitle: "Kali Linux, Metasploit, Nmap, Wireshark & Vulnerability Assessment",
        level: "Beginner to Intermediate",
        durationDefault: "6 Months",
        techStack: ["Kali Linux", "Metasploit", "Nmap", "Wireshark", "Burp Suite"],
        highlights: [
          "Hands-on vulnerability assessment virtual labs",
          "System reconnaissance, network scanning & exploitation",
          "Official CEH aligned methodology & penetration reports",
        ],
        modules: [
          "Introduction to Ethical Hacking & Legalities",
          "Network Scanning & Enumeration with Nmap",
          "System Exploitation, Password Attacks & Privilege Escalation",
          "Malware Analysis, Trojans & Social Engineering",
          "Defensive Countermeasures & Hardening Guidelines",
        ],
      },
      {
        id: "soc-analyst",
        title: "SOC Analyst & Threat Intelligence",
        subtitle: "SIEM, Splunk, EDR, Incident Response & MITRE ATT&CK",
        level: "Intermediate",
        durationDefault: "6 Months",
        techStack: ["Splunk", "Wireshark", "Suricata", "YARA", "MITRE ATT&CK"],
        highlights: [
          "Real-time security log monitoring with Splunk SIEM",
          "Threat hunting using the MITRE ATT&CK framework",
          "Incident response playbooks & forensic analysis",
        ],
        modules: [
          "Security Operations Center (SOC) Architecture",
          "Log Analysis & SIEM Deployment with Splunk",
          "Network Traffic Analysis & Packet Inspection",
          "Malware Analysis Basics & IOC Detection",
          "Incident Handling & Crisis Communication",
        ],
      },
      {
        id: "web-pentest",
        title: "Web Application Security & Bug Bounty",
        subtitle: "OWASP Top 10, SQLi, XSS, SSRF & Bug Bounty Hunting",
        level: "Intermediate to Pro",
        durationDefault: "6 Months",
        techStack: ["Burp Suite Pro", "OWASP ZAP", "Python", "SQLmap", "Postman"],
        highlights: [
          "Exploiting & remediating OWASP Top 10 vulnerabilities",
          "Bug bounty hunting methodologies on HackerOne & Bugcrowd",
          "API security testing & authentication bypasses",
        ],
        modules: [
          "Web Architecture, HTTP Protocol & Burp Suite Setup",
          "Injection Attacks (SQLi, Command Injection)",
          "Cross-Site Scripting (XSS) & CSRF Exploits",
          "Broken Access Control & Business Logic Flaws",
          "Bug Bounty Practical Labs & Live Target Hunting",
        ],
      },
      {
        id: "network-defence",
        title: "Network Security & Digital Forensics",
        subtitle: "Firewalls, IDS/IPS, VPNs, Cryptography & Disk Forensics",
        level: "Intermediate",
        durationDefault: "6 Months",
        techStack: ["pfSense", "Snort", "Autopsy", "FTK Imager", "OpenVPN"],
        highlights: [
          "Configure enterprise next-gen firewalls & VPN tunnels",
          "Digital forensics & chain-of-custody evidence handling",
          "Public Key Infrastructure (PKI) & secure encryption",
        ],
        modules: [
          "Network Protocols, Routing & Switching Security",
          "Firewall Configurations, DMZ & VPN Tunnels",
          "Intrusion Detection & Prevention (IDS/IPS) with Snort",
          "Digital Forensics Acquisition & Disk Imaging with FTK",
          "Evidence Reporting for Legal & Corporate Audits",
        ],
      },
    ],
  },

  // 4. Ai and prompt engreeing
  {
    id: "ai-prompt-engineering",
    title: "AI & Prompt Engineering",
    subtitle: "Generative AI, ChatGPT, Claude, LangChain, AI Agents & Automation",
    icon: <FaBrain />,
    badge: "Trending Tech 2025",
    badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
    avgSalary: "₹7 - ₹26 LPA",
    description:
      "Harness the power of Generative AI, master advanced prompt engineering techniques, build autonomous multi-agent systems, and integrate modern LLMs into real-world applications.",
    courses: [
      {
        id: "gen-ai-prompting",
        title: "Generative AI & Advanced Prompt Engineering",
        subtitle: "ChatGPT, Claude 3.5, Midjourney, Advanced Prompting & Workflows",
        level: "Beginner to Intermediate",
        durationDefault: "6 Months",
        techStack: ["ChatGPT", "Claude", "Midjourney", "Runway", "Notion AI"],
        highlights: [
          "Chain-of-Thought, Few-Shot & ReAct advanced prompting",
          "Enterprise AI workflow automation for business tasks",
          "Multimodal AI generation: text, imagery, voice & video",
        ],
        modules: [
          "Foundations of Generative AI & Transformer Models",
          "Advanced Prompt Architectures (Chain-of-Thought, Role Prompting)",
          "Image, Video & Voice Generation with Midjourney & Runway",
          "AI Productivity Workflows & Enterprise Automation",
          "Prompt Injection Defense & Hallucination Mitigation",
        ],
      },
      {
        id: "autonomous-ai-agents",
        title: "Autonomous AI Agents & Multi-Agent Teams",
        subtitle: "CrewAI, AutoGen, Model Context Protocol (MCP) & LangGraph",
        level: "Intermediate to Pro",
        durationDefault: "6 Months",
        techStack: ["CrewAI", "LangGraph", "Python", "MCP", "FastAPI"],
        highlights: [
          "Build autonomous AI teams that research, plan, and write code",
          "Model Context Protocol (MCP) tool integration",
          "Enterprise workflow automation with autonomous agents",
        ],
        modules: [
          "Agentic Workflows vs Traditional Single-Prompt LLMs",
          "CrewAI Multi-Agent Teams, Roles & Delegation",
          "LangGraph State Machines & Graph-based Agents",
          "Model Context Protocol (MCP) & Custom Tool Calling",
          "Enterprise Agent Deployment & Real-World Case Studies",
        ],
      },
      {
        id: "llm-rag-development",
        title: "LLM Application Development & RAG Systems",
        subtitle: "LangChain, Vector Databases (Chroma/Pinecone), RAG & Python",
        level: "Intermediate to Pro",
        durationDefault: "6 Months",
        techStack: ["Python", "LangChain", "ChromaDB", "OpenAI API", "Streamlit"],
        highlights: [
          "Build Retrieval-Augmented Generation (RAG) applications",
          "Semantic search over enterprise PDFs, docs & databases",
          "Deploy full-stack generative AI applications",
        ],
        modules: [
          "Python for AI & API Integration with FastAPI",
          "Vector Embeddings & Vector Databases (ChromaDB, Pinecone)",
          "Chunking Strategies & RAG Pipeline Optimization",
          "Context Window Management & Re-ranking Methods",
          "Building Interactive Chatbots with Streamlit & React",
        ],
      },
      {
        id: "fine-tuning-llms",
        title: "Fine-Tuning & Open Source AI Models",
        subtitle: "Llama 3, Mistral, Hugging Face, LoRA/QLoRA & Model Serving",
        level: "Advanced",
        durationDefault: "6 Months",
        techStack: ["Hugging Face", "PyTorch", "LoRA", "QLoRA", "vLLM"],
        highlights: [
          "Fine-tune open source models on custom business datasets",
          "4-bit & 8-bit quantization for efficient GPU deployment",
          "High-throughput model serving with vLLM & Docker",
        ],
        modules: [
          "Open Source AI Ecosystem vs Proprietary APIs",
          "Custom Dataset Preparation, Tokenization & Cleaning",
          "Parameter-Efficient Fine-Tuning (PEFT) with LoRA & QLoRA",
          "Model Evaluation, Benchmarking & Safety Guardrails",
          "Production Inference Deployment with vLLM & Docker",
        ],
      },
    ],
  },
];

// ==========================================
// DURATION DEFINITIONS (3, 6, 12 MONTHS)
// ==========================================
const DURATION_OPTIONS = [
  {
    id: "3-months",
    duration: "3 Months",
    name: "Foundation / Fast-Track",
    badge: "Fast-Track",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    popular: false,
    tagline: "Master core essentials and build working prototypes quickly.",
    idealFor: "College students, fast upskilling, and coding beginners",
    hoursPerWeek: "8 - 10 Hours / Week",
    liveHours: "60+ Hours Live Sessions",
    projects: "3 Real-World Projects",
    mentorship: "Weekly Group Q&A & Code Reviews",
    placementSupport: "Resume Review & Dizital Adda Job Board Access",
    certification: "Verified Foundation Certificate",
    basePrice: 9999,
    originalPrice: 19999,
    emiStartsAt: "₹3,499/mo (3 Months)",
    features: [
      "Live interactive evening & weekend batches",
      "Hands-on project repository access",
      "Verified course completion certificate",
      "Community discussion forum & discord access",
      "Official LMS lifetime study notes & recordings",
      "Self-paced assignments & automated code feedback",
    ],
    roadmap: [
      { phase: "Month 1", title: "Foundations & Core Fundamentals", desc: "Core syntax, tooling, environment setup, and basic problem solving." },
      { phase: "Month 2", title: "Specialized Modules & Mini Projects", desc: "Working with essential frameworks, libraries, APIs, and databases." },
      { phase: "Month 3", title: "Capstone Project & Deployment", desc: "Building an end-to-end working product, hosting live, and code review." },
    ],
  },
  {
    id: "6-months",
    duration: "6 Months",
    name: "Professional Career Track",
    badge: "⭐ Most Popular",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    popular: true,
    tagline: "Comprehensive job-ready curriculum with end-to-end live industry projects.",
    idealFor: "Job seekers, career switchers, and serious tech aspirants",
    hoursPerWeek: "12 - 15 Hours / Week",
    liveHours: "150+ Hours Live Sessions",
    projects: "8 Industry Projects + 1 Major Capstone",
    mentorship: "1:1 Dedicated Mentor Reviews & Guidance",
    placementSupport: "Dedicated Placement Support + 5 Mock Technical Interviews",
    certification: "Professional Industry Certificate + ISO Verification",
    basePrice: 18999,
    originalPrice: 35999,
    emiStartsAt: "₹3,299/mo (6 Months)",
    features: [
      "Everything in the 3 Months track",
      "150+ Hours live interactive classes with senior engineers",
      "8 Production-grade projects suitable for GitHub portfolio",
      "Dedicated 1:1 mentorship & bi-weekly progress tracking",
      "Resume enhancement, LinkedIn optimization & GitHub audit",
      "5 Mock interviews with industry technical leads",
      "Direct referrals to 50+ hiring partner companies",
      "Dizital Adda Verified Professional Credential",
    ],
    roadmap: [
      { phase: "Month 1 - 2", title: "Core Architecture & Advanced Concepts", desc: "Deep dive into language mechanics, design patterns, and architecture." },
      { phase: "Month 3 - 4", title: "Full-Scale Implementation & APIs", desc: "Building scalable production microservices, data persistence & security." },
      { phase: "Month 5 - 6", title: "Enterprise Capstone & Placement Prep", desc: "Full-stack enterprise app deployment, mock interviews & hiring drives." },
    ],
  },
  {
    id: "12-months",
    duration: "12 Months",
    name: "Mastery & Guaranteed Placement Track",
    badge: "🚀 100% Placement Guarantee",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    popular: false,
    tagline: "Zero-to-hero mastery with paid internship & guaranteed job placement.",
    idealFor: "Complete career transformation, non-tech to tech transitions",
    hoursPerWeek: "15 - 20 Hours / Week",
    liveHours: "300+ Hours Live Sessions",
    projects: "16+ Enterprise Projects + 2 Enterprise Capstones",
    mentorship: "Unlimited 1:1 Senior Engineering Mentorship",
    placementSupport: "100% Placement Guarantee (with formal job agreement)",
    certification: "Dual Global Certificate + Verified Internship Letter",
    basePrice: 34999,
    originalPrice: 69999,
    emiStartsAt: "₹3,199/mo (12 Months)",
    features: [
      "Everything in the 6 Months track",
      "300+ Hours intensive live training with tech leads",
      "Guaranteed 3-Month Paid Internship with partner startups",
      "100% Job Placement Guarantee (or full refund as per terms)",
      "Unlimited 1-on-1 personalized mentorship sessions",
      "System design, DSA & competitive coding masterclass",
      "Direct interview scheduling with top multinational companies",
      "Dual global certification & authorized experience letter",
    ],
    roadmap: [
      { phase: "Month 1 - 3", title: "Comprehensive Foundations & DSA", desc: "Deep foundational programming, algorithms, data structures & clean code." },
      { phase: "Month 4 - 6", title: "Advanced Specialization & Microservices", desc: "Building distributed enterprise-grade applications & cloud deployment." },
      { phase: "Month 7 - 9", title: "Paid Live Internship & Real Team Sprint", desc: "Working on real client codebases, Agile sprints & code reviews." },
      { phase: "Month 10 - 12", title: "Placement Drives & Guaranteed Offers", desc: "Dedicated placement desk, targeted referrals & offer letter negotiations." },
    ],
  },
];

// ==========================================
// MAIN SKILLING COMPONENT
// ==========================================
function Skilling() {
  const navigate = useNavigate();

  // Multi-step State
  // Step 1: Domain Selection (Digital Marketing, Data Science, Cyber Security, AI & Prompt Eng)
  // Step 2: Course Selection
  // Step 3: Duration Selection (3, 6, 12 Months)
  // Step 4: Final Course Package & Enrollment Details
  const [step, setStep] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);

  // Counselor Modal / Success State
  const [showCounselorModal, setShowCounselorModal] = useState(false);
  const [counselorSubmitted, setCounselorSubmitted] = useState(false);
  const [counselorForm, setCounselorForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Step 1: Select a Domain
  const handleDomainSelect = (domain) => {
    setSelectedDomain(domain);
    setSelectedCourse(null);
    setSelectedDuration(null);
    setStep(2);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Step 2: Select a Course
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    const defaultDur =
      DURATION_OPTIONS.find((d) => d.id === "6-months") || DURATION_OPTIONS[1];
    setSelectedDuration(defaultDur);
    setStep(3);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Step 3: Select a Duration
  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
    setStep(4);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Reset Flow
  const handleReset = () => {
    setStep(1);
    setSelectedDomain(null);
    setSelectedCourse(null);
    setSelectedDuration(null);
  };

  // Handle Counselor Form Submit
  const handleCounselorSubmit = (e) => {
    e.preventDefault();
    if (!counselorForm.name || !counselorForm.phone) return;
    setCounselorSubmitted(true);
    setTimeout(() => {
      setShowCounselorModal(false);
      setCounselorSubmitted(false);
      setCounselorForm({ name: "", phone: "", email: "" });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans">
      {/* ==========================================
          PORTAL TOP BAR NAVIGATION
      ========================================== */}
      <div className="bg-[#1E293B] text-slate-200 border-b border-slate-700">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-center text-sm md:text-base font-semibold">
          <Link
            to="/"
            className="py-3 px-2 border-r border-slate-700/60 hover:bg-[#0B1220] hover:text-[#D4A017] transition"
          >
            Home
          </Link>
          <Link
            to="/academic"
            className="py-3 px-2 border-r border-slate-700/60 hover:bg-[#0B1220] hover:text-[#D4A017] transition"
          >
            Academics
          </Link>
          <Link
            to="/entrance"
            className="py-3 px-2 border-r border-slate-700/60 hover:bg-[#0B1220] hover:text-[#D4A017] transition"
          >
            Entrance
          </Link>
          <Link
            to="/competition"
            className="py-3 px-2 border-r border-slate-700/60 hover:bg-[#0B1220] hover:text-[#D4A017] transition"
          >
            Competition
          </Link>
          <Link
            to="/skilling"
            className="py-3 px-2 bg-[#7C2D12] text-white border-r border-slate-700/60 font-bold transition flex items-center justify-center gap-1"
          >
            <span>Skilling</span>
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse"></span>
          </Link>
          <Link
            to="/placement"
            className="py-3 px-2 hover:bg-[#0B1220] hover:text-[#D4A017] transition"
          >
            Placement
          </Link>
        </div>
      </div>

      {/* ==========================================
          HERO SECTION (DIZITAL ADDA PORTAL STYLE)
      ========================================== */}
      <section className="bg-[#0B1220] text-white border-b-4 border-[#D4A017] relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D4A017]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-400/30 text-orange-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            <FaRocket className="text-orange-400" />
            <span>National Future Skills & Career Ecosystem</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            Future Skills Portal
          </h1>

          <p className="text-orange-200 mt-4 text-xl sm:text-2xl font-medium max-w-3xl mx-auto">
            India's AI-Powered Future Technology & Job Placement Ecosystem
          </p>

          <div className="w-24 h-1 bg-[#D4A017] mx-auto mt-6 rounded-full"></div>

          <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Select your technology domain, explore specialized industry courses,
            choose your flexible duration track (3, 6, or 12 Months), and launch your
            career with 100% placement support.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-800">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">4</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Core Tech Domains</p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">16+</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Specialized Courses</p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">3, 6, 12 M</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Flexible Tracks</p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">94%</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          INTERACTIVE STEPPER & BREADCRUMBS
      ========================================== */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        {/* Stepper Circles */}
        <div className="flex items-center justify-between relative max-w-3xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-slate-200 w-full z-0"></div>
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#7C2D12] transition-all duration-500 z-0"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>

          {/* Steps */}
          {[
            { num: 1, label: "1. Select Domain" },
            { num: 2, label: "2. Choose Course" },
            { num: 3, label: "3. Pick Duration" },
            { num: 4, label: "4. Program Card" },
          ].map((item) => (
            <div
              key={item.num}
              onClick={() => {
                if (item.num < step) setStep(item.num);
              }}
              className={`relative z-10 flex flex-col items-center cursor-pointer transition-all ${
                item.num <= step ? "text-[#7C2D12]" : "text-slate-400"
              }`}
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base border-2 transition-all shadow-md ${
                  step === item.num
                    ? "bg-[#7C2D12] text-white border-[#D4A017] scale-110 ring-4 ring-orange-200"
                    : step > item.num
                    ? "bg-[#0B1220] text-[#D4A017] border-[#0B1220]"
                    : "bg-white text-slate-400 border-slate-300"
                }`}
              >
                {step > item.num ? <FaCheck className="text-sm" /> : item.num}
              </div>
              <span className="text-xs sm:text-sm font-semibold mt-2 text-center whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Dynamic Breadcrumbs */}
        <div className="mt-8 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm flex flex-wrap items-center justify-between gap-3 text-sm">
          <div className="flex flex-wrap items-center gap-2 text-slate-600">
            <span
              onClick={handleReset}
              className="font-medium hover:text-[#7C2D12] cursor-pointer flex items-center gap-1"
            >
              All Domains
            </span>

            {selectedDomain && (
              <>
                <FaChevronRight className="text-xs text-slate-400" />
                <span
                  onClick={() => setStep(2)}
                  className={`font-medium cursor-pointer ${
                    step === 2
                      ? "text-[#7C2D12] font-bold"
                      : "hover:text-[#7C2D12]"
                  }`}
                >
                  {selectedDomain.title}
                </span>
              </>
            )}

            {selectedCourse && (
              <>
                <FaChevronRight className="text-xs text-slate-400" />
                <span
                  onClick={() => setStep(3)}
                  className={`font-medium cursor-pointer ${
                    step === 3
                      ? "text-[#7C2D12] font-bold"
                      : "hover:text-[#7C2D12]"
                  }`}
                >
                  {selectedCourse.title}
                </span>
              </>
            )}

            {selectedDuration && (
              <>
                <FaChevronRight className="text-xs text-slate-400" />
                <span className="font-bold text-[#7C2D12]">
                  {selectedDuration.duration} ({selectedDuration.name})
                </span>
              </>
            )}
          </div>

          {step > 1 && (
            <button
              onClick={() => setStep((prev) => Math.max(1, prev - 1))}
              className="text-xs sm:text-sm inline-flex items-center gap-1.5 text-[#0B1220] hover:text-[#7C2D12] font-bold px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
            >
              <FaArrowLeft className="text-xs" /> Back
            </button>
          )}
        </div>
      </div>

      {/* ==========================================
          MAIN INTERACTIVE CONTAINER
      ========================================== */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* ==========================================
            STEP 1: SELECT DOMAIN
        ========================================== */}
        {step === 1 && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1220]">
                Step 1: Choose Your Career Domain
              </h2>
              <p className="text-slate-600 mt-2 text-base sm:text-lg">
                Select from our 4 specialized industry domains to view its courses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DOMAINS.map((domain, index) => (
                <div
                  key={domain.id}
                  onClick={() => handleDomainSelect(domain)}
                  className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-[#7C2D12] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#7C2D12] group-hover:bg-[#7C2D12] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-2xl shadow-inner">
                        {domain.icon}
                      </div>
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                        0{index + 1}
                      </span>
                    </div>

                    <span
                      className={`inline-block text-xs px-2.5 py-0.5 rounded-full font-bold border mb-2 ${domain.badgeColor}`}
                    >
                      {domain.badge}
                    </span>

                    <h3 className="text-xl font-bold text-[#0B1220] group-hover:text-[#7C2D12] transition-colors leading-tight">
                      {domain.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">
                      {domain.courses.length} Specialized Courses
                    </p>

                    <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                      {domain.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">
                        Avg CTC
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {domain.avgSalary}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-bold text-[#7C2D12] group-hover:translate-x-1 transition-transform">
                      Explore <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==========================================
            STEP 2: SELECT COURSE
        ========================================== */}
        {step === 2 && selectedDomain && (
          <div>
            {/* Domain Context Banner */}
            <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 mb-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#7C2D12] text-white flex items-center justify-center text-3xl shadow-md">
                  {selectedDomain.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      Selected Domain
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-bold border ${selectedDomain.badgeColor}`}
                    >
                      {selectedDomain.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220]">
                    {selectedDomain.title}
                  </h2>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {selectedDomain.subtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setStep(1)}
                className="self-start md:self-center inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#7C2D12] bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl transition"
              >
                <FaUndo className="text-xs" /> Change Domain
              </button>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-[#0B1220]">
                Step 2: Select Your Specialization Course
              </h3>
              <p className="text-slate-600 mt-1">
                Choose a specialized course program under {selectedDomain.title}.
              </p>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedDomain.courses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleCourseSelect(course)}
                  className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200 hover:border-[#7C2D12] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        {course.level}
                      </span>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <FaAward className="text-xs" /> Certified
                      </span>
                    </div>

                    <h4 className="text-2xl font-black text-[#0B1220] group-hover:text-[#7C2D12] transition-colors leading-snug">
                      {course.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium mt-1">
                      {course.subtitle}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {course.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-lg border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mt-5 space-y-2">
                      {course.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0 text-xs" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-semibold">
                      Standard: 3, 6, or 12 Months
                    </span>
                    <button className="inline-flex items-center gap-2 bg-[#0B1220] group-hover:bg-[#7C2D12] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm">
                      Select Course <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-3 rounded-xl transition"
              >
                <FaArrowLeft /> Back to Domains
              </button>
            </div>
          </div>
        )}

        {/* ==========================================
            STEP 3: SELECT DURATION (3, 6, 12 MONTHS)
        ========================================== */}
        {step === 3 && selectedCourse && (
          <div>
            {/* Context Summary Header */}
            <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 mb-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  {selectedDomain?.title} &gt; {selectedCourse.title}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1220] mt-1">
                  Step 3: Choose Your Program Duration
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Select the duration that matches your learning pace and career goals.
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#7C2D12] bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition"
                >
                  <FaUndo className="text-xs" /> Change Course
                </button>
              </div>
            </div>

            {/* 3 Durations Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {DURATION_OPTIONS.map((tier) => (
                <div
                  key={tier.id}
                  className={`bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative border-2 ${
                    tier.popular
                      ? "border-[#D4A017] shadow-2xl ring-2 ring-amber-300/60 lg:-translate-y-2"
                      : "border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300"
                  }`}
                >
                  {/* Popular Floating Ribbon */}
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-[#D4A017] text-[#0B1220] text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    {/* Top Info */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-bold border ${tier.badgeColor}`}
                      >
                        {tier.duration} Track
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        {tier.hoursPerWeek}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-[#0B1220]">
                      {tier.duration}
                    </h3>
                    <p className="text-sm font-bold text-[#7C2D12] mt-0.5">
                      {tier.name}
                    </p>

                    <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                      {tier.tagline}
                    </p>

                    {/* Price & EMI */}
                    <div className="mt-5 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-[#0B1220]">
                          ₹{tier.basePrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-sm line-through text-slate-400">
                          ₹{tier.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-emerald-700 mt-1">
                        EMI from {tier.emiStartsAt}
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="mt-6 space-y-2.5 text-sm">
                      <div className="flex items-center gap-2.5 text-slate-700">
                        <FaClock className="text-[#7C2D12] text-sm flex-shrink-0" />
                        <span className="font-medium">{tier.liveHours}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-700">
                        <FaBriefcase className="text-[#7C2D12] text-sm flex-shrink-0" />
                        <span className="font-medium">{tier.projects}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-700">
                        <FaGraduationCap className="text-[#7C2D12] text-sm flex-shrink-0" />
                        <span className="font-medium">{tier.certification}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-700">
                        <FaAward className="text-[#7C2D12] text-sm flex-shrink-0" />
                        <span className="font-medium">{tier.placementSupport}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mt-6 pt-5 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        What's Included
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                        {tier.features.slice(0, 4).map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0 text-xs" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => handleDurationSelect(tier)}
                      className={`w-full py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 ${
                        tier.popular
                          ? "bg-[#7C2D12] hover:bg-[#60230e] text-white ring-2 ring-orange-300"
                          : "bg-[#0B1220] hover:bg-[#1E293B] text-white"
                      }`}
                    >
                      Select {tier.duration} Track <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-3 rounded-xl transition"
              >
                <FaArrowLeft /> Back to Courses
              </button>
            </div>
          </div>
        )}

        {/* ==========================================
            STEP 4: FINAL PROGRAM CARD & ENROLLMENT
        ========================================== */}
        {step === 4 && selectedDomain && selectedCourse && selectedDuration && (
          <div>
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Track Configured Successfully
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1220] mt-3">
                Your Customized Skilling Program
              </h2>
              <p className="text-slate-600 mt-1">
                Review your customized program structure, syllabus roadmap, and enrollment options.
              </p>
            </div>

            {/* MASTER PROGRAM CARD */}
            <div className="bg-white rounded-3xl border-2 border-[#D4A017] shadow-2xl overflow-hidden mb-12">
              {/* Card Banner */}
              <div className="bg-[#0B1220] text-white p-8 sm:p-10 border-b-4 border-[#D4A017] relative">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#7C2D12] text-white flex items-center justify-center text-3xl shadow-lg border border-[#D4A017]/40">
                      {selectedDomain.icon}
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-widest text-[#D4A017]">
                        {selectedDomain.title}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-black text-white">
                        {selectedCourse.title}
                      </h3>
                      <p className="text-sm sm:text-base text-orange-200 mt-1 font-medium">
                        {selectedCourse.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center sm:text-right">
                    <span className="text-xs text-slate-300 block font-medium">
                      Selected Track
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#D4A017]">
                      {selectedDuration.duration} ({selectedDuration.name})
                    </span>
                    <span className="text-xs text-slate-300 block mt-0.5">
                      Batch starts Next Monday
                    </span>
                  </div>
                </div>

                {/* Quick Breadcrumb Buttons */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800 text-xs">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-white/10 hover:bg-white/20 text-slate-200 px-3 py-1.5 rounded-lg transition"
                  >
                    Change Domain
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="bg-white/10 hover:bg-white/20 text-slate-200 px-3 py-1.5 rounded-lg transition"
                  >
                    Change Course
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-white/10 hover:bg-white/20 text-slate-200 px-3 py-1.5 rounded-lg transition"
                  >
                    Change Duration ({selectedDuration.duration})
                  </button>
                  <button
                    onClick={handleReset}
                    className="bg-red-500/20 hover:bg-red-500/30 text-red-200 px-3 py-1.5 rounded-lg transition ml-auto"
                  >
                    Start Over
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 sm:p-10 space-y-10">
                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <FaClock className="text-2xl text-[#7C2D12] mb-2" />
                    <p className="text-xs text-slate-500 font-semibold">Total Duration</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedDuration.duration} ({selectedDuration.hoursPerWeek})
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <FaBriefcase className="text-2xl text-[#7C2D12] mb-2" />
                    <p className="text-xs text-slate-500 font-semibold">Real Projects</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedDuration.projects}
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <FaAward className="text-2xl text-[#7C2D12] mb-2" />
                    <p className="text-xs text-slate-500 font-semibold">Certification</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedDuration.certification}
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <FaUsers className="text-2xl text-[#7C2D12] mb-2" />
                    <p className="text-xs text-slate-500 font-semibold">Career Support</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedDuration.placementSupport}
                    </p>
                  </div>
                </div>

                {/* Curriculum & Roadmap Breakdown */}
                <div className="border-t border-slate-200 pt-8">
                  <h4 className="text-xl font-bold text-[#0B1220] mb-4 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#7C2D12]" />
                    <span>Learning Roadmap ({selectedDuration.duration} Program)</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedDuration.roadmap.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-2xl p-5 border border-slate-200 relative overflow-hidden"
                      >
                        <span className="text-xs font-black uppercase tracking-wider text-[#7C2D12] bg-orange-100 px-2.5 py-1 rounded-md">
                          {item.phase}
                        </span>
                        <h5 className="font-bold text-slate-900 mt-3 text-base">
                          {item.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modules Covered */}
                <div className="border-t border-slate-200 pt-8">
                  <h4 className="text-xl font-bold text-[#0B1220] mb-4">
                    Key Modules Covered
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCourse.modules.map((mod, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-xl"
                      >
                        <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-sm font-semibold text-slate-800">
                          {mod}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing, Inclusions and Action CTA */}
                <div className="border-t border-slate-200 pt-8 bg-slate-50 -mx-8 -mb-10 p-8 sm:p-10 rounded-b-3xl">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl sm:text-5xl font-black text-[#0B1220]">
                          ₹{selectedDuration.basePrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-lg line-through text-slate-400">
                          ₹{selectedDuration.originalPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                          Save 50%
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">
                        Flexible EMI Options:{" "}
                        <span className="font-bold text-[#7C2D12]">
                          {selectedDuration.emiStartsAt}
                        </span>
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        *Inclusive of all GST, live labs, code reviews, and lifetime access to study materials.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                      <button
                        onClick={() => setShowCounselorModal(true)}
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border-2 border-slate-300 font-bold px-6 py-4 rounded-2xl transition shadow-sm"
                      >
                        <FaPhoneAlt className="text-xs" /> Talk to Counselor
                      </button>

                      <button
                        onClick={() => {
                          navigate("/courses", {
                            state: {
                              preselectedCategory: "Skilling",
                              courseTitle: selectedCourse.title,
                              domain: selectedDomain.title,
                              duration: selectedDuration.duration,
                              price: selectedDuration.basePrice,
                            },
                          });
                        }}
                        className="inline-flex items-center justify-center gap-2 bg-[#7C2D12] hover:bg-[#60230e] text-white font-bold px-8 py-4 rounded-2xl transition shadow-xl text-lg hover:scale-105"
                      >
                        Enroll Now <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==========================================
            HIRING PARTNERS STRIP (PRODUCTION PROOF)
        ========================================== */}
        <section className="mt-16 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7C2D12]">
              Placement & Career Network
            </span>
            <h3 className="text-2xl font-black text-[#0B1220] mt-1">
              Top Companies Hiring Our Skilling Graduates
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center items-center font-bold text-slate-600">
            {["TCS", "Infosys", "Wipro", "HCL Tech", "Cognizant", "Tech Mahindra", "Amazon", "Microsoft", "Swiggy", "Zomato", "Jio", "Paytm"].map((company, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#D4A017] hover:text-[#0B1220] transition cursor-default"
              >
                {company}
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            WHY CHOOSE DIZITAL ADDA SKILLING
        ========================================== */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#7C2D12] flex items-center justify-center mx-auto text-2xl mb-5">
              <FaGraduationCap />
            </div>
            <h4 className="text-xl font-black text-[#0B1220]">
              Govt & Industry Recognized
            </h4>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Curriculum aligned with National Skill Qualification Framework (NSQF) and industry 4.0 tech standards.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#7C2D12] flex items-center justify-center mx-auto text-2xl mb-5">
              <FaBriefcase />
            </div>
            <h4 className="text-xl font-black text-[#0B1220]">
              100% Placement Support
            </h4>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Dedicated placement cell, resume critique, mock interview rounds, and direct hiring drive invitations.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[#7C2D12] flex items-center justify-center mx-auto text-2xl mb-5">
              <FaStar />
            </div>
            <h4 className="text-xl font-black text-[#0B1220]">
              1:1 Mentor Guidance
            </h4>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Direct weekly code reviews and project consultations with senior engineers working in tier-1 tech firms.
            </p>
          </div>
        </section>
      </main>

      {/* ==========================================
          FREE CAREER COUNSELOR MODAL
      ========================================== */}
      {showCounselorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl relative border-2 border-[#D4A017]">
            <button
              onClick={() => setShowCounselorModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-xl"
            >
              ✕
            </button>

            {counselorSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto mb-4">
                  <FaCheckCircle />
                </div>
                <h4 className="text-2xl font-black text-slate-900">
                  Request Received!
                </h4>
                <p className="text-slate-600 text-sm mt-2">
                  Our Senior Career Counselor will contact you within 2 hours to guide your program selection.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCounselorSubmit}>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#7C2D12] flex items-center justify-center mx-auto text-xl mb-3">
                    <FaPhoneAlt />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">
                    Book Free Career Counseling
                  </h4>
                  <p className="text-slate-500 text-xs mt-1">
                    Get custom guidance on{" "}
                    {selectedCourse ? selectedCourse.title : "Tech Careers"}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={counselorForm.name}
                      onChange={(e) =>
                        setCounselorForm({ ...counselorForm, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7C2D12] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={counselorForm.phone}
                      onChange={(e) =>
                        setCounselorForm({ ...counselorForm, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7C2D12] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      value={counselorForm.email}
                      onChange={(e) =>
                        setCounselorForm({ ...counselorForm, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#7C2D12] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#7C2D12] hover:bg-[#60230e] text-white font-bold py-3.5 rounded-xl transition shadow-lg mt-2 text-sm"
                  >
                    Request Free Callback
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Skilling;