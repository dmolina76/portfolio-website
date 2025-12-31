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
};
  export const projects: Project[] = [
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
    }   
  ];
  