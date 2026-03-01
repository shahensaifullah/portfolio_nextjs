import type { Lang } from "@/data/i18n";

export type ExperienceItem = {
    company: string;
    title: Record<Lang, string>;
    location?: Record<Lang, string>;
    start: string;
    end: string;
    bullets: Record<Lang, string[]>;
};

export const experience: ExperienceItem[] = [
    {
        company: "REPLIQ Limited",
        title: {
            en: "Backend Developer",
            de: "Backend Developer",
        },
        location: {
            en: "Bangladesh",
            de: "Bangladesch",
        },
        start: "Dec 2022",
        end: "Mar 2025",
        bullets: {
            en: [
                "Led backend development for multiple production-grade web platforms using Django and Django REST Framework",
                "Improved API response time by approximately 30–45% through PostgreSQL query optimization and indexing strategies",
                "Reduced heavy synchronous processing time by 50% by introducing Celery-based background task handling",
                "Implemented Redis caching and search patterns, reducing repeated database hits and improving lookup speed significantly",
                "Integrated Elasticsearch for advanced search, improving search accuracy and filtering efficiency for large datasets",
                "Designed and maintained scalable relational database schemas supporting complex business workflows",
                "Implemented role-based access control (RBAC) and multi-stage approval/review systems",
                "Contributed to upgrading and refactoring core ordering modules, improving maintainability and reducing technical debt",
                "Participated in legacy production data migration and ensured financial/data consistency validation",
                "Improved system reliability by adding structured error handling and backend test cases",
                "Took ownership of sprint-based delivery cycles (weekly), ensuring feature completion aligned with roadmap",
                "Led sprint planning discussions and actively participated in PR reviews and architecture decisions",
                "Contributed to product brainstorming sessions, proposing feature enhancements and long-term scalability improvements",
                "Guided and supported junior developers in backend architecture and implementation practices",
            ],
            de: [
                "Backend-Entwicklung für mehrere produktive Webplattformen mit Django und Django REST Framework geleitet",
                "API-Antwortzeiten durch PostgreSQL Query-Optimierung und Index-Strategien um ca. 30–45% verbessert",
                "Durch Einführung von Celery für asynchrone Background-Tasks die synchrone Verarbeitungszeit um ca. 50% reduziert",
                "Redis-Caching und Suchmuster implementiert, wodurch wiederholte Datenbankabfragen reduziert wurden",
                "Elasticsearch für erweiterte Suchfunktionen integriert und Suchgenauigkeit bei großen Datenmengen deutlich verbessert",
                "Skalierbare relationale Datenbankschemata für komplexe Business-Workflows entworfen und gepflegt",
                "Role-Based Access Control (RBAC) und mehrstufige Review-/Freigabeprozesse implementiert",
                "Zentrale Order-Module refaktoriert und technische Schulden reduziert",
                "Legacy-Produktivdaten migriert und Daten- sowie Finanzkonsistenz validiert",
                "Systemstabilität durch strukturierte Fehlerbehandlung und Backend-Testfälle erhöht",
                "Verantwortung für sprint-basierte Lieferzyklen (wöchentlich) übernommen und termingerechte Umsetzung sichergestellt",
                "Aktiv an Sprint-Planung, PR-Reviews und Architekturentscheidungen mitgewirkt",
                "In Brainstorming-Sessions zur Weiterentwicklung von Features und langfristiger Skalierbarkeit beigetragen",
                "Junior-Entwickler fachlich unterstützt und in Backend-Architektur angeleitet",
            ],
        },
    },
];