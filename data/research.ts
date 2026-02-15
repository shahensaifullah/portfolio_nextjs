import type { Lang } from "@/data/i18n";

export type ResearchItem = {
    title: Record<Lang, string>;
    year: string;
    venue?: Record<Lang, string>; // journal/conference/university project
    authors?: string; // optional
    link: string; // scholar link
    linkTitle: string; // scholar link title
    description?: Record<Lang, string[]>;
};

export const research: ResearchItem[] = [
    {
        title: {
            en: "Human abnormality classification using combined CNN-RNN approach",
            de: "Human abnormality classification using combined CNN-RNN approach",
        },
        year: "2020",
        venue: {
            en: "Undergraduate research team project",
            de: "Undergraduate Forschungs-Teamprojekt",
        },
        link: "https://ieeexplore.ieee.org/document/9322814/",
        linkTitle: "IEEE",

    },
];