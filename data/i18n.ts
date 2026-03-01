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
                "Next.js",
            ],
            paragraph:
                "I have 2+ years of backend experience building production systems with Python, Django/DRF, PostgreSQL, Redis, Elasticsearch, Celery, Docker, and Next.js. In software teams, I take ownership from API and schema design to performance improvements, while keeping interfaces clean, maintainable, and collaborative across product and engineering.",
            contributionTitle: "How I contribute",
            contributionBullets: [
                "Design scalable APIs and database schemas",
                "Improve performance through query optimization, caching, and Celery background tasks",
                "Implement RBAC and complex workflow states",
                "Deliver reliably through clear PRs, code reviews, and documentation",
                "Contribute to product brainstorming and future feature planning",
            ],
            currently: "Currently: Looking for a Working Student / Junior Backend role in Germany",
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
                "Ich habe 2+ Jahre Backend-Erfahrung beim Aufbau produktiver Systeme mit Python, Django/DRF, PostgreSQL, Redis, Elasticsearch, Celery, Docker und Next.js. In Software-Teams übernehme ich Verantwortung von API- und Schema-Design bis zu Performance-Verbesserungen und sorge dabei für saubere, wartbare Schnittstellen sowie eine enge Zusammenarbeit mit Produkt und Engineering.",
            contributionTitle: "Wie ich beitragen kann",
            contributionBullets: [
                "Skalierbare APIs und Datenbankschemata entwerfen",
                "Performance verbessern durch Query-Optimierung, Caching und Celery-Background-Tasks",
                "RBAC und komplexe Workflow-Zustände umsetzen",
                "Zuverlässig liefern durch klare PRs, Code-Reviews und Dokumentation",
                "Produktideen und zukünftige Features aktiv mitgestalten",
            ],
            currently: "Aktuell: Auf der Suche nach einer Werkstudenten- / Junior-Backend-Rolle in Deutschland",
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
