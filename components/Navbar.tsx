"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/data/i18n";
import { i18n } from "@/data/i18n";
import {
    Home,
    User,
    Wrench,
    FolderGit2,
    Briefcase,
    GraduationCap,
    FileDown,
    ChevronLeft,
    ChevronRight,
    Languages,
    Sun,
    Moon,
} from "lucide-react";

type Props = {
    lang: Lang;
    setLang: (lang: Lang) => void;
};

type NavKey = keyof typeof i18n.en.nav;

export default function Navbar({ lang, setLang }: Props) {
    const t = i18n[lang];
    const cvHref = lang === "de" ? "/resume-de.pdf" : "/resume-en.pdf";

    const { resolvedTheme, setTheme } = useTheme();

    // Desktop-only collapse state
    const [collapsed, setCollapsed] = useState(false);

    const navItems = useMemo(
        () => [
            { href: "#home", id: "home", key: "home" as const, icon: Home },
            { href: "#about", id: "about", key: "about" as const, icon: User },
            { href: "#skills", id: "skills", key: "skills" as const, icon: Wrench },
            { href: "#experience", id: "experience", key: "experience" as const, icon: Briefcase },
            { href: "#projects", id: "projects", key: "projects" as const, icon: FolderGit2 },
            { href: "#education", id: "education", key: "education" as const, icon: GraduationCap },
        ],
        []
    );

    const [activeId, setActiveId] = useState<string>("home");

    // Scrollspy
    useEffect(() => {
        const sections = navItems
            .map((x) => document.getElementById(x.id))
            .filter(Boolean) as HTMLElement[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

                if (visible?.target?.id) setActiveId(visible.target.id);
            },
            {
                root: null,
                rootMargin: "-30% 0px -60% 0px",
                threshold: [0.05, 0.1, 0.2, 0.4, 0.6],
            }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [navItems]);

    const toggleLang = () => setLang(lang === "en" ? "de" : "en");

    const isDarkTheme = resolvedTheme === "dark";

    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark");
    };

    const nextLangLabel = lang === "en" ? "DE" : "EN";
    const nextThemeLabel = isDarkTheme ? "White" : "Black";

    const isActive = (id: string) => id === activeId;

    const linkClassDesktop = (active: boolean, collapsedMode: boolean) => {
        if (collapsedMode) {
            return [
                "p-3 flex items-center justify-center rounded-xl transition",
                active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground",
            ].join(" ");
        }
        return [
            "px-3 py-2.5 flex items-center gap-3 rounded-xl transition text-sm",
            active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground",
        ].join(" ");
    };

    const linkClassMobile = (active: boolean) =>
        [
            "rounded-xl px-2 py-2 text-center text-xs transition",
            active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground",
        ].join(" ");

    return (
        <>
            {/* Desktop: Right sidebar (collapsible) */}
            <aside className="hidden lg:block fixed right-6 top-24 z-50">
                <div
                    className={[
                        "rounded-2xl border bg-background/80 backdrop-blur shadow-sm",
                        collapsed ? "w-16 p-2" : "w-72 p-4",
                    ].join(" ")}
                >
                    {/* Top controls */}
                    <div className="flex items-center justify-between gap-2">
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => setCollapsed((v) => !v)}
                            className="shrink-0"
                            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                            title={collapsed ? "Expand" : "Collapse"}
                        >
                            {collapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </Button>

                        {collapsed ? (
                            <div className="flex flex-col gap-2 items-center">
                                <Button type="button" variant="outline" size="icon" onClick={toggleTheme} title="Theme">
                                    <Sun className="h-4 w-4 dark:hidden" />
                                    <Moon className="h-4 w-4 hidden dark:block" />
                                </Button>

                                <Button type="button" variant="outline" size="icon" onClick={toggleLang} title="Language">
                                    <Languages className="h-4 w-4" />
                                </Button>

                                <Button asChild variant="outline" size="icon" title="Download CV">
                                    <a href={cvHref}>
                                        <FileDown className="h-4 w-4" />
                                    </a>
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Button type="button" variant="outline" size="sm" onClick={toggleTheme}>
                                    <Sun className="mr-2 h-4 w-4 dark:hidden" />
                                    <Moon className="mr-2 h-4 w-4 hidden dark:block" />
                                    {nextThemeLabel}
                                </Button>

                                <Button type="button" variant="outline" size="sm" onClick={toggleLang}>
                                    <Languages className="mr-2 h-4 w-4" />
                                    {nextLangLabel}
                                </Button>

                                <Button asChild variant="outline" size="sm">
                                    <a href={cvHref}>
                                        <FileDown className="mr-2 h-4 w-4" />
                                        CV
                                    </a>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Nav */}
                    <nav className={collapsed ? "mt-3" : "mt-5"}>
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const label = t.nav[item.key as NavKey];
                                const active = isActive(item.id);

                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={linkClassDesktop(active, collapsed)}
                                        title={collapsed ? label : undefined}
                                        aria-current={active ? "page" : undefined}
                                        onClick={() => setActiveId(item.id)}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {!collapsed && <span>{label}</span>}
                                    </a>
                                );
                            })}
                        </div>
                    </nav>
                </div>
            </aside>

            {/* Mobile/Tablet: actions ABOVE bottom nav (vertical) */}
            <div className="lg:hidden fixed bottom-20 right-3 z-50 flex flex-col gap-2">
                <Button type="button" variant="outline" size="sm" onClick={toggleTheme} className="shadow-sm">
                    <Sun className="mr-2 h-4 w-4 dark:hidden" />
                    <Moon className="mr-2 h-4 w-4 hidden dark:block" />
                    {nextThemeLabel}
                </Button>

                <Button type="button" variant="outline" size="sm" onClick={toggleLang} className="shadow-sm">
                    <Languages className="mr-2 h-4 w-4" />
                    {nextLangLabel}
                </Button>

                <Button asChild size="sm" className="shadow-sm">
                    <a href={cvHref}>
                        <FileDown className="mr-2 h-4 w-4" />
                        {t.buttons.downloadCV}
                    </a>
                </Button>
            </div>

            {/* Mobile/Tablet: Bottom nav shows ALL items */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-background/90 backdrop-blur">
                <div className="mx-auto max-w-4xl px-3 py-2">
                    <div className="grid grid-cols-6 gap-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const label = t.nav[item.key as NavKey];
                            const active = isActive(item.id);

                            return (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={linkClassMobile(active)}
                                    aria-current={active ? "page" : undefined}
                                    onClick={() => setActiveId(item.id)}
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        <Icon className="h-4 w-4" />
                                        <span className="leading-none">{label}</span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Spacer */}
            <div className="lg:hidden h-24" />
        </>
    );
}
