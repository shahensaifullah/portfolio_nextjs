import type { Lang } from "@/data/i18n";

export type ProjectOwner = "repliq" | "personal" | "client";

export type ProjectMeta = {
    owner: ProjectOwner;
    ownerName?: string;
};

export type ProjectLinks = {
    website?: string;
    github?: string;
    demo?: string;
};

export type ProjectDuration = {
    start: {
        month: number; // 1–12
        year: number;
    };
    end?: {
        month: number;
        year: number;
    };
    isOngoing?: boolean;
};

function getDurationStatusBadge(duration: ProjectDuration, lang: Lang) {
    if (duration.isOngoing) {
        return {
            label: lang === "de" ? "● Aktiv" : "● Active",
            variant: "default" as const,
        };
    }

    return {
        label: lang === "de" ? "○ Abgeschlossen" : "○ Completed",
        variant: "outline" as const,
    };
}

function getOwnerLabel(meta: ProjectMeta, lang: Lang) {
    if (meta.ownerName) return meta.ownerName;

    if (meta.owner === "repliq") return "REPLIQ Limited";
    if (meta.owner === "personal") return lang === "de" ? "Privatprojekt" : "Personal";
    return lang === "de" ? "Kunde" : "Client";
}

function getOwnerIcon(owner: string) {
    if (owner === "personal") return "👤";
    return "🏢";
}


export type Project = {
    id: string;
    title: Record<Lang, string>;
    about: Record<Lang, string>;
    role: Record<Lang, string>;
    duration: ProjectDuration;
    whatIDid: Record<Lang, string[]>;
    businessImpact: Record<Lang, string[]>;
    tech: string[];
    links?: ProjectLinks;
    meta: ProjectMeta;
};

export const projects: Project[] = [
    {
        id: "shikhon",

        title: {
            en: "Shikhon — AI-assisted Online Learning Platform for Bangladeshi Curriculum",
            de: "Shikhon — KI-gestützte Online-Lernplattform für den bangladeschischen Lehrplan",
        },

        about: {
            en:
                "An AI-assisted online learning platform designed for Bangladeshi students from elementary to high school. The platform combines structured lessons, practice exercises, animated explanatory videos, and real tutor-led classes. It also includes parental access to monitor student progress weekly and monthly. The system is designed to make education more accessible, engaging, and scalable.",
            de:
                "Eine KI-gestützte Online-Lernplattform für bangladeschische Schüler (Grundschule bis High School). Die Plattform kombiniert strukturierte Lektionen, Übungen, animierte Videos und tutor-geführte Live-Unterrichtseinheiten. Eltern können den Lernfortschritt wöchentlich und monatlich verfolgen. Ziel ist es, Bildung zugänglicher, verständlicher und skalierbar zu machen.",
        },

        role: {
            en: "Full-Stack Developer, System Architect & Product Owner (personal project)",
            de: "Full-Stack Entwickler, Systemarchitekt & Product Owner (Privatprojekt)",
        },

        duration: {
            start: { month: 2, year: 2026 },
            isOngoing: true,
        },

        meta: {
            owner: "personal",
            ownerName: "Personal Project",
        },

        whatIDid: {
            en: [
                "Defined product vision and created user stories for students, tutors, and parents",
                "Designed system architecture for scalable course delivery, progress tracking, and tutor workflows",
                "Researched and designed AI-assisted learning support using structured practice and explanatory video content",
                "Built frontend using Next.js, TypeScript, and shadcn/ui with modular, scalable component architecture",
                "Developed backend using Django and Django REST Framework with clean API boundaries",
                "Designed relational database schema for users, courses, lessons, tutor sessions, and progress tracking",
                "Implemented parent access model to monitor children's weekly and monthly learning progress",
                "Designed tutor workflow system where real tutors conduct classes based on structured learning plans",
                "Deployed early production version and configured domain, hosting, and environment",
            ],

            de: [
                "Produktvision definiert und User Stories für Schüler, Tutoren und Eltern erstellt",
                "Systemarchitektur für skalierbare Kursbereitstellung und Fortschrittsverfolgung entworfen",
                "KI-unterstütztes Lernkonzept mit Übungen und erklärenden Videos konzipiert",
                "Frontend mit Next.js, TypeScript und shadcn/ui entwickelt",
                "Backend mit Django und Django REST Framework implementiert",
                "Relationales Datenbankschema für Nutzer, Kurse, Lektionen und Fortschritt entworfen",
                "Elternzugang zur Fortschrittsüberwachung implementiert",
                "Tutor-Workflow für strukturierte Unterrichtspläne entworfen",
                "Frühe Version deployed und Hosting konfiguriert",
            ],
        },

        businessImpact: {
            en: [
                "Addresses real educational challenges in Bangladesh with scalable digital learning infrastructure",
                "Demonstrates full product ownership from idea, user research, architecture, and implementation",
                "Designed to support large-scale student learning with AI-assisted educational workflows",
                "Improves transparency and trust through parental progress tracking",
            ],

            de: [
                "Adressiert reale Bildungsprobleme mit skalierbarer digitaler Infrastruktur",
                "Demonstriert vollständige Produktverantwortung von Idee bis Implementierung",
                "Vorbereitet für KI-gestützte Lernprozesse",
                "Verbessert Transparenz durch Eltern-Fortschrittsberichte",
            ],
        },

        tech: [
            "Next.js",
            "TypeScript",
            "shadcn/ui",
            "Tailwind CSS",
            "Django",
            "Django REST Framework",
            "PostgreSQL",
            "Docker",
        ],

        links: {
            website: "https://shikhon.shahensaifullah.com",
        },
    },
    {
        id: "prohr",
        title: {
            en: "ProHR — Recruitment Platform (AI-assisted workflows)",
            de: "ProHR — Recruiting-Plattform (KI-gestützte Workflows)",
        },
        about: {
            en:
                "An end-to-end recruitment platform where HR teams manage the full hiring pipeline: job posts, candidate screening, multi-stage reviews, scoring, and decisions. HR can assign office staff as reviewers, run an initial screening test with auto-evaluation, and onboard staff via Excel with permission control.",
            de:
                "Eine End-to-End Recruiting-Plattform: HR steuert den gesamten Hiring-Prozess (Jobs, Screening, mehrstufige Reviews, Scoring, Entscheidungen). HR kann Mitarbeitende als Reviewer zuweisen, einen Screening-Test mit automatischer Auswertung nutzen und Office-Staff per Excel importieren inkl. Rechtevergabe.",
        },
        role: {
            en: "Backend Team Lead (built from scratch, led delivery)",
            de: "Backend Team Lead (von Grund auf aufgebaut, Delivery verantwortet)",
        },
        duration: {
            start: { month: 2, year: 2024 },
            end: { month: 12, year: 2024 },
            isOngoing: false,
        },
        meta: {
            owner: "repliq",
            ownerName: "REPLIQ Limited",
        },
        whatIDid: {
            en: [
                "Started the backend from scratch and designed the core relational database schema",
                "Defined API boundaries and review workflow states (screening → review → shortlist/reject) with consistent rules",
                "Implemented RBAC + granular permissions for owner/admin/reviewer roles",
                "Built candidate scoring and filtering so HR/reviewers can rank and shortlist efficiently",
                "Implemented Excel bulk onboarding to create staff accounts and assign permissions",
                "Used Redis-based search patterns for fast candidate/staff lookup",
                "Integrated Twilio/SMS and ensured email notifications for candidate updates",
                "Led sprint planning, task delegation, PR reviews/merges, and weekly client demos; mentored 2–4 backend devs under pressure",
            ],
            de: [
                "Backend von Grund auf gestartet und das relationale Datenbankschema entworfen",
                "API-Grenzen und Workflow-States definiert (Screening → Review → Shortlist/Reject) mit konsistenten Regeln",
                "RBAC + granulare Berechtigungen für Owner/Admin/Reviewer implementiert",
                "Kandidaten-Scoring und Filter gebaut, damit HR/Reviewer schnell ranken und auswählen können",
                "Excel Bulk-Onboarding umgesetzt (Staff-Accounts + Rechtevergabe)",
                "Redis-basierte Search-Patterns für schnelles Candidate/Staff Lookup genutzt",
                "Twilio/SMS integriert und E-Mail Benachrichtigungen für Candidate-Updates sichergestellt",
                "Sprint-Planung, Task-Delegation, PR-Reviews/Merges und wöchentliche Client-Demos geleitet; 2–4 Backend Devs betreut",
            ],
        },
        businessImpact: {
            en: [
                "Reduced manual coordination by centralizing hiring stages, reviews, and decisions in one system",
                "Enabled scalable team hiring by allowing HR to assign reviewers and compare scores across reviewers",
                "Improved onboarding speed via Excel import and permission templates",
            ],
            de: [
                "Manuelle Abstimmung reduziert durch zentrale Abbildung von Stages, Reviews und Entscheidungen",
                "Skalierbares Hiring ermöglicht (Reviewer zuweisen, Scores vergleichen, schneller entscheiden)",
                "Schnelleres Onboarding durch Excel-Import und Permission-Templates",
            ],
        },
        tech: [
            "Python",
            "Django",
            "Django REST Framework",
            "PostgreSQL",
            "Redis (search)",
            "Docker",
            "Twilio/SMS",
            "Next.js (frontend collaboration)",
        ],
        links: {
            website: "https://www.prohr.io/",
        },
    },

    {
        id: "healthos",
        title: {
            en: "HealthOS — B2B Pharmaceutical Platform (Order V2 + migration)",
            de: "HealthOS — B2B Pharma-Plattform (Order V2 + Migration)",
        },
        about: {
            en:
                "A high-traffic B2B pharmaceutical platform in Bangladesh with e-commerce, delivery tracking, and operational workflows. The main challenge: unify three different order sources into one ordering workflow and migrate legacy orders while keeping finance dashboards consistent.",
            de:
                "Eine stark frequentierte B2B Pharma-Plattform in Bangladesch mit E-Commerce, Delivery-Tracking und operativen Workflows. Hauptaufgabe: drei Order-Quellen in einen Workflow vereinheitlichen und Legacy-Orders migrieren, ohne die Finance-Dashboards zu brechen.",
        },
        role: {
            en: "Backend Lead",
            de: "Backend Lead",
        },
        duration: {
            start: { month: 7, year: 2024 },
            end: { month: 2, year: 2025 },
            isOngoing: false,
        },
        meta: {
            owner: "repliq",
            ownerName: "REPLIQ Limited",
        },
        whatIDid: {
            en: [
                "Led Order V2 upgrade to unify three order types into one consistent flow",
                "Implemented ordering logic across multiple sources (deliveryman orders, call orders, website orders)",
                "Planned and executed legacy data migration for orders and related entities",
                "Synced order updates with delivery tracking data to keep operations aligned",
                "Worked closely with finance-related logic to keep dashboard numbers consistent after migration",
                "Integrated SMS notifications for key order events and multi-person order handling",
            ],
            de: [
                "Order V2 Upgrade geleitet, um drei Order-Typen in einen konsistenten Flow zu bringen",
                "Order-Logik für mehrere Quellen umgesetzt (Deliveryman, Call Orders, Website Orders)",
                "Legacy-Datenmigration für Orders und abhängige Daten geplant und durchgeführt",
                "Order-Updates mit Delivery-Tracking synchronisiert, damit Operations konsistent bleibt",
                "Eng mit Finance-Logik gearbeitet, um Dashboard-Zahlen nach der Migration konsistent zu halten",
                "SMS Notifications für wichtige Order-Events und Multi-Person Handling integriert",
            ],
        },
        businessImpact: {
            en: [
                "Unified order handling reduced downstream complexity and duplicated logic",
                "Migration preserved business continuity while modernizing core ordering workflows",
                "Improved reliability of finance/operations views by keeping order + delivery data in sync",
            ],
            de: [
                "Vereinheitlichte Order-Verarbeitung reduziert Komplexität und doppelte Logik downstream",
                "Migration modernisierte den Kernprozess bei laufendem Betrieb (Business Continuity)",
                "Zuverlässigere Finance-/Operations-Ansichten durch synchronisierte Order- und Delivery-Daten",
            ],
        },
        tech: [
            "Django",
            "Django REST Framework",
            "PostgreSQL",
            "Elasticsearch",
            "Docker",
            "SMS API",
            "Next.js (frontend collaboration)",
        ],
        links: {
            website: "https://healthos.io/",
        },
    },

    {
        id: "pharmik",
        title: {
            en: "Pharmik — B2C Pharmaceutical Platform (archived)",
            de: "Pharmik — B2C Pharma-Plattform (Archiviert)",
        },
        about: {
            en:
                "A B2C pharmaceutical e-commerce platform (shop to end-customer), built in parallel to the broader pharma ecosystem. The project was discontinued due to budget constraints.",
            de:
                "Eine B2C Pharma-E-Commerce-Plattform (Shop → Endkunde), parallel zum Pharma-Ökosystem entwickelt. Das Projekt wurde aus Budgetgründen gestoppt.",
        },
        meta: {
            owner: "repliq",
            ownerName: "REPLIQ Limited",
        },
        role: {
            en: "Backend Developer (early-stage build)",
            de: "Backend Developer (Early-Stage Aufbau)",
        },
        duration: {
            start: { month: 12, year: 2022 },
            end: { month: 1, year: 2023 },
            isOngoing: false,
        },
        whatIDid: {
            en: [
                "Implemented core backend APIs required for B2C shopping flows",
                "Added Redis-based search for fast product lookup",
                "Integrated SMS notifications for key customer events",
                "Supported Dockerized environment and collaborated with frontend on API contracts",
            ],
            de: [
                "Core Backend-APIs für B2C Shopping-Flows umgesetzt",
                "Redis-basierte Suche für schnelles Product Lookup eingebaut",
                "SMS Notifications für zentrale Customer-Events integriert",
                "Docker-Setup unterstützt und API Contracts mit Frontend abgestimmt",
            ],
        },
        businessImpact: {
            en: [
                "Enabled a B2C channel foundation reusing pharma domain knowledge and workflows",
                "Provided a scalable backend base (even though the product stopped early)",
            ],
            de: [
                "Basis für einen B2C Kanal geschaffen (mit pharma-spezifischem Domain-Know-how)",
                "Skalierbare Backend-Grundlage geliefert (auch wenn das Produkt früh gestoppt wurde)",
            ],
        },
        tech: [
            "Django",
            "Django REST Framework",
            "PostgreSQL",
            "Redis (search)",
            "Docker",
            "SMS API",
            "Next.js (frontend collaboration)",
        ],
    },

    {
        id: "supplers",
        title: {
            en: "Supplers — Nordic B2B Furniture Platform (sprint-based)",
            de: "Supplers — Nordic B2B Möbel-Plattform (Sprint-basiert)",
        },
        about: {
            en:
                "A B2B furniture platform serving Nordic countries. I contributed on a sprint basis, implementing backend features assigned by the team lead.",
            de:
                "Eine B2B Möbel-Plattform für den nordischen Markt. Ich habe sprint-basiert geliefert und Backend-Features nach Vorgabe des Team Leads umgesetzt.",
        },
        role: {
            en: "Backend Developer (sprint delivery)",
            de: "Backend Developer (Sprint Delivery)",
        },
        duration: {
            start: { month: 5, year: 2023 },
            end: { month: 12, year: 2023 },
            isOngoing: false,
        },
        meta: {
            owner: "repliq",
            ownerName: "REPLIQ Limited",
        },
        whatIDid: {
            en: [
                "Implemented API endpoints within sprint scope for business workflows",
                "Improved performance by optimizing slow PostgreSQL queries",
                "Collaborated in sprint planning/reviews and aligned changes with team standards",
            ],
            de: [
                "API-Endpunkte im Sprint-Umfang für Business-Workflows umgesetzt",
                "Performance verbessert durch Optimierung langsamer PostgreSQL Queries",
                "In Sprint-Planung/Reviews mitgearbeitet und Änderungen an Team-Standards ausgerichtet",
            ],
        },
        businessImpact: {
            en: [
                "Delivered features predictably in sprints for an international B2B product",
                "Improved responsiveness in critical paths via query optimization",
            ],
            de: [
                "Features zuverlässig in Sprints für ein internationales B2B Produkt geliefert",
                "Bessere Responsiveness in kritischen Pfaden durch Query-Optimierung",
            ],
        },
        tech: ["Django", "Django REST Framework", "PostgreSQL"],
        links: {
            website: "https://www.supplers.com/",
        },
    },
];