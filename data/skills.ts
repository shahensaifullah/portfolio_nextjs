import type { Lang } from "@/data/i18n";

export type SkillGroup = {
    title: Record<Lang, string>;
    items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: { en: "Backend", de: "Backend" },
        items: ["Python", "Django", "Django REST Framework", "REST API Design", "RBAC"],
    },
    {
        title: { en: "Databases & Search", de: "Datenbanken & Suche" },
        items: ["PostgreSQL", "Redis", "Elasticsearch", "Query Optimization", "Caching"],
    },
    {
        title: { en: "DevOps", de: "DevOps" },
        items: ["Docker", "Linux Basics", "CI/CD (GitHub workflow)", "Deployment support"],
    },
    {
        title: { en: "Frontend (collaboration)", de: "Frontend (Zusammenarbeit)" },
        items: ["Next.js", "React", "Tailwind CSS"],
    },
];