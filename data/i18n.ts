export type Lang = "en" | "de";

export const i18n = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
            education: "Education",
        },
        buttons: {
            viewProjects: "View Projects",
            downloadCV: "Download CV",
            contact: "Contact",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub",
            cv: "CV",
        },
        hero: {
            badge: "Backend Engineer • AI & Data Analytics (M.Sc.)",
            title: "I build reliable backend systems with Django, PostgreSQL, and Redis.",
            subtitle:
                "Based in Ulm, Germany. I’ve led backend work on production platforms: recruitment (ProHR) and pharma ordering workflows (HealthOS). Clean APIs, database design, performance.",
            techTitle: "Core stack",
        },
        about: {
            title: "About",
            headline: "Backend Engineer (2+ years)",
            techChips: [
                "Python",
                "Django/DRF",
                "PostgreSQL",
                "Redis",
                "Elasticsearch",
                "Celery",
                "Docker",
                "Next js",
                "Vue js",
            ],
            paragraph:
                "Backend engineer with 2+ years of experience building and maintaining production systems. Worked on real-world platforms including recruitment and pharmaceutical ordering systems, focusing on scalable architecture, performance, and reliability. Take ownership of backend components from design to deployment, while collaborating closely with product and frontend teams.",
            contributionTitle: "How I contribute",
            contributionBullets: [
                "End-to-end features: scalable APIs/schemas + integrated frontends (Nextjs, Vuejs)",
                "Designed REST APIs, relational database schemas, and backend architecture",
                "Improved system performance using query optimization, indexing, caching, and background tasks",
                "Implemented RBAC, permission systems, and workflow-driven backend logic",
                "Owned backend features end-to-end, from design and implementation to deployment and maintenance",
                "Contributed across the stack when needed using Next.js and Vue.js",
            ],
            currently: "Open to Working Student/Junior Backend or Full-Stack Software developer roles in Germany",
        },
        skills: {
            title: "Skills",
            subtitle:
                "Grouped the way teams actually work: backend, data stores, delivery, collaboration.",
        },
        projects: {
            title: "Projects",
            subtitle:
                "A few production projects I worked on. Real workflows, data design, reliability.",
            highlights: "Highlights",
            tech: "Tech",
            role: "Role",
        },
        experience: {
            title: "Experience",
            subtitle:
                "Systems, workflows, performance, and delivery ownership in real teams.",
        },
        contactSection: {
            title: "Contact",
            subtitle:
                "If you’re hiring for backend roles (Werkstudent / Junior), I’m happy to share details or walk through my projects.",
            location: "Location",
            email: "Email",
            phone: "Phone",
        },
    },

    de: {
        nav: {
            home: "Start",
            about: "Über mich",
            skills: "Skills",
            projects: "Projekte",
            experience: "Erfahrung",
            contact: "Kontakt",
            education: "Ausbildung",
        },
        buttons: {
            viewProjects: "Projekte ansehen",
            downloadCV: "Lebenslauf herunterladen",
            contact: "Kontakt",
            email: "E-Mail",
            linkedin: "LinkedIn",
            github: "GitHub",
            cv: "CV",
        },
        hero: {
            badge: "Backend Engineer • KI & Data Analytics (M.Sc.)",
            title: "Ich entwickle zuverlässige Backend-Systeme mit Django, PostgreSQL und Redis.",
            subtitle:
                "Wohnhaft in Ulm. Ich habe Backend-Entwicklung für Produktivsysteme verantwortet: Recruiting (ProHR) und Pharma-Bestellworkflows (HealthOS). Fokus: saubere APIs, Datenbankdesign, Performance.",
            techTitle: "Kern-Stack",
        },
        about: {
            title: "Über mich",
            headline: "Backend Engineer (2+ Jahre)",
            techChips: [
                "Python",
                "Django/DRF",
                "PostgreSQL",
                "Redis",
                "Elasticsearch",
                "Celery",
                "Docker",
                "Next.js",
            ],
            paragraph:
                "Backend Engineer mit 2+ Jahren Erfahrung im Aufbau und Betrieb produktiver Systeme. Arbeit an realen Plattformen, darunter Recruiting- und Pharma-Bestellsysteme, mit Fokus auf skalierbare Architektur, Performance und Zuverlässigkeit. Übernehme Verantwortung für Backend-Komponenten von Design bis Deployment und arbeite eng mit Produkt- und Frontend-Teams zusammen.",
            contributionTitle: "Wie ich beitrage",
            contributionBullets: [
                "End-to-End Features: skalierbare APIs/Schemata + integrierte Frontends (Nextjs, Vuejs)",
                "REST APIs, Datenbankschemata und Backend-Architektur entworfen und implementiert",
                "Systemperformance durch Query-Optimierung, Indexing, Caching und Background-Tasks verbessert",
                "RBAC-, Berechtigungs- und Workflow-Systeme implementiert",
                "Backend-Features eigenständig von Design bis Deployment umgesetzt",
                "Bei Bedarf Full-Stack beigetragen mit Next.js und Vue.js",
            ],
            currently: "Offen für Werkstudenten- / Junior-Backend- oder Full-Stack-Software-Developer-Rollen in Deutschland",
        },

        skills: {
            title: "Skills",
            subtitle:
                "So gruppiert, wie Teams wirklich arbeiten: Backend, Datastores, Delivery, Zusammenarbeit.",
        },
        projects: {
            title: "Projekte",
            subtitle:
                "Einige produktive Projekte. Fokus auf Workflows, Datenmodelle und Zuverlässigkeit.",
            highlights: "Highlights",
            tech: "Tech",
            role: "Rolle",
        },
        experience: {
            title: "Erfahrung",
            subtitle:
                "Systeme, Workflows, Performance und Delivery-Verantwortung im Team.",
        },
        contactSection: {
            title: "Kontakt",
            subtitle:
                "Wenn ihr Backend-Rollen (Werkstudent / Junior) besetzt, stelle ich gern Details vor oder gehe Projekte gemeinsam durch.",
            location: "Standort",
            email: "E-Mail",
            phone: "Telefon",
        },
    },
} as const;
