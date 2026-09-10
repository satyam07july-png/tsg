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
// DURATION DEFINITIONS
// ==========================================
const DURATION_OPTIONS = [
  {
    id: "3-months",
    duration: "3 Months",
    name: "Foundation / Fast-Track",
    badge: "Fast-Track",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    popular: false,
    tagline: "Master foundational concepts, core practical tools & build real working prototypes quickly.",
    idealFor: "College students, fast upskilling, and beginners",
    hoursPerWeek: "8 - 10 Hours / Week",
    liveHours: "60+ Hours Live Sessions",
    projects: "3 Real-World Projects",
    mentorship: "Weekly Group Q&A & Code Reviews",
    placementSupport: "Resume Review & Dizital Adda Job Board Access",
    certification: "Verified Foundation Certificate",
    basePrice: 9999,
    originalPrice: 19999,
    emiStartsAt: "₹3,499/mo",
    features: [
      "Live interactive evening & weekend batches",
      "Hands-on project repository access",
      "Verified course completion certificate",
      "Community discussion forum & discord access",
      "Official LMS lifetime study notes & recordings",
      "Self-paced assignments & automated code feedback",
    ],
    roadmap: [
      { phase: "Month 1", title: "Core Fundamentals & Tooling Setup", desc: "Environment setup, fundamental theory, syntax, and essential tools." },
      { phase: "Month 2", title: "Applied Frameworks & Mini Projects", desc: "Hands-on implementation of core libraries, APIs, and real exercises." },
      { phase: "Month 3", title: "Final Capstone & Portfolio Deployment", desc: "Building an end-to-end working product and portfolio review." },
    ],
  },
  {
    id: "6-months",
    duration: "6 Months",
    name: "Professional Career Track",
    badge: "⭐ Most Popular",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    popular: true,
    tagline: "Comprehensive job-ready curriculum with end-to-end live industry projects and mock interviews.",
    idealFor: "Job seekers, career switchers, and serious tech aspirants",
    hoursPerWeek: "12 - 15 Hours / Week",
    liveHours: "150+ Hours Live Sessions",
    projects: "8 Industry Projects + 1 Major Capstone",
    mentorship: "1:1 Dedicated Mentor Reviews & Guidance",
    placementSupport: "Dedicated Placement Support + 5 Mock Technical Interviews",
    certification: "Professional Industry Certificate + ISO Verification",
    basePrice: 18999,
    originalPrice: 35999,
    emiStartsAt: "₹3,299/mo",
    features: [
      "Everything in the 3 Months track",
      "150+ Hours live interactive classes with senior engineers",
      "8 Production-grade projects suitable for recruiter review",
      "Dedicated 1:1 mentorship & bi-weekly progress tracking",
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
    name: "Mastery & Guaranteed Placement Track",
    badge: "🚀 100% Placement Guarantee",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    popular: false,
    tagline: "Zero-to-hero comprehensive mastery with guaranteed paid internship & 100% job placement.",
    idealFor: "Complete career transformation, non-tech to tech transitions",
    hoursPerWeek: "15 - 20 Hours / Week",
    liveHours: "300+ Hours Live Sessions",
    projects: "16+ Enterprise Projects + 2 Major Capstones",
    mentorship: "Unlimited 1:1 Senior Engineering Mentorship",
    placementSupport: "100% Placement Guarantee (with formal job agreement)",
    certification: "Dual Global Certificate + Verified Internship Letter",
    basePrice: 34999,
    originalPrice: 69999,
    emiStartsAt: "₹3,199/mo",
    features: [
      "Everything in the 6 Months track",
      "300+ Hours intensive live training with industry leads",
      "Guaranteed 3-Month Paid Internship with partner startups",
      "100% Job Placement Guarantee (or full refund as per terms)",
      "Unlimited 1-on-1 personalized mentorship sessions",
      "System design, DSA & competitive coding masterclass",
      "Direct interview scheduling with top multinational companies",
      "Dual global certification & authorized experience letter",
    ],
    roadmap: [
      { phase: "Month 1 - 3", title: "Comprehensive Foundations & Problem Solving", desc: "Deep foundational programming, algorithms, data structures & clean design." },
      { phase: "Month 4 - 6", title: "Enterprise Architecture & Specialization", desc: "Building distributed enterprise-grade applications & cloud deployment." },
      { phase: "Month 7 - 9", title: "Paid Live Internship & Team Sprints", desc: "Working on real client codebases, Agile sprints & code reviews." },
      { phase: "Month 10 - 12", title: "Placement Drives & Guaranteed Offers", desc: "Dedicated placement desk, targeted referrals & offer negotiations." },
    ],
  },
];

// ==========================================
// 4 CORE DOMAINS WITH DURATION-SPECIFIC COURSES
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
    coursesByDuration: {
      "3-months": [
        {
          id: "dm-3m-smm",
          title: "Social Media Marketing & Brand Launch",
          subtitle: "Instagram Reels, YouTube Growth, Content Strategy & Canva",
          level: "Beginner",
          techStack: ["Canva", "CapCut", "Meta Business Suite", "Buffer", "YouTube Studio"],
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "3 Live Campaigns",
          liveHours: "60+ Hours Live",
          certification: "Foundation Certificate in SMM",
          highlights: [
            "Build & grow brand channels on Instagram & YouTube",
            "Produce viral short-form videos and high-converting graphics",
            "Community engagement & organic lead generation",
          ],
          modules: [
            "Social Media Algorithms & Content Strategy",
            "High-Impact Visual Design with Canva & CapCut",
            "Scripting Hooks & Short-Form Video Production",
            "Community Building, Influencer Collabs & Growth",
            "Campaign Capstone: 0 to 10K Followers Playbook",
          ],
        },
        {
          id: "dm-3m-seo",
          title: "SEO & Content Marketing Essentials",
          subtitle: "Keyword Research, On-Page SEO, WordPress & AI Content Tools",
          level: "Beginner to Intermediate",
          techStack: ["Semrush", "Google Search Console", "WordPress", "Yoast SEO", "ChatGPT"],
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "3 Live Website Audits",
          liveHours: "60+ Hours Live",
          certification: "Foundation Certificate in SEO",
          highlights: [
            "Rank websites for high-intent business search keywords",
            "Perform comprehensive technical site audits",
            "AI-assisted content creation for organic traffic",
          ],
          modules: [
            "Search Engine Algorithms & Keyword Research Mastery",
            "On-Page SEO, Heading Structures & Schema Markup",
            "Technical SEO Audits & Core Web Vitals Optimization",
            "Backlink Acquisition & Content Marketing Strategies",
            "SEO Capstone: Live Website Organic Traffic Boost",
          ],
        },
      ],
      "6-months": [
        {
          id: "dm-6m-perf",
          title: "Performance Marketing & Paid Ads (Meta + Google)",
          subtitle: "Google Search, Display, Meta Ads Manager, CRO, GA4 & Scaling",
          level: "Intermediate to Pro",
          techStack: ["Meta Ads Manager", "Google Ads", "Google Analytics 4", "Tag Manager", "Canva"],
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Live Budget Projects + Capstone",
          liveHours: "150+ Hours Live",
          certification: "Professional Certificate + ISO Verified",
          highlights: [
            "Manage live advertising budgets with high Return on Ad Spend (ROAS)",
            "Conversion Rate Optimization (CRO) & landing page funnels",
            "Retargeting funnels, Lookalike audiences & custom tracking pixels",
          ],
          modules: [
            "Consumer Psychology, Offer Creation & Funnel Architecture",
            "Google Search, Display & Performance Max Ads Setup",
            "Meta Ads: Creative Testing, CBO/ABO & Budget Scaling",
            "Conversion Tracking, Meta Pixel, CAPI & GA4 Analytics",
            "Agency Client Acquisition & E-Commerce Scaling Capstone",
          ],
        },
        {
          id: "dm-6m-growth",
          title: "Full-Stack Digital Marketing & Growth Specialist",
          subtitle: "End-to-End Performance, Technical SEO, Email & WhatsApp Automation",
          level: "Beginner to Advanced",
          techStack: ["HubSpot", "Meta Ads", "Google Ads", "Semrush", "Zapier", "Mailchimp"],
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 End-to-End Client Projects",
          liveHours: "150+ Hours Live",
          certification: "Professional Certificate + ISO Verified",
          highlights: [
            "Complete mastery over both organic and paid customer acquisition",
            "Automated lead nurturing with HubSpot, Zapier & WhatsApp",
            "Resume, portfolio defense & direct placement referrals",
          ],
          modules: [
            "Strategic Digital Marketing Foundations & Brand Positioning",
            "Advanced Multi-Channel Paid Ads (Google + Meta + LinkedIn)",
            "Technical SEO, Programmatic SEO & Authority Building",
            "Marketing Automation, Drip Campaigns & CRM Integration",
            "Executive Capstone: 360-Degree Brand Scaling Strategy",
          ],
        },
      ],
      "12-months": [
        {
          id: "dm-12m-martech",
          title: "Enterprise Growth Hacking & Marketing Automation Engineering",
          subtitle: "Full-Funnel CRO, MarTech Architecture, CRM Automation & CDPs",
          level: "Advanced to Enterprise",
          techStack: ["HubSpot Enterprise", "Segment CDP", "Klaviyo", "Python for Marketing", "Tableau"],
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Enterprise Projects",
          liveHours: "300+ Hours Live",
          certification: "Dual Global Certificate + Internship Letter",
          highlights: [
            "Architect large-scale enterprise customer data pipelines (CDP)",
            "Predictive analytics & Python scripts for marketing automation",
            "Guaranteed 3-Month paid internship & 100% placement agreement",
          ],
          modules: [
            "Full-Funnel Growth Engineering & Behavioral Segmentation",
            "Customer Data Platforms (CDP) & Real-time Event Tracking",
            "Omnichannel Automation (Email, WhatsApp, Push & SMS)",
            "Marketing Data Analysis with SQL & Python Automation",
            "Enterprise Growth Engine Capstone & Hiring Drives",
          ],
        },
        {
          id: "dm-12m-cmo",
          title: "Chief Marketing Officer (CMO) Master Track & Agency Accelerator",
          subtitle: "Brand Leadership, Paid Media Portfolio Management & Agency Operations",
          level: "Comprehensive Mastery",
          techStack: ["Google 360", "Meta Business Partner", "Salesforce CRM", "Looker", "Jira"],
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Enterprise Projects",
          liveHours: "300+ Hours Live",
          certification: "Dual Global Certificate + Internship Letter",
          highlights: [
            "Manage multi-crore advertising budgets and marketing teams",
            "Launch and scale your own digital agency or lead marketing departments",
            "100% job placement guarantee with top multinational brands",
          ],
          modules: [
            "Strategic Marketing Leadership & Budget Allocation Models",
            "Multi-Million Dollar Paid Campaign Scaling & Risk Mitigation",
            "Agency Building: Pitch Decks, Client Retainers & Operations",
            "Omnichannel Brand Equity & Global Market Expansion",
            "Executive Defense: Multi-Brand Growth Engine Portfolio",
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
    coursesByDuration: {
      "3-months": [
        {
          id: "ds-3m-bi",
          title: "Business Intelligence & Data Analytics with Power BI",
          subtitle: "Power BI, Advanced Excel, DAX & Executive Dashboards",
          level: "Beginner to Intermediate",
          techStack: ["Power BI", "Excel", "DAX", "Power Query", "SQL Basics"],
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "4 Interactive Dashboards",
          liveHours: "60+ Hours Live",
          certification: "Foundation Certificate in BI",
          highlights: [
            "Build real-time interactive executive business dashboards",
            "Master Power Query ETL and multi-table data modeling",
            "DAX formulas for sales, finance & customer churn",
          ],
          modules: [
            "Advanced Excel: Pivot Tables, VLOOKUP, XLOOKUP & Power Pivot",
            "Power Query Data Extraction, Transformation & Cleansing",
            "Data Modeling with Star & Snowflake Schemas in Power BI",
            "Advanced DAX Measures, KPI Cards & Time Intelligence",
            "Executive Dashboard Capstone (Sales, HR & Finance)",
          ],
        },
        {
          id: "ds-3m-sql",
          title: "SQL & Relational Database Analytics",
          subtitle: "PostgreSQL, MySQL, Complex Queries, Joins & Reporting",
          level: "Beginner to Intermediate",
          techStack: ["PostgreSQL", "MySQL", "DBeaver", "SQL", "Tableau Basics"],
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "3 Database Case Studies",
          liveHours: "60+ Hours Live",
          certification: "Foundation Certificate in SQL Analytics",
          highlights: [
            "Write complex SQL queries for business analytics",
            "Master Window Functions, Common Table Expressions (CTEs) & Joins",
            "Database normalization, indexing and performance tuning",
          ],
          modules: [
            "Relational Database Architecture & SQL Core Syntax",
            "Multi-table Joins, Unions, Subqueries & Aggregations",
            "Advanced SQL: Window Functions, Partitioning & Ranking",
            "Database Views, Stored Procedures & Triggers",
            "Analytics Capstone: Real-world E-Commerce Database Analysis",
          ],
        },
      ],
      "6-months": [
        {
          id: "ds-6m-python",
          title: "Data Science with Python & Machine Learning",
          subtitle: "Python, Pandas, NumPy, Scikit-Learn, Statistics & EDA",
          level: "Beginner to Advanced",
          techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"],
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Machine Learning Projects + Capstone",
          liveHours: "150+ Hours Live",
          certification: "Professional Certificate + ISO Verified",
          highlights: [
            "Exploratory Data Analysis on million-row production datasets",
            "Supervised & unsupervised machine learning algorithms",
            "Statistical hypothesis testing, A/B testing & model evaluation",
          ],
          modules: [
            "Python Programming Core & Vectorized Math with NumPy",
            "Data Cleansing, Wrangling & Aggregation with Pandas",
            "Statistical Distributions, Hypothesis Testing & A/B Experiments",
            "Supervised Learning: Regression, Classification & Random Forests",
            "Unsupervised Learning: K-Means, PCA & End-to-End Capstone",
          ],
        },
        {
          id: "ds-6m-fullbi",
          title: "Full-Stack Business Intelligence & Data Engineering",
          subtitle: "Power BI, Tableau, Advanced SQL, Python & Cloud Warehousing",
          level: "Intermediate to Pro",
          techStack: ["Power BI", "Tableau", "SQL", "Snowflake", "Python", "Git"],
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Production Dashboards & Pipelines",
          liveHours: "150+ Hours Live",
          certification: "Professional Certificate + ISO Verified",
          highlights: [
            "End-to-end data pipelines from SQL databases to BI dashboards",
            "Cloud data warehouse design with Snowflake & BigQuery",
            "Mock interviews, portfolio showcase & dedicated placement assistance",
          ],
          modules: [
            "Advanced SQL Query Tuning, CTEs & Window Functions",
            "Enterprise Power BI Architecture, Row-Level Security & Gateways",
            "Visual Storyboarding & Interactive Dashboards in Tableau",
            "Cloud Data Warehousing with Snowflake & Dimensional Modeling",
            "Enterprise Analytics Capstone with Live Recruiter Review",
          ],
        },
      ],
      "12-months": [
        {
          id: "ds-12m-master",
          title: "Data Science, Big Data & Deep Learning Master Track",
          subtitle: "PySpark, Databricks, Deep Learning, TensorFlow & NLP",
          level: "Comprehensive Mastery",
          techStack: ["PySpark", "Databricks", "TensorFlow", "PyTorch", "Hadoop", "Airflow"],
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Production & Big Data Projects",
          liveHours: "300+ Hours Live",
          certification: "Dual Global Certificate + Internship Letter",
          highlights: [
            "Process terabyte-scale distributed data with Apache Spark & Databricks",
            "Neural networks, Computer Vision & Natural Language Processing",
            "Guaranteed 3-Month paid internship & 100% placement agreement",
          ],
          modules: [
            "Advanced Python, Algorithms & Data Structures for Data Science",
            "Distributed Computing with Apache Spark, RDDs & PySpark SQL",
            "Data Pipeline Orchestration with Apache Airflow & Delta Lake",
            "Deep Neural Networks with TensorFlow & PyTorch",
            "Enterprise Capstone: Real-time Big Data Pipeline & Placement Drives",
          ],
        },
        {
          id: "ds-12m-aieng",
          title: "AI-Powered Data Engineering & Cloud Lakehouse Architecture",
          subtitle: "Snowflake, dbt, Apache Kafka, AWS Redshift & Docker",
          level: "Advanced to Enterprise",
          techStack: ["Snowflake", "dbt", "Apache Kafka", "Docker", "AWS S3", "Airflow"],
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Production & Big Data Projects",
          liveHours: "300+ Hours Live",
          certification: "Dual Global Certificate + Internship Letter",
          highlights: [
            "Architect modern cloud data platforms with Snowflake, dbt & Kafka",
            "Real-time data streaming & containerized data engineering",
            "100% job placement guarantee with leading data-driven enterprises",
          ],
          modules: [
            "Data Modeling & Schema Optimization for Cloud Warehouses",
            "Data Transformation & Quality Testing with dbt Core",
            "Real-Time Event Streaming with Apache Kafka",
            "Infrastructure Automation & Docker Containers for Data",
            "Lakehouse Capstone: End-to-End Streaming Architecture",
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
    coursesByDuration: {
      "3-months": [
        {
          id: "cs-3m-found",
          title: "Cyber Security & Ethical Hacking Fundamentals",
          subtitle: "Kali Linux, Network Protocols, Scanning & Vulnerability Tools",
          level: "Beginner",
          techStack: ["Kali Linux", "Wireshark", "Nmap", "VirtualBox", "Bash"],
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "3 Virtual Lab Exploits",
          liveHours: "60+ Hours Live",
          certification: "Foundation Certificate in Cyber Security",
          highlights: [
            "Setup ethical hacking lab environment with Kali Linux",
            "Network scanning, packet inspection & reconnaissance",
            "Basic vulnerability identification & remediation",
          ],
          modules: [
            "Introduction to Cyber Security & Ethical Frameworks",
            "Linux Fundamentals & Command Line Security Tools",
            "Networking Essentials (TCP/IP, DNS, Subnetting & Ports)",
            "Network Scanning & Reconnaissance with Nmap & Wireshark",
            "Lab Capstone: Vulnerability Assessment of a Virtual Target",
          ],
        },
        {
          id: "cs-3m-netdef",
          title: "Network Security & System Hardening",
          subtitle: "Firewalls, VPNs, Windows/Linux Hardening & Security Policies",
          level: "Beginner to Intermediate",
          techStack: ["pfSense", "OpenVPN", "Iptables", "Windows Server", "Linux"],
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "3 Network Defence Setups",
          liveHours: "60+ Hours Live",
          certification: "Foundation Certificate in Network Defense",
          highlights: [
            "Configure firewall rules, DMZ & VPN tunnels",
            "Harden operating systems against brute force attacks",
            "Implement enterprise password & access control policies",
          ],
          modules: [
            "Network Security Architecture & Defence in Depth",
            "Firewall Configuration & Traffic Filtering with pfSense",
            "Secure Remote Access with OpenVPN & SSH Keys",
            "Operating System Hardening (Windows & Linux)",
            "Network Defence Capstone: Securing Enterprise Perimeter",
          ],
        },
      ],
      "6-months": [
        {
          id: "cs-6m-ceh",
          title: "Certified Ethical Hacker (CEH) & Penetration Testing",
          subtitle: "Metasploit, Burp Suite, Web App Pentesting & Privilege Escalation",
          level: "Intermediate to Pro",
          techStack: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap", "SQLmap", "Hydra"],
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Simulated Penetration Tests",
          liveHours: "150+ Hours Live",
          certification: "Professional Certificate + ISO Verified",
          highlights: [
            "Simulate full-spectrum black-box and white-box penetration tests",
            "System exploitation, password attacks & privilege escalation",
            "Professional penetration testing documentation & reporting",
          ],
          modules: [
            "Ethical Hacking Methodologies & Attack Lifecycles",
            "Vulnerability Scanning & Exploitation with Metasploit",
            "Web Application Pentesting (OWASP Top 10 Vulnerabilities)",
            "Privilege Escalation on Windows & Linux Systems",
            "Full Pentest Capstone: Target Takeover & Executive Report",
          ],
        },
        {
          id: "cs-6m-soc",
          title: "SOC Analyst & Threat Intelligence (Blue Team)",
          subtitle: "Splunk SIEM, Log Analysis, Incident Response & MITRE ATT&CK",
          level: "Intermediate to Pro",
          techStack: ["Splunk", "Wireshark", "Suricata", "YARA", "MITRE ATT&CK", "Snort"],
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Live Incident Investigation Labs",
          liveHours: "150+ Hours Live",
          certification: "Professional Certificate + ISO Verified",
          highlights: [
            "Real-time security log monitoring & alert triage with Splunk",
            "Threat hunting mapped to the MITRE ATT&CK framework",
            "Incident response playbooks & forensic containment strategies",
          ],
          modules: [
            "Security Operations Center (SOC) Architecture & Roles",
            "SIEM Deployment, Ingestion & Querying with Splunk SPL",
            "Network Traffic Analysis & Malware Indicator Detection",
            "Threat Hunting with MITRE ATT&CK & YARA Rules",
            "Incident Response Capstone: Live Cyber Attack Remediation",
          ],
        },
      ],
      "12-months": [
        {
          id: "cs-12m-master",
          title: "Advanced Cyber Security Specialist & Chief Information Security Track",
          subtitle: "Red & Blue Team Operations, Cloud Security, Forensics & Malware Analysis",
          level: "Comprehensive Mastery",
          techStack: ["AWS Security", "Splunk", "Cobalt Strike", "Autopsy", "Ghidra", "Kubernetes"],
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Enterprise Cyber Labs",
          liveHours: "300+ Hours Live",
          certification: "Dual Global Certificate + Internship Letter",
          highlights: [
            "Master both offensive Red Teaming and defensive Blue Teaming",
            "Cloud infrastructure security (AWS/Azure) & digital forensics",
            "Guaranteed 3-Month paid internship & 100% placement agreement",
          ],
          modules: [
            "Advanced Red Teaming & Active Directory Exploitation",
            "Cloud Security Architecture (AWS IAM, GuardDuty, KMS)",
            "Digital Forensics Acquisition & Reverse Engineering Basics",
            "Security Compliance (ISO 27001, SOC2, GDPR) & Governance",
            "Enterprise Defense Capstone & Multi-Stage Red Team Exercise",
          ],
        },
        {
          id: "cs-12m-bugbounty",
          title: "Full-Stack Web Security, API Pentesting & Bug Bounty Pro",
          subtitle: "API Security, Mobile Pentesting, Source Code Review & Bug Bounty",
          level: "Advanced to Enterprise",
          techStack: ["Burp Suite Pro", "Postman", "MobSF", "Frida", "SonarQube", "Python"],
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Enterprise Cyber Labs",
          liveHours: "300+ Hours Live",
          certification: "Dual Global Certificate + Internship Letter",
          highlights: [
            "Deep web app and REST/GraphQL API penetration testing",
            "Mobile app penetration testing (Android & iOS with MobSF/Frida)",
            "100% job placement guarantee with top security consultancies",
          ],
          modules: [
            "Advanced Web Exploits (SSRF, Race Conditions, Prototype Pollution)",
            "API Penetration Testing: Broken Object Authorization & BOLA",
            "Android & iOS Mobile Security Assessment",
            "Bug Bounty Methodologies on HackerOne & Bugcrowd",
            "Live Bounty Capstone: Discovering & Submitting Valid CVEs",
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
    coursesByDuration: {
      "3-months": [
        {
          id: "ai-3m-prompt",
          title: "Generative AI & Prompt Engineering for Professionals",
          subtitle: "ChatGPT, Claude 3.5, Midjourney, Advanced Prompting & Workflows",
          level: "Beginner to Intermediate",
          techStack: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Midjourney", "Notion AI", "Runway"],
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "4 Real AI Workflow Deployments",
          liveHours: "60+ Hours Live",
          certification: "Foundation Certificate in Prompt Engineering",
          highlights: [
            "Master Chain-of-Thought, Few-Shot & Role-Based Prompting",
            "Automate everyday workplace tasks with generative AI",
            "Multimodal generation: imagery, presentations, audio & video",
          ],
          modules: [
            "Foundations of Large Language Models & Prompt Engineering",
            "Advanced Prompting Techniques (CoT, ReAct, Tree-of-Thought)",
            "AI Image & Media Generation with Midjourney & Runway",
            "Workflow Automation: Summaries, Coding & Data Extraction",
            "AI Capstone: Building a Complete Business Workflow Solution",
          ],
        },
        {
          id: "ai-3m-nocode",
          title: "No-Code AI Automation & Custom GPTs",
          subtitle: "Custom GPTs, Zapier, Make.com, Voice AI & Chatbot Building",
          level: "Beginner",
          techStack: ["OpenAI Custom GPTs", "Make.com", "Zapier", "Voiceflow", "Airtable"],
          price: 9999,
          originalPrice: 19999,
          emi: "₹3,499/mo",
          projects: "3 Deployed AI Bots",
          liveHours: "60+ Hours Live",
          certification: "Foundation Certificate in No-Code AI",
          highlights: [
            "Create and monetize specialized custom GPT assistants",
            "Connect LLMs with Zapier and Make.com to automate business ops",
            "Build customer service AI bots with Voiceflow & WhatsApp",
          ],
          modules: [
            "Building Knowledge-Grounded Custom GPTs with Actions",
            "Connecting AI with External Tools via Make.com & Zapier",
            "Interactive Voice & Chatbot Development with Voiceflow",
            "AI Database Integration with Airtable & Notion",
            "Capstone: Production AI Chatbot Deployed to Client Website",
          ],
        },
      ],
      "6-months": [
        {
          id: "ai-6m-agents",
          title: "Autonomous AI Agents & Multi-Agent Teams",
          subtitle: "CrewAI, AutoGen, Model Context Protocol (MCP) & LangGraph",
          level: "Intermediate to Pro",
          techStack: ["CrewAI", "LangGraph", "Python", "MCP", "FastAPI", "Ollama"],
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Multi-Agent Production Systems",
          liveHours: "150+ Hours Live",
          certification: "Professional Certificate + ISO Verified",
          highlights: [
            "Build autonomous AI teams that research, plan, and execute code",
            "Model Context Protocol (MCP) tool integrations & function calling",
            "Run private open-source models locally with Ollama",
          ],
          modules: [
            "Agentic Workflows vs Traditional Single-Prompt Queries",
            "CrewAI Multi-Agent Teams, Role Playing & Task Delegation",
            "LangGraph State Machines, Cycles & Human-in-the-Loop",
            "Model Context Protocol (MCP) Server & Tool Development",
            "Enterprise Agent Capstone: Automated Software Testing Squad",
          ],
        },
        {
          id: "ai-6m-rag",
          title: "LLM Application Development & RAG Systems with Python",
          subtitle: "LangChain, Vector DBs (Chroma/Pinecone), RAG & Streamlit",
          level: "Intermediate to Pro",
          techStack: ["Python", "LangChain", "ChromaDB", "Pinecone", "FastAPI", "Streamlit"],
          price: 18999,
          originalPrice: 35999,
          emi: "₹3,299/mo",
          projects: "8 Enterprise RAG Applications",
          liveHours: "150+ Hours Live",
          certification: "Professional Certificate + ISO Verified",
          highlights: [
            "Build production Retrieval-Augmented Generation (RAG) applications",
            "Semantic search over enterprise documents, PDFs & databases",
            "Deploy full-stack AI applications with FastAPI & Streamlit",
          ],
          modules: [
            "Python Core for AI Developers & Asynchronous APIs",
            "Vector Embeddings, Similarity Metrics & Chunking Strategies",
            "Vector Databases: ChromaDB, Pinecone & Hybrid Search",
            "Advanced RAG: Query Transformation, Re-ranking & Caching",
            "Production Capstone: Enterprise Knowledge Base Search Engine",
          ],
        },
      ],
      "12-months": [
        {
          id: "ai-12m-finetune",
          title: "Generative AI Engineer & Foundation Model Fine-Tuning Masterclass",
          subtitle: "Llama 3, Mistral, Hugging Face, LoRA/QLoRA, PyTorch & vLLM",
          level: "Comprehensive Mastery",
          techStack: ["Hugging Face", "PyTorch", "LoRA", "QLoRA", "vLLM", "Docker", "Triton"],
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Enterprise AI Models & Systems",
          liveHours: "300+ Hours Live",
          certification: "Dual Global Certificate + Internship Letter",
          highlights: [
            "Fine-tune open-source models on proprietary enterprise datasets",
            "Parameter-Efficient Fine-Tuning (PEFT) with LoRA & QLoRA",
            "Guaranteed 3-Month paid internship & 100% placement agreement",
          ],
          modules: [
            "Transformer Architecture Deep Dive & Tokenization Mechanics",
            "Data Pipeline Engineering for Model Pre-training & Fine-Tuning",
            "PEFT Techniques: LoRA, QLoRA & DPO (Direct Preference Optimization)",
            "High-Throughput Inference Serving with vLLM, TensorRT & Docker",
            "Enterprise Capstone: Custom Domain-Specific LLM Deployment",
          ],
        },
        {
          id: "ai-12m-architect",
          title: "Enterprise AI Solutions Architect & Cognitive Systems",
          subtitle: "Multi-Model Fusion, Speech AI, Vision AI, Guardrails & Cloud Deployment",
          level: "Advanced to Enterprise",
          techStack: ["OpenAI API", "AWS Bedrock", "NeMo Guardrails", "Kubernetes", "Langfuse"],
          price: 34999,
          originalPrice: 69999,
          emi: "₹3,199/mo",
          projects: "16+ Enterprise AI Models & Systems",
          liveHours: "300+ Hours Live",
          certification: "Dual Global Certificate + Internship Letter",
          highlights: [
            "Architect enterprise-grade cognitive AI platforms on cloud",
            "Model observability, LLM tracing & safety guardrails",
            "100% job placement guarantee with tier-1 AI technology leaders",
          ],
          modules: [
            "Enterprise GenAI Architecture Patterns & Cloud Gateways",
            "LLM Guardrails, Prompt Injection Security & Compliance",
            "Observability, Cost Optimization & Tracing with Langfuse",
            "Multimodal AI Systems (Speech-to-Text, Vision & Multimodal RAG)",
            "Executive Capstone: Full-Scale Enterprise AI Platform",
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
  // Step 1: Select Domain (Digital Marketing, Data Science, Cyber Security, AI & Prompt Eng)
  // Step 2: Select Duration / Months (3 Months, 6 Months, 12 Months)
  // Step 3: View & Select Specific Courses for that (Domain + Duration)
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
            Select your technology domain, pick your preferred duration track (3, 6, or 12 Months),
            and explore industry courses tailored for your career goals with 100% placement support.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-800">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">4</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Core Tech Domains</p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">3, 6, 12 M</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Flexible Durations</p>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-3xl font-black text-[#D4A017]">24+</p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">Duration Programs</p>
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
            { num: 2, label: "2. Pick Duration (Months)" },
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
                    {/* Header with Icon and Number */}
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
                      3, 6, and 12 Months Tracks Available
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
                Our courses in {selectedDomain.title} are specialized according to the duration track you select.
              </p>
            </div>

            {/* 3 Durations Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {DURATION_OPTIONS.map((tier) => {
                const availableCourseCount =
                  selectedDomain.coursesByDuration[tier.id]?.length || 0;

                return (
                  <div
                    key={tier.id}
                    className={`bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative border-2 ${
                      tier.popular
                        ? "border-[#D4A017] shadow-2xl ring-2 ring-amber-300/60 lg:-translate-y-2"
                        : "border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300"
                    }`}
                  >
                    {/* Floating Ribbon */}
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

                      <h4 className="text-2xl font-black text-[#0B1220]">
                        {tier.duration}
                      </h4>
                      <p className="text-sm font-bold text-[#7C2D12] mt-0.5">
                        {tier.name}
                      </p>

                      <div className="mt-2 inline-block bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold px-2.5 py-1 rounded-lg">
                        {availableCourseCount} Specialized Courses Available
                      </div>

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
                        View {tier.duration} Courses <FaArrowRight className="text-xs" />
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
            STEP 3: CHOOSE COURSE FOR (DOMAIN + DURATION)
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
                  Step 3: Select Your Course
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Showing specialized {selectedDuration.duration} courses under {selectedDomain.title}.
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

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleCourseSelect(course)}
                  className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-200 hover:border-[#7C2D12] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        {course.level}
                      </span>
                      <span className="text-xs font-bold text-[#7C2D12] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <FaClock className="text-xs" /> {selectedDuration.duration}
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

                    {/* Key Highlights */}
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

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-slate-100 text-xs text-slate-600">
                      <div>
                        <span className="text-slate-400 block font-medium">Projects</span>
                        <span className="font-bold text-slate-800">{course.projects}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Training</span>
                        <span className="font-bold text-slate-800">{course.liveHours}</span>
                      </div>
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
                    </div>

                    <button className="inline-flex items-center gap-2 bg-[#0B1220] group-hover:bg-[#7C2D12] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm">
                      View Syllabus & Enroll <FaArrowRight className="text-xs" />
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
            STEP 4: FINAL COURSE CARD & ENROLLMENT
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
                Review your {selectedDuration.duration} program roadmap, modules, and enrollment options.
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
                      Duration Track
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#D4A017]">
                      {selectedDuration.duration} ({selectedDuration.name})
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
                    Change Duration ({selectedDuration.duration})
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
                    <p className="text-xs text-slate-500 font-semibold">Program Duration</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedDuration.duration} ({selectedDuration.hoursPerWeek})
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                    <FaBriefcase className="text-2xl text-[#7C2D12] mb-2" />
                    <p className="text-xs text-slate-500 font-semibold">Real Projects</p>
                    <p className="text-base font-bold text-[#0B1220]">
                      {selectedCourse.projects}
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
                    <span>Learning Roadmap ({selectedDuration.duration} Track)</span>
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