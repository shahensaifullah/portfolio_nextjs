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
            en: "Bangladesh (remote collaboration with EU clients)",
            de: "Bangladesch (Remote-Zusammenarbeit mit EU-Kunden)",
        },
        start: "Dec 2022",
        end: "Mar 2025",
        bullets: {
            en: [
                "Worked on backend development for multiple production web platforms using Django and Django REST Framework",
                "Designed and maintained relational database models and implemented REST APIs for business workflows",
                "Implemented role-based access control and multi-stage approval/review logic where required",
                "Contributed to upgrading and refactoring core ordering and workflow modules",
                "Participated in migrating legacy production data and validating data consistency",
                "Improved performance through query optimization and practical use of Redis caching/search patterns",
                "Integrated third-party services such as SMS APIs and supported Docker-based deployments",
                "Collaborated in sprint planning, code reviews (PR review/merge), and regular client feedback sessions",
                "Supported and guided junior developers in backend tasks when needed",
            ],
            de: [
                "Backend-Entwicklung für mehrere produktive Webplattformen mit Django und Django REST Framework",
                "Relationale Datenbankmodelle entworfen und gepflegt sowie REST-APIs für Business-Workflows umgesetzt",
                "Role-Based Access Control und mehrstufige Review-/Freigabelogik implementiert",
                "An Upgrade und Refactoring zentraler Order- und Workflow-Module mitgearbeitet",
                "Bei der Migration von Legacy-Produktivdaten unterstützt und Datenkonsistenz geprüft",
                "Performance verbessert durch Query-Optimierung und pragmatische Nutzung von Redis (Caching/Search)",
                "Externe Services wie SMS-APIs integriert und Docker-basierte Deployments unterstützt",
                "In Sprint-Planung, Code-Reviews (PR Review/Merge) und regelmäßigen Client-Feedback-Runden mitgearbeitet",
                "Junior-Entwickler bei Backend-Aufgaben unterstützt und fachlich begleitet",
            ],
        },
    },
];