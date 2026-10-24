// lib/projects.ts

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectDetailsSection = {
  title: string;
  bullets?: string[];
  text?: string;
};

export type ProjectDetails = {
  summary: string[];
  sections: ProjectDetailsSection[];
};

export type Project = {
  title: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  links?: ProjectLink[];
  details?: ProjectDetails;
  cardSummary?: string[];
  /** "in-progress" pins the project to the "What I'm working on" band and the home page "Now building" card. */
  status?: "in-progress" | "completed";
  /** One-line current status shown on in-progress cards. Update as the project moves forward. */
  statusNote?: string;
};
  export const projects: Project[] = [
    // ─────────────────────────────────────────────────────────────
    // 1. Summer 2026 internship — BEI IT Consulting (ML Engineer Intern)
    // ─────────────────────────────────────────────────────────────
    {
      title: "AI Customer Service Assistant & Quoting Automation",
      subtitle:
        "Machine Learning Engineer Intern at BEI IT Consulting (Summer 2026). Built a bilingual AI assistant that answers an auto insurance agency’s clients over WhatsApp, SMS, and voice, plus browser automation that quotes three carrier portals from a single entry.",
      bullets: [
        "Built a bilingual (English/Spanish) AI customer-service assistant on Claude and Twilio, reaching clients over WhatsApp, SMS, and phone calls.",
        "Designed escalation logic that recognizes when a conversation needs a person and hands it to an agent without the customer starting over, cutting response times by about 15%.",
        "Automated insurance quoting across three carrier portals with Playwright RPA, making the quoting workflow about 30% faster.",
      ],
      tags: [
        "Claude API",
        "Twilio",
        "Deepgram",
        "ElevenLabs",
        "Playwright",
        "RPA",
        "Conversational AI",
      ],
      details: {
        summary: [
          "For my second internship at BEI IT Consulting, I worked as a Machine Learning Engineer Intern with an independent auto insurance agency. The agency had two problems that cost staff time every day: clients waited too long for answers to routine questions, and every quote meant typing the same customer information into three different carrier portals.",
          "I built a bilingual AI customer-service assistant that answers clients in English and Spanish over WhatsApp, SMS, and voice. Messages run through Twilio and Claude, and phone calls use Deepgram for speech-to-text and ElevenLabs for text-to-speech, so Spanish-speaking callers get the same experience as English-speaking ones. The part I’m proudest of is the escalation logic: the assistant recognizes conversations it shouldn’t handle on its own, like claims or frustrated customers, and passes them to a human agent with the context intact.",
          "I also built robotic process automation with Playwright for the agency’s quoting process. Staff enter a customer’s information once, and the automation logs into Progressive, National General, and Assurance America, fills out each portal’s forms in that portal’s own format, and brings the quotes back. Instead of changing systems the agency couldn’t control, it automates the way people were already using them.",
        ],
        sections: [
          {
            title: "Main Functional Features",
            bullets: [
              "Omnichannel Assistant: One AI assistant serving clients over WhatsApp, SMS, and voice calls through Twilio.",
              "Bilingual Support: Full English and Spanish conversations, including spoken Spanish on phone calls.",
              "Voice Pipeline: Deepgram speech-to-text → Claude → ElevenLabs text-to-speech for natural phone conversations.",
              "Human Escalation: Detects cases that need a person (claims, upset customers) and hands off to an agent without the customer repeating themselves.",
              "Single-Entry Quoting: Staff enter customer data once, and the automation fills out all three carrier portals.",
              "Per-Portal Automation: Separate Playwright flows for Progressive, National General, and Assurance America, each matching that portal’s forms and field order.",
            ],
          },
          {
            title: "Technical Stack",
            bullets: [
              "LLM: Claude (Anthropic API) for conversation handling and escalation decisions",
              "Messaging & Telephony: Twilio (WhatsApp, SMS, voice)",
              "Speech: Deepgram (speech-to-text), ElevenLabs (text-to-speech)",
              "Automation / RPA: Playwright browser automation",
              "Targets: Progressive, National General, and Assurance America agent portals",
            ],
          },
          {
            title: "Key Challenges",
            bullets: [
              "Knowing When AI Shouldn’t Answer: Defining which conversations the assistant could handle and which had to go to a person, so the agency could trust it with real clients.",
              "Parity Across Languages and Channels: Making sure Spanish speakers on a phone call got the same quality of help as English speakers over text.",
              "Three Portals, Three Formats: Each carrier portal has its own fields, field order, loading behavior, and multi-step forms, so the automation had to be built and kept reliable for each one separately.",
            ],
          },
          {
            title: "Impact",
            bullets: [
              "Cut client response times by about 15%.",
              "Made the quoting workflow about 30% faster.",
              "Reduced data-entry errors by removing the need to retype the same customer information three times.",
              "Shipped to the agency’s real clients, not just as a prototype.",
            ],
          },
        ],
      },
    },

    {
      title: "Personalized AI Chatbot (Suit Tailoring)",
      subtitle:
        "AI-powered virtual chatbot using AWS Titan Image Generator to create occasion-matched outfit previews from a customer photo, event context, measurements, and the store’s suit catalog.",
      bullets: [
        "Defined the AWS Titan conditioning schema (photo + venue/event context + measurements + catalog metadata) to drive relevant suit outputs.",
    "Set up the cloud foundations for testing (asset storage, SDK/service integration, and a AWS cloud services suit-catalog database).",
    "Trained/tuned the generation workflow through iterative tests and produced the initial validation outputs for stakeholders.",
      ],
      tags: [
        "Titan Image Generator",
        "AWS S3 Buckets",
        "AWS SDK Services",
        "Generative AI",
        "Machine Learning",
        "Model-Tuning and Evaluation",
        "Cloud Architecture",
      ],
      details: {
        summary: [
          "Built a generative-AI concept to help a 25-location suit/tux tailoring & rental company expand its online presence through a personalized “try-on” experience. The idea: a customer submits (1) a full-body photo, (2) event/venue details (text and/or image), (3) body measurements, and the system returns AI-generated previews of the customer wearing multiple suit options that match the occasion—complete with a realistic venue context.",
          "My primary responsibility was owning the AWS Titan Image Generator side of the system: defining the conditioning elements that would drive the generation quality, structuring the inputs so the model could make relevant style decisions, and producing the initial test runs that validated whether the outputs met business expectations (occasion-appropriate styling, brand consistency, and usable recommendations). To enable this, I set up the foundational cloud components needed to support training/testing workflows—covering asset storage, service integration via SDKs, a suit catalog database, and Titan configuration with structured information about suit types, intended use cases, and venue/style matching.",
        ],
        sections: [
          {
            title: "Main Functional Features",
            bullets: [
              "Customer Input Bundle (4-part conditioning): Ingests a full-body customer image, event/venue description or reference photo, measurements, and the store’s suit catalog to guide generation.",
              "Occasion-Aware Suit Recommendations: Uses venue/event context (wedding, gala, business, etc.) to prioritize appropriate styles, colors, and formality levels from the catalog.",
              "Catalog-Driven Generation: Connects generated outputs to real inventory (available suit models), ensuring recommendations map to what the company can actually sell/rent.",
              "Multi-Option Visual Outputs: Returns several suit variations per request (different styles/tiers), enabling a “compare options” shopping flow.",
              "Test & Evaluation Harness: Structured testing workflow used to validate early outputs (quality, consistency, suitability, and catalog alignment) before proposing production deployment.",
              "Scalable Design for Multi-Location Retail: Built around a shared catalog + location-aware availability concept (supporting future expansion into per-store inventory and regional offerings).",
            ],
          },
          {
            title: "Technical Stack",
            bullets: [
              "Cloud Platform: AWS (Titan Image Generator for generative outputs + supporting cloud services)",
              "Storage: AWS S3 Buckets for asset management (customer photos, reference images, generated outputs)",
              "Database: AWS Cloud Database (inventory + metadata such as style category, formality level, recommended occasions, and fit notes)",
              "Integration / SDK Services: AWS SDK–based integration for orchestrating requests, retrieving catalog data, and storing results",
              "Model “Training” / Tuning Approach: Defining the conditioning schema (inputs + catalog attributes), building prompt/templates and style rules, iterating on parameters, and running initial validation tests to improve relevance and consistency",
              "Security Foundations: Access control concepts (permissions/IAM-style roles), and separation of customer assets from generated outputs (privacy-aware architecture)",
            ],
          },
          {
            title: "Key Challenges",
            bullets: [
              "Executive Communication Under Real Constraints: Presented the solution to a group of executives, focusing on both technical feasibility and business ROI—turning model behavior and architecture decisions into understandable value.",
              "Communication with AWS Service Teams: Collaborated with AWS support and solution architects to clarify Titan capabilities, best practices for conditioning inputs, and optimal integration patterns.",
              "Cost vs. Benefit Reality Check: Although the concept was technically strong, the project was ultimately deemed too cost-heavy for the client’s needs at the time. This became a key takeaway: even as AI becomes a major business driver, custom GenAI experiences can be expensive (in infrastructure, implementation, maintenance, and data handling), and the best solution must match the organization’s budget and operational maturity.",
            ],
          },
          {
            title: "Impact",
            bullets: [
              "Created a clear GenAI product vision for modernizing a traditional tailoring/rental experience into an interactive online flow.",
              "Validated feasibility through initial Titan tests, demonstrating how customer inputs + venue context + measurements + a suit catalog can produce meaningful, personalized visuals",
              "Translated technical work into executive-level value, connecting the AI workflow to measurable retail outcomes",
            ],
          },
        ],
      },
    },
    {
      title: "Ventas en Campo (Android App for Field Sales)",
      subtitle:
        "Native Android app for field sales: routes, GPS check-in/out, offline sync, and executive KPIs.",
      bullets: [
        "Built a native Android app integrated with Odoo ERP for field sales operations.",
    "Implemented route planning, GPS visit validation (check-in/out), and Google Maps navigation.",
    "Designed offline-first flows with local SQLite storage and automatic sync when online.",
    "Supported executive dashboards for KPIs, coverage, and sales performance reporting.",
      ],
      tags: [
        "Kotlin",
        "Android",
        "Google Maps API",
        "SQLite (Offline)",
        "Odoo 15/18",
        "REST / JSON-RPC",
        "MVVM",
      ],
      details: {
        summary: [
          "Built a native Android (Kotlin) app integrated with Odoo ERP to manage field sales reps for a toast manufacturing company. Supported operations across 5,000+ points of sale in Monterrey, Saltillo, and Linares, improving route efficiency and customer coverage while enabling real-time decisions with executive dashboards.",
          "End-to-end route management with automatic optimization and Google Maps GPS navigation. Includes real-time visit tracking with geo-validated check-in/check-out, sales order capture, automatic offline/online synchronization, and an analytics module with executive KPIs for performance, coverage, and productivity by salesperson and geographic zone.",
          "Kotlin + Android SDK + Google Maps API + Material Design on the frontend using MVVM architecture. Odoo 15/18 (Python) on the backend integrated via REST/JSON-RPC, local SQLite persistence for offline mode, and custom Odoo modules for analytics, routing, customer coverage, and performance reporting.",
        ],
        sections: [
          {
            title: "Main Functional Features",
            bullets: [
              "Sales Route Management: Planning and optimization of daily routes with automatic visit sequencing.",
              "GPS Tracking: Automatic location logging at each visit, with validated check-in/check-out.",
              "Google Maps Integration: Real-time navigation and route optimization between clients.",
              "Visit Management: Capturing sales orders, controlling available inventory, and logging activities.",
              "Offline Mode: Automatic data synchronization once connectivity is restored.",
              "Coverage Analytics: Performance analysis by salesperson, routes, and clients.",
              "Executive Module: Real-time KPIs, territorial coverage, and sales metrics.",
            ],
          },
          {
            title: "Technical Stack",
            bullets: [
              "Frontend: Kotlin, Android SDK, Google Maps API, Material Design",
              "Backend: Odoo 15/18, Python",
              "Integration: REST / JSON-RPC API with Odoo",
              "Local Database: SQLite for offline mode",
              "Geolocation: Android Location Services, GPS tracking",
              "Architecture: MVVM pattern, Repository pattern",
            ],
          },
          {
            title: "Custom Odoo Modules",
            bullets: [
              "Sales analytics module with executive dashboards",
              "Route assignment and tracking system",
              "Customer coverage control by geographic zone",
              "Sales rep performance and productivity reports",
            ],
          },
          {
            title: "Impact",
            bullets: [
              "Improved route efficiency",
              "Increased customer coverage",
              "Enabled real-time, data-driven decision-making",
            ],
          },
        ],
      },
    }, 
    // ─────────────────────────────────────────────────────────────
    // SecurePass — personal project (Nov 2025)
    // ─────────────────────────────────────────────────────────────
    {
      title: "SecurePass (Command-Line Password Manager)",
      subtitle:
        "Personal security project (November 2025): a Python command-line password manager that encrypts every stored credential with AES-GCM using a key derived from a master password.",
      bullets: [
        "Encrypts all stored credentials with AES-GCM, using a key derived from the user’s master password.",
        "Built-in password strength checking that flags weak credentials.",
        "Generates high-entropy random passwords on demand.",
      ],
      tags: ["Python", "AES-GCM", "Cryptography", "Key Derivation", "CLI", "Secure Design"],
      details: {
        summary: [
          "SecurePass is a command-line password manager I built in Python to put my cybersecurity fundamentals into practice. Every stored credential is encrypted with AES-GCM, an authenticated encryption mode, so saved data stays unreadable without the key and any tampering is detected when it’s decrypted.",
          "Instead of relying on a stored secret, the encryption key is derived from the user’s master password. On top of the vault itself, SecurePass checks the strength of passwords as they’re added and can generate high-entropy random passwords, so it helps users create good credentials instead of only storing them.",
        ],
        sections: [
          {
            title: "Main Functional Features",
            bullets: [
              "Encrypted Vault: Every credential is encrypted with AES-GCM before it’s saved.",
              "Master Password: A single master password unlocks the vault through a derived encryption key.",
              "Strength Checking: Flags weak or easily guessed passwords.",
              "Password Generator: Creates high-entropy random passwords.",
              "Command-Line Interface: Simple commands for adding, retrieving, and generating credentials.",
            ],
          },
          {
            title: "Technical Stack",
            bullets: [
              "Language: Python",
              "Encryption: AES-GCM (authenticated encryption)",
              "Key Management: Encryption key derived from the master password",
              "Interface: Command-line application",
            ],
          },
          {
            title: "Security Concepts Applied",
            bullets: [
              "Authenticated Encryption: AES-GCM provides both confidentiality and integrity, so altered data fails to decrypt instead of returning garbage.",
              "Password-Based Key Derivation: Turning a human password into a strong encryption key.",
              "Entropy in Practice: Generating passwords with enough randomness to resist guessing and brute-force attacks.",
            ],
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────
    // Platform X — team project (Spring 2025)
    // ─────────────────────────────────────────────────────────────
    {
      title: "Platform X (Scheduling Web App)",
      subtitle:
        "Three-person team project (Spring 2025): a scheduling web app built with Kotlin Compose Multiplatform and deployed to the browser through WebAssembly. I owned authentication and access control.",
      bullets: [
        "Co-developed a scheduling web app in Kotlin Compose Multiplatform on a three-person team.",
        "Deployed the app to the web with Kotlin’s WebAssembly (Wasm) target.",
        "Implemented Firebase Authentication with token validation and role-based access control, the layer every other feature depended on.",
      ],
      tags: ["Kotlin", "Compose Multiplatform", "WebAssembly", "Firebase Auth", "Role-Based Access Control"],
      details: {
        summary: [
          "Platform X is a scheduling web app my three-person team built in Kotlin Compose Multiplatform. We compiled it to WebAssembly, so the same Kotlin UI code runs directly in the browser.",
          "My part was the security layer. I implemented Firebase Authentication for sign-in, token validation so only verified users could reach the app’s data, and role-based access control so each user could only see and do what their role allowed. Every other feature sat behind login, so auth had to be stable early for my teammates to build on top of it.",
        ],
        sections: [
          {
            title: "Main Functional Features",
            bullets: [
              "User Sign-In: Account creation and login through Firebase Authentication.",
              "Token Validation: Requests are checked against a valid Firebase token before data is returned.",
              "Role-Based Access: Different permissions and views depending on the user’s role.",
              "Scheduling: Core scheduling features built by the team on top of the shared auth layer.",
            ],
          },
          {
            title: "Technical Stack",
            bullets: [
              "Language: Kotlin",
              "UI Framework: Compose Multiplatform",
              "Deployment Target: WebAssembly (Kotlin/Wasm) in the browser",
              "Authentication: Firebase Authentication",
              "Access Control: Role-based access control (RBAC)",
            ],
          },
          {
            title: "Key Challenges",
            bullets: [
              "Auth as a Dependency: Because every feature needed a signed-in user and a role, authentication had to be finished and reliable before the rest of the team could move forward.",
              "Kotlin on the Web: Compose Multiplatform’s WebAssembly target is newer and less documented than its Android and desktop targets.",
            ],
          },
        ],
      },
    },

    {
      title: "Personalized Portfolio Website",
      subtitle: "Designed and developed a multipage responsive protfolio website to expand on my projects and skills." +
      " Built using Next.js and Tailwind CSS, this site serves to showcase my experience in data/ML and app creation projects effectively."+
      " Hosted on Vercel for optimal performance and accessibility.",
      bullets: [
        "Multi-page layout with dedicated views for career, projects, education, and contact.",
        "Built the site with Next.js App Router, TypeScript, and Tailwind CSS, using a sticky global navigation and responsive grid layouts for desktop and mobile.",
        "Implemented reusable data models in lib/data.ts so new roles and projects can be added without changing layout code.",
        "Exposed serverless API routes (e.g., /api/contact, /api/projects) and wired an interactive contact form that posts to a backend endpoint, making the site behave like a real cloud app rather than a static brochure",
      ],
      tags: ["Next.js", "TypseScript", "Tailwind CSS", "Vercel"],
    },

    // ── In progress ──

    // ─────────────────────────────────────────────────────────────
    // 2. Senior capstone — Parkview Health AMSL (in progress, under NDA)
    // ─────────────────────────────────────────────────────────────
    {
      title: "Simulation Lab Management Software (Parkview Health Capstone)",
      status: "in-progress",
      statusNote: "Building the FastAPI endpoints and Microsoft 365 integration",
      subtitle:
        "Year-long senior capstone (2026–2027): a six-person team building management software for Parkview Health’s Advanced Medical Simulation Laboratory. I own the API and Microsoft 365 integration layer. In progress.",
      bullets: [
        "Designing and building the REST API in FastAPI that the frontend and every core feature rely on.",
        "Integrating Microsoft 365 through the Microsoft Graph API so lab events reach the calendars, email, and Teams that staff already use.",
        "Owning the MongoDB Atlas data model and data access layer for scheduling, intake requests, inventory, and maintenance.",
      ],
      tags: [
        "FastAPI",
        "Python 3.13",
        "MongoDB Atlas",
        "Microsoft Graph API",
        "Microsoft 365",
        "REST API Design",
      ],
      details: {
        summary: [
          "My senior capstone is a year-long project with a real sponsor, Parkview Health. Our six-person team is building management software for Parkview’s Advanced Medical Simulation Laboratory (AMSL), where clinicians train on simulated medical scenarios. The system brings the lab’s scheduling, training requests, equipment inventory, and maintenance into one place, with a dashboard, calendar, event management, an intake form, inventory and maintenance managers, and an admin panel.",
          "I own the API and integration layer. That covers designing and implementing the API in FastAPI, the MongoDB Atlas schema, and the data access layer the frontend builds on. The biggest piece is the Microsoft 365 integration: Parkview already runs on Microsoft, so I’m connecting the system to Outlook calendars, email, and Teams through the Microsoft Graph API, so lab events show up where staff already work instead of in yet another tool.",
          "The project is under an NDA, and Parkview keeps all rights to the source code, so I only share the features, my role, and the technology here. It’s currently in active development and runs through the 2026–2027 school year.",
        ],
        sections: [
          {
            title: "Main Functional Features",
            bullets: [
              "Dashboard: At-a-glance view of upcoming sessions, open requests, and lab status.",
              "Calendar & Event Management: Scheduling and managing simulation sessions and lab events.",
              "Intake Form: Structured requests for simulation training sessions.",
              "Inventory Manager: Tracking simulation equipment and supplies.",
              "Maintenance Manager: Logging and scheduling equipment maintenance.",
              "Admin Panel: User and system management for lab administrators.",
              "Microsoft 365 Integration: Syncing events and notifications with Outlook calendars, email, and Teams.",
            ],
          },
          {
            title: "Technical Stack",
            bullets: [
              "Language: Python 3.13",
              "API: FastAPI (REST)",
              "Database: MongoDB Atlas",
              "Integration: Microsoft Graph API (Outlook calendar, mail, Teams)",
              "Team Structure: Six engineers split across frontend, backend, and API/integration & database",
            ],
          },
          {
            title: "My Role: API & Integration",
            bullets: [
              "API design and implementation in FastAPI",
              "Database schema design in MongoDB Atlas",
              "Data access layer shared by the backend and frontend",
              "Microsoft 365 / Graph API integration for calendar, email, and Teams",
            ],
          },
          {
            title: "Key Challenges",
            bullets: [
              "Building for a Real Sponsor: Gathering requirements from Parkview and designing around how the lab actually works, under an NDA.",
              "Clean Contracts for Teammates: Other team members build directly on my endpoints, so I agree on API contracts and data shapes early and keep them documented.",
              "Learning a New Framework on the Job: Picking up FastAPI while building production-bound endpoints for the team.",
              "Enterprise Integration: Connecting to an organization’s existing Microsoft 365 environment instead of building a separate notification system.",
            ],
          },
        ],
      },
    },

    // ─────────────────────────────────────────────────────────────
    // 3. TripSplit — course group project (in progress)
    // ─────────────────────────────────────────────────────────────
    {
      title: "TripSplit (Group Travel Expense Tracker)",
      status: "in-progress",
      statusNote: "Sprint 2 of 4: shared fund balance and expense forms",
      subtitle:
        "Three-person team project: a mobile-first app for tracking travel budgets, splitting group expenses, and managing a shared trip fund. I own the shared fund feature and UI integration. In progress.",
      bullets: [
        "Building the shared group fund: member contributions, spending from the fund, and a running balance that feeds into group settlement.",
        "Leading UI integration, including the navigation flow, trip dashboard, and expense-logging forms that tie the team’s trip, expense, and fund features into one app.",
        "Connected Supabase to the team’s GitHub repo so the database schema is version-controlled and reviewed like code.",
      ],
      tags: [
        "React Native",
        "Expo",
        "Supabase",
        "PostgreSQL",
        "GitHub",
        "Agile / ClickUp",
      ],
      details: {
        summary: [
          "TripSplit is a travel expense app built by a three-person team for a software engineering course. Group trips get messy fast: someone pays for dinner, someone else covers the Airbnb, and the group also has money pooled together. TripSplit handles all of it in one place, with personal budget goals, group trips, shared expense splitting, a pooled trip fund, and currency conversion for international travel.",
          "My role is Shared Fund & UI Integration. On the logic side, I’m building the shared fund: members contribute up front, group expenses draw the balance down, and the app tracks who has put in what. That fund balance feeds into the team’s settlement logic, so the final “who owes whom” accounts for both shared expenses and fund contributions. On the UI side, I’m responsible for bringing the three workstreams (trips, expenses, and the fund) together into one consistent app instead of disconnected screens.",
          "We work in sprints tracked in ClickUp, with a product backlog of user stories split across four build sprints and a final sprint dedicated to testing. Early on, I connected Supabase to our GitHub repo using the Supabase GitHub integration, so database changes are tracked and reviewed alongside our code.",
        ],
        sections: [
          {
            title: "Main Functional Features",
            bullets: [
              "Budget Goals & Tracking: Personal travel budgets with expense tracking against them.",
              "Group Trips: Create trips, add travelers, and view trip spending history.",
              "Expense Splitting: Record shared expenses, choose who was involved, and calculate who owes whom.",
              "Shared Fund: Log member contributions, record fund spending, and view the live fund balance and contribution history.",
              "Group Balances: Each member’s balance across fund contributions and shared expenses, updated automatically.",
              "Currency Exchange: Converts expenses logged in foreign currencies.",
              "Trip Dashboard: One screen showing fund balance, member balances, and recent activity.",
            ],
          },
          {
            title: "Technical Stack",
            bullets: [
              "Frontend: React Native with Expo (mobile-first)",
              "Backend & Database: Supabase (PostgreSQL)",
              "Version Control: GitHub with the Supabase GitHub integration (schema stored in the repo)",
              "Project Management: ClickUp (product backlog, sprint planning)",
            ],
          },
          {
            title: "My Role: Shared Fund & UI Integration",
            bullets: [
              "Shared fund data model: contributions, fund spending, and running balance",
              "Fund balance, member contribution, and fund transaction history views",
              "My trip balance and all-member balance views",
              "Automatic group balance updates (built jointly with the settlement logic owner)",
              "Navigation flow, trip dashboard, and expense-logging forms",
            ],
          },
          {
            title: "Key Challenges",
            bullets: [
              "Two Kinds of Money: A pooled fund is a running balance, while split expenses are per-transaction, and both have to come together correctly at settlement.",
              "Cross-Team Dependencies: Balance views depend on a teammate’s settlement logic, so sprint order and early syncs on data shapes matter.",
              "Integration Without Silos: Making three people’s features feel like one app, with shared components and consistent navigation.",
            ],
          },
        ],
      },
    },
  ];
