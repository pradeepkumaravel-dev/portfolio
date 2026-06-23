document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal animation using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(
        entries,
        observer
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    // Project Data for Side Drawer
    const projectData = {
        'chatbot': {
            title: 'Customer Nurturing Chatbot',
            stack: '<span>FastAPI</span><span>ReactJS</span><span>AWS Bedrock</span><span>LangGraph</span><span>MCP</span>',
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
            desc: `
                <div class="project-detail-section">
                    <h4>Business Context</h4>
                    <p>Provided AI enhancements to a Canadian SaaS provider managing leads, quotes, orders, invoices, and future services. The goal was to supercharge their platform with intelligent automation.</p>
                </div>
                <div class="project-detail-section">
                    <h4>Key Modules</h4>
                    <ul>
                        <li><strong>Dynamic Pricing Engine:</strong> AWS EventBridge triggered solution analyzing YoY sales and future truck allocations to suggest optimal product pricing via AWS Bedrock (Claude 4.5).</li>
                        <li><strong>NLP Dashboard:</strong> Converted legacy PHP queries into a semantic knowledge base, allowing users to generate complex AWS QuickSight reports via natural language.</li>
                        <li><strong>SaaS Buyer's Client Chatbot:</strong> A LangGraph-orchestrated sales bot. Handles lead creation, product inquiries, and job scheduling using HITL (Human-in-the-Loop) workflows. Operates seamlessly as both a web chatbot and a voice agent.</li>
                    </ul>
                </div>
            `
        },
        'rekognition': {
            title: 'Rekognition POV',
            stack: '<span>TypeScript</span><span>AWS Rekognition</span><span>Bedrock Nova Lite</span>',
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
            desc: `
                <div class="project-detail-section">
                    <h4>Business Context</h4>
                    <p>Developed for a US-based client requiring a robust facial recognition system for their house rental broker application. This replaced a costly and limited Stripe identity verification flow.</p>
                </div>
                <div class="project-detail-section">
                    <h4>Key Modules</h4>
                    <ul>
                        <li><strong>Face Rekognition Module:</strong> Direct AWS Rekognition integration for instantaneous liveness verification to prevent identity spoofing before document upload.</li>
                        <li><strong>Face Match & Content Extraction:</strong> Utilized AWS Bedrock Nova Lite to accurately extract text from ID documents, outperforming standard OCR packages at a fraction of the cost.</li>
                        <li><strong>Microservice Architecture:</strong> Delivered as an independent, highly scalable microservice for seamless integration with the client's existing application.</li>
                    </ul>
                </div>
            `
        },
        'forecasting': {
            title: 'Kaleo Time-Series Forecasting',
            stack: '<span>AWS SageMaker</span><span>Lambda</span><span>Python</span>',
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
            desc: `
                <div class="project-detail-section">
                    <h4>Business Context</h4>
                    <p>Engineered an anomaly detection system for a pharmaceutical company monitoring EpiPen sales across their prescriber network.</p>
                </div>
                <div class="project-detail-section">
                    <h4>Key Modules</h4>
                    <ul>
                        <li><strong>Dataset Preparation:</strong> Cleaned and processed 30M+ records. Implemented rigorous filtering (min. 300 sales/2 years), mean imputation, and outlier removal to curate 100k+ high-quality records.</li>
                        <li><strong>Predictive Modeling (DeepAR):</strong> Leveraged AWS SageMaker DeepAR to forecast 8 weeks of data using 3 years of history. Chosen over Prophet to efficiently train a single model for multiple concurrent time-series.</li>
                        <li><strong>Anomaly Detection:</strong> Fine-tuned model seeds to encourage risk-taking, successfully predicting true sales anomalies with 80% accuracy.</li>
                    </ul>
                </div>
            `
        },
        'valyria': {
            title: 'Valyria – Agentic Code Platform',
            stack: '<span>ReactJS</span><span>Flask</span><span>Docker</span>',
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
            desc: `
                <div class="project-detail-section">
                    <h4>Business Context</h4>
                    <p>An ambitious internal accelerator platform designed to revolutionize software development by translating functional requirement documents directly into production-ready code using specialized AI agents.</p>
                </div>
                <div class="project-detail-section">
                    <h4>Key Modules</h4>
                    <ul>
                        <li><strong>Multi-Agent Orchestration:</strong> Developed a highly specialized ecosystem of agents (Orchestrator, Designer, Coder, Tester, Debugger) working in tandem.</li>
                        <li><strong>Real-Time Collaboration:</strong> Built a low-latency WebSocket communication layer, enabling users to interject, provide feedback, and modify the generation process mid-flight.</li>
                        <li><strong>Polyglot Generation Engines:</strong> Engineered robust generation pipelines capable of producing complete, downloadable applications in Python, React, and Golang.</li>
                        <li><strong>Automated QA Pipeline:</strong> Integrated an autonomous testing and debugging loop that rigorously validates generated code quality prior to delivery.</li>
                    </ul>
                </div>
                <div class="impact-box">
                    <strong>Impact:</strong> Drastically reduced initial boilerplate and prototyping time, accelerating the journey from concept to deployable artifact.
                </div>
            `
        },
        'asami': {
            title: 'Asami 3.0 – Code Analysis',
            stack: '<span>FastAPI</span><span>Azure Cosmos DB</span><span>MongoDB</span>',
            icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
            desc: `
                <div class="project-detail-section">
                    <h4>Business Context</h4>
                    <p>An enterprise-grade code analysis platform utilizing graph databases and AST parsing to map entire codebases as searchable, relationship networks. Paired with a robust multi-LLM chatbot interface.</p>
                </div>
                <div class="project-detail-section">
                    <h4>Key Modules</h4>
                    <ul>
                        <li><strong>Graph-Based Code Analysis:</strong> Cloned repositories and utilized <code>tree-sitter</code> to decompose Python, React, and Kotlin code into hierarchical structures down to the function level.</li>
                        <li><strong>Semantic GraphDB Mapping:</strong> Mapped function declarations, calls, and dependencies into Azure Cosmos DB (Gremlin API). Augmented nodes with LLM-generated descriptions and vector embeddings.</li>
                        <li><strong>GraphRAG Chatbot:</strong> Implemented an advanced retrieval system where users query code logic. The system traverses the graph and vector space to pinpoint exact functions and files.</li>
                        <li><strong>Prompt Engineering Layer:</strong> Built a structured prompt generation module enforcing XML standards, allowing non-technical admins to create use-case-specific prompts securely.</li>
                    </ul>
                </div>
                <div class="impact-box">
                    <strong>Impact:</strong> Executed a flawless zero-downtime database migration to PostgreSQL, ensuring uninterrupted access for enterprise teams.
                </div>
            `
        }
    };

    // Drawer Logic
    const drawerOverlay = document.getElementById('drawer-overlay');
    const sideDrawer = document.getElementById('side-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerTitle = document.getElementById('drawer-title');
    const drawerStack = document.getElementById('drawer-stack');
    const drawerDesc = document.getElementById('drawer-desc');
    const edgeHint = document.getElementById('edge-hint');
    const drawerIcon = document.getElementById('drawer-icon');

    const openDrawer = (projectId) => {
        const data = projectData[projectId];
        if(data) {
            drawerTitle.innerHTML = data.title;
            drawerStack.innerHTML = data.stack;
            drawerDesc.innerHTML = data.desc;
            if (drawerIcon && data.icon) drawerIcon.innerHTML = data.icon;
            
            sideDrawer.className = 'side-drawer is-open';
            drawerOverlay.classList.add('is-open');
            if (edgeHint) edgeHint.classList.add('is-hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeDrawer = () => {
        drawerOverlay.classList.remove('is-open');
        sideDrawer.className = 'side-drawer';
        if (edgeHint) edgeHint.classList.remove('is-hidden');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (sideDrawer.classList.contains('is-open')) return;
            const projectId = card.getAttribute('data-project');
            const data = projectData[projectId];
            if(data) {
                drawerTitle.innerHTML = data.title;
                drawerStack.innerHTML = data.stack;
                drawerDesc.innerHTML = data.desc;
                if (drawerIcon && data.icon) drawerIcon.innerHTML = data.icon;
                
                sideDrawer.className = 'side-drawer is-peeking';
                if (edgeHint) edgeHint.classList.add('is-hidden');
            }
        });

        card.addEventListener('mouseleave', () => {
            if (!sideDrawer.classList.contains('is-open')) {
                sideDrawer.className = 'side-drawer';
                if (edgeHint) edgeHint.classList.remove('is-hidden');
            }
        });

        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openDrawer(projectId);
        });
    });

    if (drawerClose && drawerOverlay) {
        drawerClose.addEventListener('click', closeDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);
    }
    
    if (edgeHint) {
        edgeHint.addEventListener('click', () => {
            const firstProject = document.querySelector('.project-card');
            if (firstProject) {
                firstProject.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
});

function handleEmail(el, e) {
    e.preventDefault();
    navigator.clipboard.writeText('pradeep.kumaravel.work@gmail.com');
    el.textContent = '✓ Copied';
    setTimeout(() => {
        el.textContent = 'Say Hello';
        window.location.href = el.href; // fires mailto after reset
    }, 1500);
}