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
// DURATION DEFINITIONS (3, 4, 6, 12 MONTHS)
// ==========================================
const DURATION_OPTIONS = [
  {
    id: "3-months",
    duration: "3 Months",
    name: "Beginner Level Track",
    badge: "Beginner",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    popular: false,
    tagline: "Master foundational concepts, core practical tools & build real working prototypes quickly.",
    idealFor: "Students & Career Starters",
    hoursPerWeek: "8 - 10 Hours / Week",
    liveHours: "60+ Hours Live Sessions",
    projects: "Guided & Mini Projects",
    mentorship: "Group Learning & Weekly Q&A",
    placementSupport: "Resume Review & Dizital Adda Job Board Access",
    certification: "Completion Certificate",
    basePrice: 9999,
    originalPrice: 19999,
    emiStartsAt: "₹3,499/mo",
    features: [
      "Live interactive evening & weekend batches",
      "Hands-on project repository access",
      "Official course completion certificate",
      "Community discussion forum & discord access",
      "Official LMS lifetime study notes & recordings",
      "Self-paced assignments & automated feedback",
    ],
    roadmap: [
      { phase: "Month 1", title: "Core Fundamentals & Tooling Setup", desc: "Environment setup, fundamental theory, syntax, and essential tools." },
      { phase: "Month 2", title: "Applied Frameworks & Mini Projects", desc: "Hands-on implementation of core concepts, libraries, and real exercises." },
      { phase: "Month 3", title: "Final Guided Capstone & Portfolio", desc: "Building a working portfolio project with mentor feedback." },
    ],
  },
  {
    id: "4-months",
    duration: "4 Months",
    name: "Professional Level Track",
    badge: "Professional",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    popular: false,
    tagline: "Focused professional track with weekly mentorship, focused modules, and mini projects.",
    idealFor: "Working Professionals & Quick Learners",
    hoursPerWeek: "10 - 12 Hours / Week",
    liveHours: "90+ Hours Live Sessions",
    projects: "Mini Projects & Real Exercises",
    mentorship: "Weekly Mentorship",
    placementSupport: "Placement Portal Access & Resume Review",
    certification: "Digital Certificate",
    basePrice: 14999,
    originalPrice: 27999,
    emiStartsAt: "₹3,750/mo",
    features: [
      "Everything in the 3 Months track",
      "90+ Hours live interactive classes with working professionals",
      "Mini projects & real-world scenario assignments",
      "Weekly dedicated mentorship sessions",
      "Resume enhancement & LinkedIn profile optimization",
      "Direct job updates from our hiring partner network",
    ],
    roadmap: [
      { phase: "Month 1", title: "Core Concepts & Essential Skills", desc: "Foundational mastery, industry best practices, and standard tooling." },
      { phase: "Month 2", title: "Applied Specialization & Workflows", desc: "Executing real workflows, campaign and system setups." },
      { phase: "Month 3", title: "Analytics, Optimization & Mini Projects", desc: "Data-driven performance tuning, A/B tests & mini project reviews." },
      { phase: "Month 4", title: "Capstone Execution & Interview Prep", desc: "Final practical project evaluation and interview question drill." },
    ],
  },
  {
    id: "6-months",
    duration: "6 Months",
    name: "Advanced Level Track",
    badge: "⭐ Most Popular",
    badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
    popular: true,
    tagline: "Comprehensive job-ready curriculum with end-to-end live industry projects and group mentorship.",
    idealFor: "Marketing Professionals & Career Switchers",
    hoursPerWeek: "12 - 15 Hours / Week",
    liveHours: "150+ Hours Live Sessions",
    projects: "Practice Projects + Major Capstone",
    mentorship: "Group Mentorship & 1:1 Code Reviews",
    placementSupport: "Dedicated Placement Support + 5 Mock Technical Interviews",
    certification: "Course Certification + ISO Verification",
    basePrice: 18999,
    originalPrice: 35999,
    emiStartsAt: "₹3,299/mo",
    features: [
      "Everything in the 4 Months track",
      "150+ Hours live interactive classes with senior engineers",
      "Practice projects suitable for recruiter review",
      "Group mentorship & bi-weekly progress tracking",
      "Resume enhancement, LinkedIn optimization & GitHub audit",
      "5 Mock interviews with industry technical leads",
      "Direct referrals to 50+ hiring partner companies",
      "Dizital Adda Verified Professional Credential",
    ],
    roadmap: [
      { phase: "Month 1 - 2", title: "Advanced Architecture & Mechanics", desc: "Deep dive into language mechanics, design patterns, and architecture." },
      { phase: "Month 3 - 4", title: "Production Workflows & Integrations", desc: "Building scalable production systems, data persistence & security." },
      { phase: "Month 5 - 6", title: "Enterprise Capstone & Placement Prep", desc: "Full-scale enterprise project deployment, mock interviews & hiring drives." },
    ],
  },
  {
    id: "12-months",
    duration: "12 Months",
    name: "Expert Level Track",
    badge: "🚀 100% Placement Guarantee",
    badgeColor: "bg-fuchsia-100 text-fuchsia-900 border-fuchsia-300",
    popular: false,
    tagline: "Comprehensive expert mastery with 1-on-1 mentorship, real project portfolio, and guaranteed placement.",
    idealFor: "Future Digital Marketing Leaders & Entrepreneurs",
    hoursPerWeek: "15 - 20 Hours / Week",
    liveHours: "300+ Hours Live Sessions",
    projects: "Real Project Portfolio + 2 Major Capstones",
    mentorship: "1-on-1 Mentorship & Leadership Coaching",
    placementSupport: "100% Placement Guarantee (with formal agreement)",
    certification: "Industry Certification + Internship Letter",
    basePrice: 34999,
    originalPrice: 69999,
    emiStartsAt: "₹3,199/mo",
    features: [
      "Everything in the 6 Months track",
      "300+ Hours intensive live training with industry leads",
      "1-on-1 dedicated mentorship and leadership coaching",
      "Guaranteed 3-Month Paid Internship with partner startups",
      "100% Job Placement Guarantee (or full refund as per terms)",
      "System design, strategy & business leadership masterclass",
      "Direct interview scheduling with top multinational companies",
      "Dual global certification & authorized experience letter",
    ],
    roadmap: [
      { phase: "Month 1 - 3", title: "Comprehensive Foundations & Strategy", desc: "Deep foundational knowledge, strategy development & tool mastery." },
      { phase: "Month 4 - 6", title: "Advanced Execution & High-Budget Ops", desc: "Managing enterprise workflows, complex campaigns & predictive analytics." },
      { phase: "Month 7 - 9", title: "Real Client Projects & Paid Internship", desc: "Working on live client mandates, real budgets & leadership sprints." },
      { phase: "Month 10 - 12", title: "Placement Drives & Guaranteed Offers", desc: "Dedicated placement desk, executive referrals & offer negotiations." },
    ],
  },
];

// ==========================================
// 4 CORE DOMAINS
// ==========================================
const DOMAINS = [
  // 1. Digital Marketing (EXACT FROM USER SCREENSHOTS)
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Beginner, Professional, Advanced & Expert Level Programs",
    icon: <FaChartLine />,
    badge: "High ROI & Demand",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    avgSalary: "₹4.5 - ₹18 LPA",
    description:
      "Industry-accredited Digital Marketing tracks from Beginner (3 Months), Professional (4 Months), Advanced (6 Months), to Expert Level (12 Months) with AI Tools integration.",
    availableDurationIds: ["3-months", "4-months", "6-months", "12-months"],
    coursesByDuration: {
      "3-months": [
        {
          id: "dm-beginners",
          title: "Digital Marketing For Beginners",
          subtitle: "30 Basic Modules • 40+ AI Tools Introduction",
          duration: "3 Months",
          level: "BEGINNER LEVEL",
          levelColor: "border-amber-400 text-amber-700 bg-amber-50",
          checkColor: "text-amber-500",
          modulesCount: "30",
          modulesType: "Basic Modules",
          aiToolsCount: "40+",
          aiToolsType: "AI Tools Introduction",
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "Guided Projects",
          mentorship: "Group Learning",
          certification: "Completion Certificate",
          perfectFor: "Students & Career Starters",
          perfectForBg: "bg-amber-50/80 border-amber-200 text-amber-900",
          featureList: [
            "30 Basic Modules",
            "40+ AI Tools Introduction",
            "Basic SEO Concepts",
            "Digital Marketing Basics",
            "Marketing Fundamentals",
            "Group Learning",
            "Guided Projects",
            "Completion Certificate",
          ],
          modules: [
            "Introduction to Digital Marketing & Internet Ecosystem",
            "Marketing Fundamentals & Consumer Personas",
            "Basic SEO Concepts & Keyword Research Tools",
            "Social Media Marketing Basics (Instagram & Facebook)",
            "40+ AI Productivity Tools for Marketers (ChatGPT, Canva AI)",
            "Guided Capstone: Launching Your First Digital Campaign",
          ],
        },
      ],
      "4-months": [
        {
          id: "dm-professionals",
          title: "Digital Marketing For Professionals",
          subtitle: "40 Focused Modules • 50+ AI Tools Overview",
          duration: "4 Months",
          level: "PROFESSIONAL LEVEL",
          levelColor: "border-emerald-400 text-emerald-700 bg-emerald-50",
          checkColor: "text-emerald-500",
          modulesCount: "40",
          modulesType: "Focused Modules",
          aiToolsCount: "50+",
          aiToolsType: "AI Tools Overview",
          price: 14999,
          originalPrice: 27999,
          emi: "₹3,750/mo",
          projects: "Mini Projects",
          mentorship: "Weekly Mentorship",
          certification: "Digital Certificate",
          perfectFor: "Working Professionals & Quick Learners",
          perfectForBg: "bg-emerald-50/80 border-emerald-200 text-emerald-900",
          featureList: [
            "40 Focused Modules",
            "50+ AI Tools Overview",
            "Essential SEO Skills",
            "Social Media Marketing",
            "Basic Analytics",
            "Weekly Mentorship",
            "Mini Projects",
            "Digital Certificate",
          ],
          modules: [
            "Essential Technical & On-Page SEO Skills",
            "Social Media Marketing & Paid Campaign Foundations",
            "Basic Web Analytics with Google Analytics 4",
            "50+ AI Tools for Copywriting, Graphics & Ad Creatives",
            "Weekly Mentor Q&A, Mini Projects & Client Case Studies",
            "Professional Capstone: End-to-End Business Funnel Setup",
          ],
        },
      ],
      "6-months": [
        {
          id: "dm-advanced",
          title: "Advanced Digital Marketing",
          subtitle: "60 Detailed Modules • 54+ AI Tools Coverage",
          duration: "6 Months",
          level: "ADVANCED LEVEL",
          levelColor: "border-blue-400 text-blue-700 bg-blue-50",
          checkColor: "text-blue-500",
          modulesCount: "60",
          modulesType: "Detailed Modules",
          aiToolsCount: "54+",
          aiToolsType: "AI Tools Coverage",
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "Practice Projects",
          mentorship: "Group Mentorship",
          certification: "Course Certification",
          perfectFor: "Marketing Professionals & Career Switchers",
          perfectForBg: "bg-blue-50/80 border-blue-200 text-blue-900",
          featureList: [
            "60 Detailed Modules",
            "54+ AI Tools Coverage",
            "Comprehensive SEO",
            "Content Strategy",
            "Campaign Management",
            "Group Mentorship",
            "Practice Projects",
            "Course Certification",
          ],
          modules: [
            "Comprehensive SEO & Advanced Keyword Architecture",
            "High-Converting Content Strategy & Editorial Calendars",
            "Full Campaign Management (Google Ads & Meta Ads Manager)",
            "54+ AI Tools for Automation, Bidding & Reporting",
            "Conversion Rate Optimization (CRO) & Funnel Scaling",
            "Practice Projects, Group Mentorship & Course Certification",
          ],
        },
      ],
      "12-months": [
        {
          id: "dm-expert",
          title: "Expert in Digital Marketing",
          subtitle: "70 Comprehensive Modules • 60+ AI Tools Integration",
          duration: "12 Months",
          level: "EXPERT LEVEL",
          levelColor: "border-fuchsia-400 text-fuchsia-700 bg-fuchsia-50",
          checkColor: "text-fuchsia-500",
          modulesCount: "70",
          modulesType: "Comprehensive Modules",
          aiToolsCount: "60+",
          aiToolsType: "AI Tools Integration",
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "Real Project Portfolio",
          mentorship: "1-on-1 Mentorship",
          certification: "Industry Certification",
          perfectFor: "Future Digital Marketing Leaders & Entrepreneurs",
          perfectForBg: "bg-fuchsia-50/80 border-fuchsia-200 text-fuchsia-900",
          featureList: [
            "70 Comprehensive Modules",
            "60+ AI Tools Integration",
            "Advanced SEO & Analytics",
            "Digital Strategy Development",
            "Leadership Training",
            "1-on-1 Mentorship",
            "Real Project Portfolio",
            "Industry Certification",
          ],
          modules: [
            "70 In-Depth Modules Covering Complete Digital Ecosystem",
            "Advanced SEO, Programmatic SEO & Deep Data Analytics",
            "Full Digital Strategy Development & Enterprise Omnichannel Scaling",
            "Leadership Training & Marketing Department Management",
            "60+ Advanced AI Tools Integration for Automated Operations",
            "1-on-1 Senior Mentorship, Real Client Portfolio & Industry Certification",
          ],
        },
      ],
    },
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
    availableDurationIds: ["3-months", "6-months", "12-months"],
    coursesByDuration: {
      "3-months": [
        {
          id: "ds-3m-bi",
          title: "Business Intelligence & Data Analytics with Power BI",
          subtitle: "Power BI, Advanced Excel, DAX & Executive Dashboards",
          duration: "3 Months",
          level: "BEGINNER LEVEL",
          levelColor: "border-amber-400 text-amber-700 bg-amber-50",
          checkColor: "text-amber-500",
          modulesCount: "25",
          modulesType: "Core Modules",
          aiToolsCount: "20+",
          aiToolsType: "AI Tools & Copilot",
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "4 Interactive Dashboards",
          mentorship: "Weekly Group Q&A",
          certification: "Foundation Certificate in BI",
          perfectFor: "Students & Business Analysts",
          perfectForBg: "bg-amber-50/80 border-amber-200 text-amber-900",
          featureList: [
            "25 Core Analytics Modules",
            "20+ AI Tools & Copilot Overview",
            "Excel & Power Query Mastery",
            "Power BI Data Modeling & DAX",
            "Interactive Visual Dashboards",
            "Weekly Group Mentorship",
            "Guided Real-world Projects",
            "Completion Certificate",
          ],
          modules: [
            "Advanced Excel: Pivot Tables, VLOOKUP, XLOOKUP & Power Pivot",
            "Power Query Data Extraction, Transformation & Cleansing",
            "Data Modeling with Star & Snowflake Schemas in Power BI",
            "Advanced DAX Measures, KPI Cards & Time Intelligence",
            "Executive Dashboard Capstone (Sales, HR & Finance)",
          ],
        },
      ],
      "6-months": [
        {
          id: "ds-6m-python",
          title: "Data Science with Python & Machine Learning",
          subtitle: "Python, Pandas, NumPy, Scikit-Learn, Statistics & EDA",
          duration: "6 Months",
          level: "ADVANCED LEVEL",
          levelColor: "border-blue-400 text-blue-700 bg-blue-50",
          checkColor: "text-blue-500",
          modulesCount: "50",
          modulesType: "Detailed Modules",
          aiToolsCount: "40+",
          aiToolsType: "AI Tools & Code Assistants",
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Machine Learning Projects + Capstone",
          mentorship: "Group Mentorship & 1:1 Reviews",
          certification: "Professional Certificate + ISO Verified",
          perfectFor: "Data Aspirants & Career Switchers",
          perfectForBg: "bg-blue-50/80 border-blue-200 text-blue-900",
          featureList: [
            "50 Detailed Modules",
            "40+ AI Tools & Code Assistants",
            "Exploratory Data Analysis (EDA)",
            "Advanced SQL & Python Wrangling",
            "Supervised & Unsupervised ML",
            "Dedicated Mentorship",
            "8 Industry Capstones",
            "Course Certification",
          ],
          modules: [
            "Python Programming Core & Vectorized Math with NumPy",
            "Data Cleansing, Wrangling & Aggregation with Pandas",
            "Statistical Distributions, Hypothesis Testing & A/B Experiments",
            "Supervised Learning: Regression, Classification & Random Forests",
            "Unsupervised Learning: K-Means, PCA & End-to-End Capstone",
          ],
        },
      ],
      "12-months": [
        {
          id: "ds-12m-master",
          title: "Data Science, Big Data & Deep Learning Master Track",
          subtitle: "PySpark, Databricks, Deep Learning, TensorFlow & NLP",
          duration: "12 Months",
          level: "EXPERT LEVEL",
          levelColor: "border-fuchsia-400 text-fuchsia-700 bg-fuchsia-50",
          checkColor: "text-fuchsia-500",
          modulesCount: "70",
          modulesType: "Comprehensive Modules",
          aiToolsCount: "60+",
          aiToolsType: "AI Tools & LLM Ops",
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Production & Big Data Projects",
          mentorship: "1-on-1 Mentorship & Internship",
          certification: "Dual Global Certificate + Internship Letter",
          perfectFor: "Future Data Leaders & Enterprise Engineers",
          perfectForBg: "bg-fuchsia-50/80 border-fuchsia-200 text-fuchsia-900",
          featureList: [
            "70 Comprehensive Modules",
            "60+ AI & LLM Tools Integration",
            "Distributed Big Data with Apache Spark",
            "Deep Learning with PyTorch & TensorFlow",
            "Paid 3-Month Internship Guarantee",
            "1-on-1 Senior Mentorship",
            "100% Placement Guarantee",
            "Dual Global Certification",
          ],
          modules: [
            "Advanced Python, Algorithms & Data Structures for Data Science",
            "Distributed Computing with Apache Spark, RDDs & PySpark SQL",
            "Data Pipeline Orchestration with Apache Airflow & Delta Lake",
            "Deep Neural Networks with TensorFlow & PyTorch",
            "Enterprise Capstone: Real-time Big Data Pipeline & Placement Drives",
          ],
        },
      ],
    },
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
    availableDurationIds: ["3-months", "6-months", "12-months"],
    coursesByDuration: {
      "3-months": [
        {
          id: "cs-3m-found",
          title: "Cyber Security & Ethical Hacking Fundamentals",
          subtitle: "Kali Linux, Network Protocols, Scanning & Vulnerability Tools",
          duration: "3 Months",
          level: "BEGINNER LEVEL",
          levelColor: "border-amber-400 text-amber-700 bg-amber-50",
          checkColor: "text-amber-500",
          modulesCount: "25",
          modulesType: "Basic Modules",
          aiToolsCount: "25+",
          aiToolsType: "AI Security Tools",
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "3 Virtual Lab Exploits",
          mentorship: "Group Learning",
          certification: "Completion Certificate",
          perfectFor: "Students & IT Beginners",
          perfectForBg: "bg-amber-50/80 border-amber-200 text-amber-900",
          featureList: [
            "25 Basic Security Modules",
            "25+ AI Security Tools Introduction",
            "Kali Linux & Bash Scripting",
            "Network Scanning with Nmap",
            "Packet Analysis with Wireshark",
            "Group Mentorship",
            "Guided Virtual Lab Projects",
            "Completion Certificate",
          ],
          modules: [
            "Introduction to Cyber Security & Ethical Frameworks",
            "Linux Fundamentals & Command Line Security Tools",
            "Networking Essentials (TCP/IP, DNS, Subnetting & Ports)",
            "Network Scanning & Reconnaissance with Nmap & Wireshark",
            "Lab Capstone: Vulnerability Assessment of a Virtual Target",
          ],
        },
      ],
      "6-months": [
        {
          id: "cs-6m-ceh",
          title: "Certified Ethical Hacker (CEH) & Penetration Testing",
          subtitle: "Metasploit, Burp Suite, Web App Pentesting & Privilege Escalation",
          duration: "6 Months",
          level: "ADVANCED LEVEL",
          levelColor: "border-blue-400 text-blue-700 bg-blue-50",
          checkColor: "text-blue-500",
          modulesCount: "55",
          modulesType: "Detailed Modules",
          aiToolsCount: "45+",
          aiToolsType: "AI Exploitation & Defense Tools",
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Simulated Penetration Tests",
          mentorship: "Group Mentorship & 1:1 Labs",
          certification: "Professional Certificate + ISO Verified",
          perfectFor: "Security Analysts & IT Professionals",
          perfectForBg: "bg-blue-50/80 border-blue-200 text-blue-900",
          featureList: [
            "55 Detailed Modules",
            "45+ AI Pentesting & Defense Tools",
            "OWASP Top 10 Web Exploitation",
            "System Takeovers with Metasploit",
            "Privilege Escalation on Win/Linux",
            "Dedicated Mentor Guidance",
            "Simulated Pen Test Reports",
            "Course Certification",
          ],
          modules: [
            "Ethical Hacking Methodologies & Attack Lifecycles",
            "Vulnerability Scanning & Exploitation with Metasploit",
            "Web Application Pentesting (OWASP Top 10 Vulnerabilities)",
            "Privilege Escalation on Windows & Linux Systems",
            "Full Pentest Capstone: Target Takeover & Executive Report",
          ],
        },
      ],
      "12-months": [
        {
          id: "cs-12m-master",
          title: "Advanced Cyber Security Specialist & Chief Information Security Track",
          subtitle: "Red & Blue Team Operations, Cloud Security, Forensics & Malware Analysis",
          duration: "12 Months",
          level: "EXPERT LEVEL",
          levelColor: "border-fuchsia-400 text-fuchsia-700 bg-fuchsia-50",
          checkColor: "text-fuchsia-500",
          modulesCount: "70",
          modulesType: "Comprehensive Modules",
          aiToolsCount: "60+",
          aiToolsType: "AI Threat Hunting & SOC Tools",
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Enterprise Cyber Labs",
          mentorship: "1-on-1 Mentorship & Internship",
          certification: "Dual Global Certificate + Internship Letter",
          perfectFor: "Future CISOs & Cyber Defense Leaders",
          perfectForBg: "bg-fuchsia-50/80 border-fuchsia-200 text-fuchsia-900",
          featureList: [
            "70 Comprehensive Modules",
            "60+ AI & SIEM Tools Integration",
            "Red & Blue Team Live Simulations",
            "Cloud Security (AWS/Azure) & Forensics",
            "Paid 3-Month Internship Guarantee",
            "1-on-1 Senior Mentorship",
            "100% Placement Guarantee",
            "Industry Certification",
          ],
          modules: [
            "Advanced Red Teaming & Active Directory Exploitation",
            "Cloud Security Architecture (AWS IAM, GuardDuty, KMS)",
            "Digital Forensics Acquisition & Reverse Engineering Basics",
            "Security Compliance (ISO 27001, SOC2, GDPR) & Governance",
            "Enterprise Defense Capstone & Multi-Stage Red Team Exercise",
          ],
        },
      ],
    },
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
    availableDurationIds: ["3-months", "6-months", "12-months"],
    coursesByDuration: {
      "3-months": [
        {
          id: "ai-3m-prompt",
          title: "Generative AI & Prompt Engineering for Professionals",
          subtitle: "ChatGPT, Claude 3.5, Midjourney, Advanced Prompting & Workflows",
          duration: "3 Months",
          level: "BEGINNER LEVEL",
          levelColor: "border-amber-400 text-amber-700 bg-amber-50",
          checkColor: "text-amber-500",
          modulesCount: "30",
          modulesType: "Core Modules",
          aiToolsCount: "50+",
          aiToolsType: "AI Tools Overview",
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "4 Real AI Workflow Deployments",
          mentorship: "Group Learning",
          certification: "Completion Certificate",
          perfectFor: "Students, Creators & Knowledge Workers",
          perfectForBg: "bg-amber-50/80 border-amber-200 text-amber-900",
          featureList: [
            "30 Core AI Modules",
            "50+ AI Tools Overview & Hands-on",
            "Chain-of-Thought & Role Prompting",
            "AI Image & Video Generation",
            "Workplace Workflow Automation",
            "Group Mentorship",
            "Guided AI Projects",
            "Completion Certificate",
          ],
          modules: [
            "Foundations of Large Language Models & Prompt Engineering",
            "Advanced Prompting Techniques (CoT, ReAct, Tree-of-Thought)",
            "AI Image & Media Generation with Midjourney & Runway",
            "Workflow Automation: Summaries, Coding & Data Extraction",
            "AI Capstone: Building a Complete Business Workflow Solution",
          ],
        },
      ],
      "6-months": [
        {
          id: "ai-6m-agents",
          title: "Autonomous AI Agents & Multi-Agent Teams",
          subtitle: "CrewAI, AutoGen, Model Context Protocol (MCP) & LangGraph",
          duration: "6 Months",
          level: "ADVANCED LEVEL",
          levelColor: "border-blue-400 text-blue-700 bg-blue-50",
          checkColor: "text-blue-500",
          modulesCount: "55",
          modulesType: "Detailed Modules",
          aiToolsCount: "60+",
          aiToolsType: "AI Agent & Framework Coverage",
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Multi-Agent Production Systems",
          mentorship: "Group Mentorship & 1:1 Reviews",
          certification: "Professional Certificate + ISO Verified",
          perfectFor: "Developers, Engineers & Tech Innovators",
          perfectForBg: "bg-blue-50/80 border-blue-200 text-blue-900",
          featureList: [
            "55 Detailed Modules",
            "60+ AI Frameworks & Tools",
            "CrewAI Multi-Agent Teams",
            "LangGraph Workflows & State",
            "Model Context Protocol (MCP)",
            "Dedicated Mentorship",
            "Production Agent Deployments",
            "Course Certification",
          ],
          modules: [
            "Agentic Workflows vs Traditional Single-Prompt Queries",
            "CrewAI Multi-Agent Teams, Role Playing & Task Delegation",
            "LangGraph State Machines, Cycles & Human-in-the-Loop",
            "Model Context Protocol (MCP) Server & Tool Development",
            "Enterprise Agent Capstone: Automated Software Testing Squad",
          ],
        },
      ],
      "12-months": [
        {
          id: "ai-12m-finetune",
          title: "Generative AI Engineer & Foundation Model Fine-Tuning Masterclass",
          subtitle: "Llama 3, Mistral, Hugging Face, LoRA/QLoRA, PyTorch & vLLM",
          duration: "12 Months",
          level: "EXPERT LEVEL",
          levelColor: "border-fuchsia-400 text-fuchsia-700 bg-fuchsia-50",
          checkColor: "text-fuchsia-500",
          modulesCount: "70",
          modulesType: "Comprehensive Modules",
          aiToolsCount: "75+",
          aiToolsType: "AI Tools & Infrastructure",
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Enterprise AI Models & Systems",
          mentorship: "1-on-1 Mentorship & Internship",
          certification: "Dual Global Certificate + Internship Letter",
          perfectFor: "Future AI Engineers & Startup Founders",
          perfectForBg: "bg-fuchsia-50/80 border-fuchsia-200 text-fuchsia-900",
          featureList: [
            "70 Comprehensive Modules",
            "75+ AI & LLM Tools Integration",
            "Fine-Tuning Open Source LLMs (LoRA/QLoRA)",
            "High-Throughput Model Serving with vLLM",
            "Paid 3-Month Internship Guarantee",
            "1-on-1 Senior Mentorship",
            "100% Placement Guarantee",
            "Industry Certification",
          ],
          modules: [
            "Transformer Architecture Deep Dive & Tokenization Mechanics",
            "Data Pipeline Engineering for Model Pre-training & Fine-Tuning",
            "PEFT Techniques: LoRA, QLoRA & DPO (Direct Preference Optimization)",
            "High-Throughput Inference Serving with vLLM, TensorRT & Docker",
            "Enterprise Capstone: Custom Domain-Specific LLM Deployment",
          ],
        },
      ],
    },
  },
];

// ==========================================
// MAIN SKILLING COMPONENT
// ==========================================
function Skilling() {
  const navigate = useNavigate();

  // Multi-step State Flow:
  // Step 1: Select Domain
  // Step 2: Select Duration / Months
  // Step 3: View & Select Specific Course Card
  // Step 4: Final Master Course Card & Enrollment Overview
  const [step, setStep] = useState(1);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Counselor Modal State
  const [showCounselorModal, setShowCounselorModal] = useState(false);
  const [counselorSubmitted, setCounselorSubmitted] = useState(false);
  const [counselorForm, setCounselorForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Step 1: Select Domain -> Advance to Duration Selection (Step 2)
  const handleDomainSelect = (domain) => {
    setSelectedDomain(domain);
    setSelectedDuration(null);
    setSelectedCourse(null);
    setStep(2);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Step 2: Select Duration -> Advance to Course Selection (Step 3)
  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
    setSelectedCourse(null);
    setStep(3);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Step 3: Select Course -> Advance to Final Details (Step 4)
  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setStep(4);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Reset Flow
  const handleReset = () => {
    setStep(1);
    setSelectedDomain(null);
    setSelectedDuration(null);
    setSelectedCourse(null);
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

  // Get available durations for the selected domain
  const availableDurations = selectedDomain
    ? DURATION_OPTIONS.filter((d) =>
        selectedDomain.availableDurationIds.includes(d.id)
      )
    : [];

  // Get current courses for selected domain and duration
  const currentCourses =
    selectedDomain && selectedDuration
      ? selectedDomain.coursesByDuration[selectedDuration.id] || []
      : [];

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
            Select your technology domain, choose your duration track (3, 4, 6, or 12 Months),
            and launch your career with verified certifications, live projects, and 100% placement assistance.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-800">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">4</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Core Tech Domains</p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">3, 4, 6, 12 M</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Flexible Durations</p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">60+ AI Tools</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">AI Integrated Learning</p>
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
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-slate-200 w-full z-0"></div>
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#7C2D12] transition-all duration-500 z-0"
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          ></div>

          {/* Stepper Items */}
          {[
            { num: 1, label: "1. Select Domain" },
            { num: 2, label: "2. Pick Duration" },
            { num: 3, label: "3. Choose Course" },
            { num: 4, label: "4. Program Details" },
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

            {selectedDuration && (
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
                  {selectedDuration.duration} Track
                </span>
              </>
            )}

            {selectedCourse && (
              <>
                <FaChevronRight className="text-xs text-slate-400" />
                <span className="font-bold text-[#7C2D12]">
                  {selectedCourse.title}
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
                Select from our 4 specialized industry domains to see available duration programs.
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
                      {domain.availableDurationIds.length} Duration Tracks Available
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
                      Select Domain <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==========================================
            STEP 2: SELECT DURATION / MONTHS
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
                Step 2: Choose Your Duration Track
              </h3>
              <p className="text-slate-600 mt-1">
                Select your preferred duration track under {selectedDomain.title}.
              </p>
            </div>

            {/* Durations Comparison Grid */}
            <div className={`grid grid-cols-1 gap-6 ${
              availableDurations.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "lg:grid-cols-3"
            }`}>
              {availableDurations.map((tier) => {
                const coursePreview = selectedDomain.coursesByDuration[tier.id]?.[0];

                return (
                  <div
                    key={tier.id}
                    className={`bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border-2 ${
                      tier.popular
                        ? "border-[#D4A017] shadow-2xl ring-2 ring-amber-300/60 lg:-translate-y-2"
                        : "border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300"
                    }`}
                  >
                    {/* Floating Ribbon */}
                    {tier.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-[#D4A017] text-[#0B1220] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {tier.badge}
                      </div>
                    )}

                    <div>
                      {/* Top Info */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-bold border ${tier.badgeColor}`}
                        >
                          {tier.duration} Track
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          {tier.hoursPerWeek}
                        </span>
                      </div>

                      <h4 className="text-2xl font-black text-[#0B1220]">
                        {tier.duration}
                      </h4>
                      <p className="text-sm font-bold text-[#7C2D12] mt-0.5">
                        {coursePreview ? coursePreview.title : tier.name}
                      </p>

                      {coursePreview && (
                        <div className="mt-3 inline-block bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-lg">
                          {coursePreview.modulesCount} {coursePreview.modulesType} • {coursePreview.aiToolsCount} {coursePreview.aiToolsType}
                        </div>
                      )}

                      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                        {tier.tagline}
                      </p>

                      {/* Price & EMI */}
                      <div className="mt-5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-[#0B1220]">
                            ₹{tier.basePrice.toLocaleString("en-IN")}
                          </span>
                          <span className="text-xs line-through text-slate-400">
                            ₹{tier.originalPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-emerald-700 mt-1">
                          EMI from {tier.emiStartsAt}
                        </p>
                      </div>

                      {/* Key Metrics */}
                      <div className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700">
                        <div className="flex items-center gap-2">
                          <FaBriefcase className="text-[#7C2D12] flex-shrink-0" />
                          <span>{tier.projects}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaGraduationCap className="text-[#7C2D12] flex-shrink-0" />
                          <span>{tier.certification}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => handleDurationSelect(tier)}
                        className={`w-full py-3 rounded-2xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                          tier.popular
                            ? "bg-[#7C2D12] hover:bg-[#60230e] text-white ring-2 ring-orange-300"
                            : "bg-[#0B1220] hover:bg-[#1E293B] text-white"
                        }`}
                      >
                        Select {tier.duration} <FaArrowRight className="text-xs" />
                      </button>
                    </div>
                  </div>
                );
              })}
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
            STEP 3: CHOOSE COURSE (MATCHING SCREENSHOTS)
        ========================================== */}
        {step === 3 && selectedDomain && selectedDuration && (
          <div>
            {/* Filter Summary Banner */}
            <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 mb-10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    {selectedDomain.title}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {selectedDuration.duration} ({selectedDuration.name})
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1220]">
                  Step 3: Program Cards & Curriculum
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Detailed curriculum, AI tools, and modules for the selected {selectedDuration.duration} track.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#7C2D12] bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition"
                >
                  <FaUndo className="text-xs" /> Change Domain
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-[#7C2D12] bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition"
                >
                  <FaUndo className="text-xs" /> Change Duration
                </button>
              </div>
            </div>

            {/* Courses Grid - Faithfully styled according to user screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {currentCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleCourseSelect(course)}
                  className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-200 hover:border-[#7C2D12] shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Level Pill Tag */}
                    <div className="mb-4">
                      <span
                        className={`inline-block text-xs font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider ${course.levelColor}`}
                      >
                        {course.level}
                      </span>
                    </div>

                    {/* Course Title */}
                    <h4 className="text-2xl sm:text-3xl font-black text-[#0B1220] group-hover:text-[#7C2D12] transition-colors leading-snug">
                      {course.title}
                    </h4>

                    {/* Duration with Clock Icon */}
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mt-2">
                      <FaClock className="text-slate-400 text-xs" />
                      <span>{course.duration}</span>
                    </div>

                    <div className="w-full h-px bg-slate-100 my-6"></div>

                    {/* Feature Bullets (Exactly matching the uploaded screenshots) */}
                    <div className="space-y-3.5">
                      {/* 1. Modules Count Highlight */}
                      <div className="flex items-start gap-3 text-slate-800 font-medium">
                        <span className={`mt-1 flex-shrink-0 text-sm ${course.checkColor}`}>
                          ✓
                        </span>
                        <span>
                          <strong className="text-lg font-black text-slate-900 mr-1.5">
                            {course.modulesCount}
                          </strong>
                          {course.modulesType}
                        </span>
                      </div>

                      {/* 2. AI Tools Highlight */}
                      <div className="flex items-start gap-3 text-slate-800 font-medium">
                        <span className={`mt-1 flex-shrink-0 text-sm ${course.checkColor}`}>
                          ✓
                        </span>
                        <span>
                          <strong className="text-lg font-black text-slate-900 mr-1.5">
                            {course.aiToolsCount}
                          </strong>
                          {course.aiToolsType}
                        </span>
                      </div>

                      {/* Remaining Bullet Points from screenshot */}
                      {course.featureList.slice(2).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-slate-700 text-sm font-medium"
                        >
                          <span className={`mt-0.5 flex-shrink-0 text-sm ${course.checkColor}`}>
                            ✓
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* PERFECT FOR: Box (from Image 2) */}
                    <div
                      className={`mt-8 p-4 rounded-2xl border text-xs sm:text-sm font-medium leading-relaxed ${course.perfectForBg}`}
                    >
                      <span className="block font-black uppercase tracking-widest text-[11px] mb-1 opacity-80">
                        PERFECT FOR:
                      </span>
                      <span className="font-bold text-slate-900 text-sm">
                        {course.perfectFor}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-[#0B1220]">
                        ₹{course.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-slate-400 line-through ml-2">
                        ₹{course.originalPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="block text-xs font-semibold text-emerald-700 mt-0.5">
                        EMI from {course.emi}
                      </span>
                    </div>

                    <button className="inline-flex items-center gap-2 bg-[#0B1220] group-hover:bg-[#7C2D12] text-white text-sm font-bold px-5 py-3 rounded-xl transition-colors shadow-sm">
                      Select Course <FaArrowRight className="text-xs" />
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
                <FaArrowLeft /> Back to Duration Selection
              </button>
            </div>
          </div>
        )}

        {/* ==========================================
            STEP 4: FINAL PROGRAM CARD & ENROLLMENT
        ========================================== */}
        {step === 4 && selectedDomain && selectedDuration && selectedCourse && (
          <div>
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Course Selected Successfully
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1220] mt-3">
                Your Customized Skilling Program
              </h2>
              <p className="text-slate-600 mt-1">
                Review your {selectedCourse.title} program overview, modules, and enrollment options.
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
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-bold tracking-widest text-[#D4A017]">
                          {selectedDomain.title}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-bold border ${selectedCourse.levelColor}`}>
                          {selectedCourse.level}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-black text-white mt-1">
                        {selectedCourse.title}
                      </h3>
                      <p className="text-sm sm:text-base text-orange-200 mt-1 font-medium">
                        {selectedCourse.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center sm:text-right">
                    <span className="text-xs text-slate-300 block font-medium">
                      Duration Track
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#D4A017]">
                      {selectedCourse.duration}
                    </span>
                    <span className="text-xs text-slate-300 block mt-0.5">
                      Batch starts Next Monday
                    </span>
                  </div>
                </div>

                {/* Quick Navigation / Change Buttons */}
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
                    Change Duration ({selectedCourse.duration})
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-white/10 hover:bg-white/20 text-slate-200 px-3 py-1.5 rounded-lg transition"
                  >
                    Change Course
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
                    <p className="text-xs text-slate-500 font-semibold">Total Modules</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedCourse.modulesCount} {selectedCourse.modulesType}
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <FaBriefcase className="text-2xl text-[#7C2D12] mb-2" />
                    <p className="text-xs text-slate-500 font-semibold">AI Tools</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedCourse.aiToolsCount} {selectedCourse.aiToolsType}
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <FaAward className="text-2xl text-[#7C2D12] mb-2" />
                    <p className="text-xs text-slate-500 font-semibold">Certification</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedCourse.certification}
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <FaUsers className="text-2xl text-[#7C2D12] mb-2" />
                    <p className="text-xs text-slate-500 font-semibold">Mentorship</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedCourse.mentorship}
                    </p>
                  </div>
                </div>

                {/* Perfect For Banner */}
                <div className={`p-5 rounded-2xl border ${selectedCourse.perfectForBg}`}>
                  <span className="block text-xs font-black uppercase tracking-wider mb-1">
                    TARGET AUDIENCE / PERFECT FOR:
                  </span>
                  <p className="text-base font-bold text-slate-900">
                    {selectedCourse.perfectFor}
                  </p>
                </div>

                {/* What's Covered List */}
                <div className="border-t border-slate-200 pt-8">
                  <h4 className="text-xl font-bold text-[#0B1220] mb-4 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#7C2D12]" />
                    <span>Included in this Program</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedCourse.featureList.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3.5 bg-slate-50 border border-slate-200 rounded-xl"
                      >
                        <FaCheckCircle className={`text-sm ${selectedCourse.checkColor}`} />
                        <span className="text-sm font-semibold text-slate-800">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modules Covered Preview */}
                <div className="border-t border-slate-200 pt-8">
                  <h4 className="text-xl font-bold text-[#0B1220] mb-2">
                    Curriculum Modules Overview
                  </h4>
                  <p className="text-sm text-slate-500 mb-4">
                    Complete syllabus modules designed by industry experts with hands-on exercises.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCourse.modules.map((mod, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs"
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
                          ₹{selectedCourse.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-lg line-through text-slate-400">
                          ₹{selectedCourse.originalPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                          Save 50%
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mt-1 font-medium">
                        Flexible EMI Options:{" "}
                        <span className="font-bold text-[#7C2D12]">
                          Starting at {selectedCourse.emi}
                        </span>
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        *Inclusive of all GST, live training, projects review, and official certification.
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
                              duration: selectedCourse.duration,
                              price: selectedCourse.price,
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
              Direct weekly reviews and project consultations with senior practitioners working in top organizations.
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
                    {selectedCourse ? selectedCourse.title : "Digital Marketing"}
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