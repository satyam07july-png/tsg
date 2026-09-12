// AI & PROMPT ENGINEERING COMPLETE COURSE DATA (3M, 6M, 12M)
// Aligned with OpenAI, Anthropic, LangChain, CrewAI & Modern Generative AI Ecosystem

export const FOUNDATION_AI_PROMPT_DETAILS = {
  courseId: "ai-3m-prompt",
  title: "Generative AI & Prompt Engineering for Professionals",
  duration: "3 Months",
  modulesCount: "30",
  toolsCount: "50+",
  hoursPerWeek: "8 - 10 Hours / Week",
  keyMetrics: [
    { label: "AI Models & LLMs", value: "10+", subtext: "GPT-4o, Claude 3.5, Gemini 1.5, Llama 3" },
    { label: "Hands-on Projects", value: "4", subtext: "Automated Workflows & Copilots" },
    { label: "Prompts Library", value: "500+", subtext: "Production-tested system prompts" },
    { label: "Average Salary Hike", value: "55%", subtext: "Across Marketing, IT & Operations" },
  ],
  highlights: [
    "Master advanced Prompt Engineering (CoT, ReAct, Tree-of-Thoughts, Few-Shot)",
    "Generate production-grade creative assets with Midjourney v6, Runway Gen-3 & Flux",
    "Automate daily workplace workflows with ChatGPT custom GPTs & Claude Artifacts",
    "Learn AI ethics, copyright laws, bias reduction & prompt injection defense",
    "Official Dizital Adda Certification in Generative AI & Prompt Engineering",
  ],
  curriculumCategories: [
    {
      id: "cat-ai-1",
      categoryTitle: "Month 1: LLM Architecture & Prompt Engineering Mastery",
      categoryDesc: "Understand transformer architectures, tokenization, context windows, and foundational to advanced prompting frameworks.",
      modules: [
        {
          num: 1,
          title: "Introduction to Large Language Models (LLMs) & Transformers",
          duration: "1 Week",
          type: "video",
          topics: [
            "How LLMs work: Tokens, embeddings, attention mechanisms & weights",
            "Comparing modern models: GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3.1",
            "Context windows, temperature, top_p, and frequency penalties",
            "Setting up professional AI developer environments & API keys",
          ],
          skills: ["LLMArchitecture", "ModelParameters", "AIEnvironments"],
        },
        {
          num: 2,
          title: "Advanced Prompt Frameworks & System Prompt Architecture",
          duration: "1 Week",
          type: "video",
          topics: [
            "Zero-shot, Few-shot & Chain-of-Thought (CoT) prompting techniques",
            "ReAct framework, Directional Stimulus, and Generated Knowledge Prompting",
            "Architecting enterprise system prompts with XML tags and guardrails",
            "Preventing hallucinations and enforcing structured JSON/Markdown outputs",
          ],
          skills: ["ChainOfThought", "FewShotPrompting", "SystemPrompts", "OutputFormatting"],
        },
      ],
    },
    {
      id: "cat-ai-2",
      categoryTitle: "Month 2: Multimodal Generative AI (Images, Video & Audio)",
      categoryDesc: "Direct multimodal generation pipelines using Midjourney, Stable Diffusion, Runway, and ElevenLabs.",
      modules: [
        {
          num: 3,
          title: "Generative Art & Visual Asset Engineering",
          duration: "1 Week",
          type: "video",
          topics: [
            "Midjourney v6: Parameters (--s, --c, --ar, --iw), camera angles, lighting & style references",
            "Flux.1 & Stable Diffusion: Negative prompting, seed manipulation, ControlNet basics",
            "Upscaling, inpainting, outpainting, and brand asset generation",
            "Commercial copyright, licensing, and ethical usage guidelines",
          ],
          skills: ["MidjourneyV6", "FluxAI", "VisualPrompting", "Inpainting"],
        },
        {
          num: 4,
          title: "AI Video, Voice Cloning & Media Production",
          duration: "1 Week",
          type: "video",
          topics: [
            "Runway Gen-3 Alpha & Kling: Text-to-video, image-to-video & motion brush",
            "ElevenLabs: Realistic voice cloning, speech synthesis & multi-lingual dubbing",
            "HeyGen & Synthesia: Digital AI avatars for corporate communications",
            "End-to-end production of a commercial AI video campaign",
          ],
          skills: ["RunwayGen3", "ElevenLabs", "AIAvatars", "VideoSynthesis"],
        },
      ],
    },
    {
      id: "cat-ai-3",
      categoryTitle: "Month 3: Workplace Automation, Custom GPTs & Capstone",
      categoryDesc: "Build custom domain-specific GPTs, automate knowledge retrieval, and deploy end-to-end productivity pipelines.",
      modules: [
        {
          num: 5,
          title: "Custom GPTs, Claude Projects & Personal Copilots",
          duration: "1 Week",
          type: "video",
          topics: [
            "Configuring custom GPTs with knowledge bases and custom instructions",
            "Connecting custom Actions with external REST APIs and OpenAPI schemas",
            "Claude Projects: Long-document analysis, code interpretation & artifacts",
            "Prompt injection defense and securing proprietary enterprise instructions",
          ],
          skills: ["CustomGPTs", "ClaudeProjects", "APIActions", "PromptSecurity"],
        },
        {
          num: 6,
          title: "Capstone Project: Autonomous Executive Assistant Pipeline",
          duration: "1 Week",
          type: "project",
          topics: [
            "Multi-step automated email triage, calendar synchronization & meeting summarization",
            "Integrating Zapier / Make.com with OpenAI APIs",
            "End-to-end testing, error handling, and reliability verification",
            "Project presentation & portfolio showcase for interviews",
          ],
          skills: ["WorkflowAutomation", "APIIntegration", "CapstoneExecution"],
        },
      ],
    },
  ],
  liveProjects: [
    {
      title: "Enterprise Custom GPT Knowledge Copilot",
      desc: "Build and deploy a proprietary company knowledge-base assistant with document indexing, strict guardrails, and automated API actions.",
      deliverables: ["Custom GPT Specification", "OpenAPI Action Schema", "Prompt Guardrails Policy", "Accuracy Benchmark"],
    },
    {
      title: "AI Commercial Video Campaign",
      desc: "Produce a 60-second broadcast-ready commercial using Midjourney image generation, Runway Gen-3 video motion, and ElevenLabs voiceover.",
      deliverables: ["Storyboard & Script Prompts", "Midjourney Keyframes", "Runway Video Assembly", "Final Rendered Commercial"],
    },
  ],
  toolClusters: [
    { name: "Core LLMs", tools: ["ChatGPT 4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Perplexity AI"] },
    { name: "Visual AI", tools: ["Midjourney v6", "Flux.1", "Runway Gen-3", "Canva Magic Studio"] },
    { name: "Voice & Video", tools: ["ElevenLabs", "HeyGen", "Synthesia", "CapCut AI"] },
    { name: "Productivity", tools: ["Make.com", "Zapier Central", "Notion AI", "Cursor AI"] },
  ],
  journeySteps: [
    { step: 1, title: "LLM Foundations", desc: "Master attention, tokens, prompt frameworks and structured output generation.", pills: ["Tokens", "CoT", "Temperature"] },
    { step: 2, title: "Creative Multimodal", desc: "Generate studio-grade imagery, video commercials and cloned audio narration.", pills: ["Midjourney", "Runway", "ElevenLabs"] },
    { step: 3, title: "Custom Copilots", desc: "Deploy custom GPTs with external API integrations and automated workplace actions.", pills: ["OpenAPI", "CustomGPTs", "Make.com"] },
  ],
  whoShouldJoin: [
    { title: "Working Professionals", desc: "Supercharge your productivity, cut routine task time by 70%, and lead AI adoption in your team." },
    { title: "Marketers & Content Creators", desc: "Create high-converting ad copy, visual assets, video reels, and localized campaigns instantly." },
    { title: "Software Engineers & Techies", desc: "Incorporate LLM APIs, prompt engineering, and code generation copilots into your stack." },
  ],
  certificationsList: [
    { name: "Dizital Adda Certified AI & Prompt Specialist", badge: "Official", desc: "Verifiable credential proving practical mastery of LLMs, prompt frameworks, and multimodal AI tools." },
  ],
  faqs: [
    { question: "Do I need coding background for this 3-month AI course?", answer: "No coding background is required. This foundation track is designed for professionals, creators, and business leaders who want to master prompting, multimodal creation, and no-code automations." },
    { question: "Which AI models will I get hands-on access to?", answer: "You will work with ChatGPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Midjourney v6, ElevenLabs, Runway Gen-3, and Cursor AI." },
    { question: "Will I receive a verified certificate upon completion?", answer: "Yes, you will receive an official verifiable certificate from Dizital Adda showcasing your prompt engineering and generative AI portfolio." },
  ],
  reviews: [
    { name: "Amitabh Verma", role: "Product Manager", company: "Zomato", rating: 5, comment: "This course revolutionized how I manage product specs, research competitor landscapes, and automate user stories with Claude and custom GPTs." },
    { name: "Shweta Nair", role: "Creative Lead", company: "Dentsu", rating: 5, comment: "The Midjourney and Runway modules were exceptional. Our agency cut concept prototyping time from 2 weeks to 2 days." },
  ],
};

export const ADVANCED_AI_AGENTS_DETAILS = {
  courseId: "ai-6m-agents",
  title: "Autonomous AI Agents & Multi-Agent Teams",
  duration: "6 Months",
  modulesCount: "45",
  toolsCount: "75+",
  hoursPerWeek: "12 - 15 Hours / Week",
  keyMetrics: [
    { label: "Agent Frameworks", value: "4+", subtext: "CrewAI, LangGraph, AutoGen, MCP" },
    { label: "Vector Databases", value: "3+", subtext: "Pinecone, ChromaDB, Qdrant" },
    { label: "Autonomous Workflows", value: "8", subtext: "Production multi-agent swarms" },
    { label: "Placement Assistance", value: "100%", subtext: "500+ Tech hiring partners" },
  ],
  highlights: [
    "Build autonomous multi-agent swarms with CrewAI, LangGraph, and Microsoft AutoGen",
    "Implement production RAG (Retrieval-Augmented Generation) with Hybrid Search and rerankers",
    "Master Model Context Protocol (MCP) to connect AI agents with local databases & internal tools",
    "Integrate agentic evaluation frameworks (Ragas, TruLens, LangSmith) for production observability",
    "Dual Certification in Autonomous AI Systems & LangChain Architecture",
  ],
  curriculumCategories: [
    {
      id: "cat-ai-adv-1",
      categoryTitle: "Month 1-2: Advanced Python for AI & LangChain Architecture",
      categoryDesc: "Build programmable LLM applications with LangChain, LCEL (LangChain Expression Language), and structured tool calling.",
      modules: [
        {
          num: 1,
          title: "LangChain Core & LCEL Expression Language",
          duration: "2 Weeks",
          type: "video",
          topics: [
            "Chains, Prompts, Runnables, and output parsers in LCEL",
            "Streaming responses, batch processing, and async execution",
            "Function calling and tool invocation with OpenAI and Anthropic APIs",
            "Memory management: ConversationBuffer, ConversationSummary & VectorStore memory",
          ],
          skills: ["LangChain", "LCEL", "FunctionCalling", "MemorySystems"],
        },
        {
          num: 2,
          title: "Production RAG Architecture (Retrieval-Augmented Generation)",
          duration: "2 Weeks",
          type: "video",
          topics: [
            "Document chunking strategies: Semantic chunking, sliding window & markdown splitters",
            "Embedding models (text-embedding-3-large, Cohere, BGE) & Vector Databases (Pinecone, Chroma)",
            "Hybrid search (BM25 + Dense Vectors) and cross-encoder rerankers (Cohere Rerank)",
            "Self-querying, contextual compression, and parent document retrieval",
          ],
          skills: ["RAG", "VectorDatabases", "Embeddings", "HybridSearch", "Reranking"],
        },
      ],
    },
    {
      id: "cat-ai-adv-2",
      categoryTitle: "Month 3-4: Multi-Agent Systems (CrewAI & LangGraph)",
      categoryDesc: "Design cooperative autonomous agent teams with specialized roles, task delegation, memory, and state machines.",
      modules: [
        {
          num: 3,
          title: "CrewAI Multi-Agent Swarms",
          duration: "2 Weeks",
          type: "video",
          topics: [
            "CrewAI agents, tasks, tools, and sequential vs hierarchical processes",
            "Inter-agent communication, delegation, and feedback loops",
            "Equipping agents with custom web scrapers, code execution, and database connectors",
            "Deploying an automated Market Research & Investment Analyst Crew",
          ],
          skills: ["CrewAI", "MultiAgentArchitecture", "AgentDelegation", "CustomTools"],
        },
        {
          num: 4,
          title: "LangGraph: Cyclic State Machines & Human-in-the-Loop",
          duration: "2 Weeks",
          type: "video",
          topics: [
            "Graph architecture: StateGraph, Nodes, Edges, and conditional routing",
            "Handling cyclic workflows, error self-correction, and retry loops",
            "Implementing Human-in-the-Loop (HITL) checkpoints for sensitive actions",
            "Building a self-healing software debugging and testing agent",
          ],
          skills: ["LangGraph", "CyclicAgents", "HumanInTheLoop", "StateMachines"],
        },
      ],
    },
    {
      id: "cat-ai-adv-3",
      categoryTitle: "Month 5-6: Model Context Protocol (MCP), Evals & Production Deployment",
      categoryDesc: "Standardize tool interfaces with MCP, benchmark agent performance with Ragas, and deploy scalable microservices.",
      modules: [
        {
          num: 5,
          title: "Model Context Protocol (MCP) & Enterprise Integration",
          duration: "2 Weeks",
          type: "video",
          topics: [
            "Anthropic Model Context Protocol (MCP) architecture: Hosts, Clients & Servers",
            "Developing custom MCP servers for SQL databases, Git repositories & internal APIs",
            "Securing tool execution environments and token rate budgeting",
            "Connecting Claude Desktop and Cursor to custom MCP microservices",
          ],
          skills: ["MCP", "ModelContextProtocol", "ToolServers", "EnterpriseSecurity"],
        },
        {
          num: 6,
          title: "Agent Observability, Evals & Cloud Deployment",
          duration: "2 Weeks",
          type: "project",
          topics: [
            "Tracing and debugging agent executions with LangSmith and Phoenix Arize",
            "Evaluating RAG accuracy with Ragas (Faithfulness, Answer Relevance, Context Precision)",
            "Containerizing agents with Docker and deploying to FastAPI on AWS / GCP",
            "Live Capstone Defense: Autonomous B2B Lead Gen & Outreach Agent",
          ],
          skills: ["LangSmith", "Ragas", "FastAPI", "Docker", "CloudDeployment"],
        },
      ],
    },
  ],
  liveProjects: [
    {
      title: "Autonomous Financial Research Swarm (CrewAI)",
      desc: "Four specialized agents (Financial Scraper, Data Analyst, Risk Evaluator, and Report Author) collaborate to generate institutional equity research memos.",
      deliverables: ["CrewAI Graph Spec", "SEC 10-K RAG Pipeline", "Risk Synthesis Report", "Automated Email Notification"],
    },
    {
      title: "Customer Support State-Machine with LangGraph & HITL",
      desc: "Build a production multi-turn support agent capable of checking order status, issuing refunds with supervisor approval, and updating ERP systems.",
      deliverables: ["LangGraph State Machine", "Postgres ERP Tool Connector", "Human-in-the-Loop Review Dashboard", "Ragas Evaluation Benchmark"],
    },
  ],
  toolClusters: [
    { name: "Agent Frameworks", tools: ["CrewAI", "LangGraph", "LangChain", "AutoGen"] },
    { name: "Vector & RAG", tools: ["Pinecone", "ChromaDB", "Qdrant", "Cohere Rerank"] },
    { name: "Protocol & Tools", tools: ["Model Context Protocol (MCP)", "FastAPI", "Docker", "Tavily Search"] },
    { name: "Observability", tools: ["LangSmith", "Ragas", "Phoenix Arize", "Weights & Biases"] },
  ],
  journeySteps: [
    { step: 1, title: "LangChain & RAG", desc: "Build advanced retrieval pipelines with dense vectors and cross-encoder rerankers.", pills: ["LCEL", "Pinecone", "HybridSearch"] },
    { step: 2, title: "Multi-Agent Swarms", desc: "Orchestrate autonomous agent roles, delegation protocols and cyclic graphs.", pills: ["CrewAI", "LangGraph", "StateMachines"] },
    { step: 3, title: "Production & MCP", desc: "Connect local tools with Model Context Protocol and deploy scalable agent services.", pills: ["MCP", "LangSmith", "FastAPI"] },
  ],
  whoShouldJoin: [
    { title: "Software Engineers & Backend Devs", desc: "Transition into AI Engineering and build mission-critical autonomous agents." },
    { title: "Data Scientists & ML Engineers", desc: "Level up from static ML models to dynamic LLM agents and production RAG systems." },
    { title: "Tech Founders & Consultants", desc: "Automate complex business operations and sell high-value AI solutions to enterprise clients." },
  ],
  certificationsList: [
    { name: "Advanced AI Agent Architect Certification", badge: "Advanced", desc: "Industry-recognized credential certifying competence in LangGraph, CrewAI, and Model Context Protocol." },
  ],
  faqs: [
    { question: "What prerequisites are needed for the 6-month AI Agents track?", answer: "Basic knowledge of Python (functions, loops, data structures) is recommended. Prior experience with machine learning is not required." },
    { question: "What is Model Context Protocol (MCP) and why is it covered?", answer: "MCP is the open standard created by Anthropic to allow LLM agents to securely interact with external tools, file systems, and enterprise data sources." },
    { question: "Does this program include placement assistance?", answer: "Yes, you get full resume reviews, mock AI Engineering interviews, and direct referrals to over 500 hiring partners." },
  ],
  reviews: [
    { name: "Karan Johar", role: "AI Engineer", company: "Accenture", rating: 5, comment: "The LangGraph and CrewAI modules are unmatched. I went from knowing basic prompts to architecting multi-agent microservices in production." },
    { name: "Rohan Gupta", role: "Senior Backend Dev", company: "Freshworks", rating: 5, comment: "Building custom MCP servers and setting up Ragas evals gave me the confidence to spearhead our company's new AI initiative." },
  ],
};

export const MASTER_AI_ENGINEERING_DETAILS = {
  courseId: "ai-12m-finetune",
  title: "AI Engineer Masterclass & LLM Fine-Tuning",
  duration: "12 Months",
  modulesCount: "60",
  toolsCount: "100+",
  hoursPerWeek: "15 - 20 Hours / Week",
  keyMetrics: [
    { label: "Fine-Tuned Models", value: "3+", subtext: "Llama 3, Mistral, Qwen" },
    { label: "Full-Scale Capstones", value: "12", subtext: "Enterprise AI Architectures" },
    { label: "Paid Internship", value: "3 Months", subtext: "Guaranteed with Stipend" },
    { label: "Placement Guarantee", value: "100%", subtext: "Formal Written Agreement" },
  ],
  highlights: [
    "Full-stack AI Engineering: From foundational prompting to deep model fine-tuning with LoRA / QLoRA",
    "Train and align custom open-source LLMs (Llama 3.1, Mistral, DeepSeek) using Hugging Face & Unsloth",
    "Implement Reinforcement Learning from Human Feedback (RLHF) and Direct Preference Optimization (DPO)",
    "Deploy high-throughput inference engines with vLLM, TensorRT-LLM, and Ollama on Kubernetes",
    "3-Month Guaranteed Paid In-House Corporate AI Internship + 100% Placement Guarantee",
  ],
  curriculumCategories: [
    {
      id: "cat-ai-mst-1",
      categoryTitle: "Month 1-3: Prompt Engineering, LangChain & Production RAG",
      categoryDesc: "Foundational to intermediate AI engineering, context engineering, vector stores, and structured pipelines.",
      modules: [
        {
          num: 1,
          title: "Prompt Engineering & Advanced Context Architectures",
          duration: "1 Month",
          type: "video",
          topics: ["Context windows, KV caching, token dynamics", "CoT, ReAct, and Tree-of-Thought prompting", "Structured outputs with Instructor & Pydantic"],
          skills: ["ContextEngineering", "PromptOptimization", "Pydantic"],
        },
        {
          num: 2,
          title: "Enterprise Retrieval-Augmented Generation (RAG)",
          duration: "2 Months",
          type: "video",
          topics: ["Hybrid sparse-dense retrieval", "Cross-encoders, ColBERT & Late Interaction models", "GraphRAG with Neo4j knowledge graphs"],
          skills: ["GraphRAG", "ColBERT", "HybridRetrieval", "Neo4j"],
        },
      ],
    },
    {
      id: "cat-ai-mst-2",
      categoryTitle: "Month 4-6: Multi-Agent Systems & MCP Infrastructure",
      categoryDesc: "Build autonomous multi-agent swarms with LangGraph, CrewAI, AutoGen, and custom Model Context Protocol servers.",
      modules: [
        {
          num: 3,
          title: "Autonomous Agent Orchestration & State Graphs",
          duration: "1.5 Months",
          type: "video",
          topics: ["LangGraph cyclic workflows", "CrewAI hierarchical processes", "Autonomous code execution sandboxes"],
          skills: ["LangGraph", "CrewAI", "Sandboxing"],
        },
        {
          num: 4,
          title: "Model Context Protocol & Enterprise Tooling",
          duration: "1.5 Months",
          type: "video",
          topics: ["Anthropic MCP protocol standards", "Building high-performance MCP servers", "Security boundaries and token throttling"],
          skills: ["MCP", "Microservices", "ToolEngineering"],
        },
      ],
    },
    {
      id: "cat-ai-mst-3",
      categoryTitle: "Month 7-9: Open-Source Models, Fine-Tuning (LoRA/QLoRA) & Alignment",
      categoryDesc: "Dataset preparation, parameter-efficient fine-tuning (PEFT), quantized LoRA, and preference alignment (DPO/RLHF).",
      modules: [
        {
          num: 5,
          title: "Dataset Preparation & Synthetic Data Generation",
          duration: "1.5 Months",
          type: "video",
          topics: ["Alpaca & ShareGPT data formats", "Filtering, deduplication, and quality scoring", "Generating synthetic instruction data with frontier models"],
          skills: ["DataEngineering", "SyntheticData", "DatasetCuration"],
        },
        {
          num: 6,
          title: "PEFT, LoRA, QLoRA & Unsloth Fine-Tuning",
          duration: "1.5 Months",
          type: "video",
          topics: ["Low-Rank Adaptation (LoRA) mathematics", "4-bit quantization with BitsAndBytes", "Accelerated training with Unsloth & Hugging Face TRL", "DPO (Direct Preference Optimization) alignment"],
          skills: ["LoRA", "QLoRA", "Unsloth", "HuggingFace", "DPO"],
        },
      ],
    },
    {
      id: "cat-ai-mst-4",
      categoryTitle: "Month 10-12: High-Performance Inference, MLOps & Paid Internship",
      categoryDesc: "Deploy scalable LLM inference engines with vLLM, monitor model drift, and complete a 3-month paid agency internship.",
      modules: [
        {
          num: 7,
          title: "High-Throughput Inference with vLLM & TensorRT-LLM",
          duration: "1 Month",
          type: "video",
          topics: ["PagedAttention, continuous batching & speculative decoding", "Deploying vLLM on multi-GPU Kubernetes clusters", "Quantization formats (AWQ, GPTQ, GGUF)"],
          skills: ["vLLM", "TensorRT", "PagedAttention", "Quantization"],
        },
        {
          num: 8,
          title: "3-Month Paid Corporate Internship & Grand Capstone",
          duration: "2 Months",
          type: "project",
          topics: ["Live enterprise client deployment", "Production SLA monitoring & telemetry", "Job placement drives with top tech firms"],
          skills: ["CorporateInternship", "EnterpriseProduction", "CareerPlacement"],
        },
      ],
    },
  ],
  liveProjects: [
    {
      title: "Domain-Specific Legal / Medical LLM Fine-Tuning",
      desc: "Curate a 50,000-sample domain dataset, fine-tune Llama 3.1 8B with QLoRA using Unsloth, and perform DPO alignment against hallucinated advice.",
      deliverables: ["Curated JSONL Training Corpus", "Fine-Tuning Script & Loss Curves", "Quantized AWQ Model Checkpoint", "Evaluation & Safety Benchmark Report"],
    },
    {
      title: "Enterprise Multi-Agent Customer Intelligence Engine",
      desc: "Deploy a distributed multi-agent system on Kubernetes serving 1,000+ concurrent requests using vLLM and GraphRAG on Neo4j.",
      deliverables: ["Kubernetes Helm Charts", "Neo4j Knowledge Graph Schema", "vLLM Production Cluster Config", "Prometheus/Grafana Latency Dashboard"],
    },
  ],
  toolClusters: [
    { name: "Fine-Tuning & Training", tools: ["Unsloth", "Hugging Face TRL", "PEFT", "PyTorch", "BitsAndBytes"] },
    { name: "High-Speed Inference", tools: ["vLLM", "TensorRT-LLM", "Ollama", "TGI"] },
    { name: "Agent & RAG Stack", tools: ["LangGraph", "CrewAI", "Neo4j GraphRAG", "Pinecone"] },
    { name: "Deployment & MLOps", tools: ["Docker", "Kubernetes", "AWS SageMaker", "LangSmith", "Weights & Biases"] },
  ],
  journeySteps: [
    { step: 1, title: "Foundations & RAG", desc: "Build hybrid sparse-dense retrieval and GraphRAG knowledge graphs.", pills: ["LCEL", "GraphRAG", "Pinecone"] },
    { step: 2, title: "Multi-Agent & MCP", desc: "Orchestrate cooperative multi-agent teams connected to external enterprise tools.", pills: ["LangGraph", "CrewAI", "MCP"] },
    { step: 3, title: "LoRA Fine-Tuning", desc: "Fine-tune open-source LLMs on custom domain datasets with QLoRA and Unsloth.", pills: ["LoRA", "Unsloth", "DPO"] },
    { step: 4, title: "Paid Internship", desc: "Work on live enterprise projects with monthly stipend and guaranteed placement.", pills: ["vLLM", "Internship", "Placement"] },
  ],
  whoShouldJoin: [
    { title: "Aspiring AI Engineers", desc: "Master the entire stack from prompting to GPU model fine-tuning and earn ₹12 - ₹35 LPA." },
    { title: "Senior Developers & Leads", desc: "Lead enterprise AI transformation, architect scalable LLM infra, and oversee AI teams." },
    { title: "Data Scientists & Researchers", desc: "Transition from experimental notebooks to high-throughput production AI deployments." },
  ],
  certificationsList: [
    { name: "Master Diploma in Artificial Intelligence & LLM Engineering", badge: "Master", desc: "Highest-tier professional credential with dual accreditation and formal 3-month paid internship letter." },
  ],
  faqs: [
    { question: "Do I get a guaranteed paid internship in this 12-month track?", answer: "Yes! Every student enrolled in the 12-Month Master track receives a guaranteed 3-month paid internship with real client projects and a monthly stipend." },
    { question: "What hardware or GPU do I need for fine-tuning?", answer: "All cloud GPU compute resources (A100 / H100 cloud instances) are provided free of charge during the fine-tuning labs via Google Colab Pro and dedicated cloud pods." },
    { question: "Is the 100% placement guarantee backed by an agreement?", answer: "Yes, the 100% placement guarantee is backed by a formal written agreement with complete refund assurance if not placed." },
  ],
  reviews: [
    { name: "Divyansh Mehra", role: "Lead AI Engineer", company: "Zeta Global", rating: 5, comment: "This is the single most comprehensive AI Engineering program in India. Fine-tuning Llama 3 with Unsloth and deploying vLLM directly led to my 18 LPA offer." },
    { name: "Pooja Sharma", role: "AI Solutions Architect", company: "Deloitte", rating: 5, comment: "The combination of GraphRAG, multi-agent LangGraph, and the 3-month paid agency internship set my profile completely apart from normal applicants." },
  ],
};
