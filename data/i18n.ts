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
            intro:
                "Backend-focused software engineer with experience building production-grade systems in recruitment and pharmaceutical e-commerce. I design structured data models, build reliable APIs, and lead backend delivery with a focus on clarity and long-term maintainability.",

            whatIDo: "What I do",
            lookingFor: "What I’m looking for",

            whatIDoBullets: [
                "Design scalable backend architectures and relational database schemas",
                "Translate complex business workflows into clean, testable API logic",
                "Build structured permission systems (RBAC) and multi-role workflows",
                "Handle production challenges: data migration, performance tuning, search optimization",
                "Lead backend teams: sprint planning, code reviews, technical decisions",
            ],

            lookingForBullets: [
                "Working Student or Junior Backend role in Germany",
                "Teams building real products with meaningful technical challenges",
                "Backend-heavy environments (APIs, data systems, distributed workflows)",
                "Opportunities to grow into system design and technical ownership",
            ],
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
            intro:
                "Backend-orientierter Software Engineer mit Erfahrung in produktiven Systemen im Recruiting- und Pharma-E-Commerce-Bereich. Ich entwerfe strukturierte Datenmodelle, entwickle zuverlässige APIs und übernehme Verantwortung für Backend-Delivery mit Fokus auf Klarheit und langfristige Wartbarkeit.",

            whatIDo: "Was ich mache",
            lookingFor: "Wonach ich suche",

            whatIDoBullets: [
                "Skalierbare Backend-Architekturen und relationale Datenbankschemata entwerfen",
                "Komplexe Business-Workflows in saubere, testbare API-Logik übersetzen",
                "Strukturierte Permission-Systeme (RBAC) und Multi-Rollen-Workflows implementieren",
                "Produktionsherausforderungen lösen: Datenmigration, Performance-Tuning, Search-Optimierung",
                "Backend-Teams führen: Sprint-Planung, Code-Reviews, technische Entscheidungen",
            ],

            lookingForBullets: [
                "Werkstudent oder Junior Backend Position in Deutschland",
                "Teams, die reale Produkte mit echten technischen Herausforderungen bauen",
                "Backend-lastige Umgebungen (APIs, Daten-Systeme, verteilte Workflows)",
                "Möglichkeiten, in Richtung System Design und technische Verantwortung zu wachsen",
            ],
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