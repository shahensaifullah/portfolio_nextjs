import type { Lang } from "@/data/i18n";

export type EducationItem = {
    degree: Record<Lang, string>;
    institution: string;
    location: string;
    start: string;
    end: string;
};

export const education: EducationItem[] = [
    {
        degree: {
            en: "M.Sc. Artificial Intelligence & Data Analytics",
            de: "M.Sc. Künstliche Intelligenz & Data Analytics",
        },
        institution: "Hochschule Neu-Ulm",
        location: "Neu-Ulm, Germany",
        start: "Oct 2025",
        end: "Present",
    },
    {
        degree: {
            en: "M.Eng. Computer Engineering for IoT Systems",
            de: "M.Eng. Computer Engineering for IoT Systems",
        },
        institution: "Hochschule Nordhausen",
        location: "Nordhausen, Germany",
        start: "Oct 2024",
        end: "Aug 2025",
    },
    {
        degree: {
            en: "B.Sc. Computer Science & Engineering",
            de: "B.Sc. Informatik (Computer Science & Engineering)",
        },
        institution:
            "Bangladesh University of Business and Technology",
        location: "Dhaka, Bangladesh",
        start: "2017",
        end: "2021",
    },
];