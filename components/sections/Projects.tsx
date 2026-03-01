import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import type { Lang } from "@/data/i18n";
import { i18n } from "@/data/i18n";
import { projects } from "@/data/projects";

type Props = { lang: Lang };

function LinkBtn({ href, label }: { href: string; label: string }) {
    return (
        <Button asChild variant="outline" size="sm">
            <a href={href} target="_blank" rel="noreferrer">
                {label}
            </a>
        </Button>
    );
}

type ProjectDuration = {
    start: { month: number; year: number };
    end?: { month: number; year: number };
    isOngoing?: boolean;
};

type ProjectMeta = {
    owner: "repliq" | "personal" | "client";
    ownerName?: string;
};

function formatDuration(d: ProjectDuration, lang: Lang) {
    const monthsEn = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const monthsDe = ["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];
    const months = lang === "de" ? monthsDe : monthsEn;

    const start = `${months[d.start.month - 1]} ${d.start.year}`;

    if (d.isOngoing) return `${start} – ${lang === "de" ? "Heute" : "Present"}`;
    if (!d.end) return start;

    const end = `${months[d.end.month - 1]} ${d.end.year}`;
    return `${start} – ${end}`;
}

function getDurationBadge(d: ProjectDuration, lang: Lang) {
    if (d.isOngoing) {
        return { label: lang === "de" ? "● Aktiv" : "● Active", variant: "default" as const };
    }
    return { label: lang === "de" ? "○ Abgeschlossen" : "○ Completed", variant: "outline" as const };
}

function getOwnerBadge(meta: ProjectMeta, lang: Lang) {
    const label =
        meta.ownerName ??
        (meta.owner === "repliq"
            ? "REPLIQ Limited"
            : meta.owner === "personal"
                ? lang === "de"
                    ? "Privatprojekt"
                    : "Personal"
                : lang === "de"
                    ? "Kunde"
                    : "Client");

    const icon = meta.owner === "personal" ? "👤" : "🏢";
    // personal looks softer, company/client looks neutral
    const variant = meta.owner === "personal" ? ("secondary" as const) : ("outline" as const);

    return { label: `${icon} ${label}`, variant };
}

export default function Projects({ lang }: Props) {
    const t = i18n[lang].projects;

    const labels = {
        about: lang === "de" ? "Projekt" : "Project",
        role: t.role,
        whatIDid: lang === "de" ? "Was ich gemacht habe" : "What I did",
        impact: lang === "de" ? "Business Impact" : "Business impact",
        tech: t.tech,
        details: lang === "de" ? "Details anzeigen" : "Show details",
        hide: lang === "de" ? "Details ausblenden" : "Hide details",
        duration: lang === "de" ? "Dauer" : "Duration",
    };

    return (
        <div className="py-8">
            <h2 className="text-2xl font-semibold tracking-tight">{t.title}</h2>
            {/*<p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">*/}
            {/*    {t.subtitle}*/}
            {/*</p>*/}

            <Separator className="my-4" />


            <div className="grid gap-4">
                {projects.map((p) => {
                    const linkWebsite = p.links?.website;

                    return (
                        <Card key={p.id} className="overflow-hidden">
                            <CardHeader className="space-y-3">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="space-y-2">
                                        {/* Title + badges */}
                                        <CardTitle className="text-xl">{p.title[lang]}</CardTitle>
                                        <div className="flex flex-wrap items-center gap-2">


                                            {/* Status from duration.isOngoing */}
                                            {(() => {
                                                const s = getDurationBadge(p.duration, lang);
                                                return <Badge variant={s.variant}>{s.label}</Badge>;
                                            })()}

                                            {/* Owner */}
                                            {(() => {
                                                const o = getOwnerBadge(p.meta, lang);
                                                return <Badge variant={o.variant}>{o.label}</Badge>;
                                            })()}
                                        </div>

                                        <p className="text-sm text-muted-foreground">{p.about[lang]}</p>

                                        {/* Duration line */}
                                        <p className="text-sm">
                                            <span className="text-muted-foreground">{labels.duration}:</span>{" "}
                                            <span className="font-medium">{formatDuration(p.duration, lang)}</span>
                                        </p>

                                        {/* Role line */}
                                        <p className="text-sm">
                                            <span className="text-muted-foreground">{labels.role}:</span>{" "}
                                            <span className="font-medium">{p.role[lang]}</span>
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {linkWebsite ? <LinkBtn href={linkWebsite} label="Website" /> : null}
                                        {p.links?.demo ? <LinkBtn href={p.links.demo} label="Demo" /> : null}
                                        {p.links?.github ? <LinkBtn href={p.links.github} label="GitHub" /> : null}
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {p.tech.slice(0, 6).map((x) => (
                                        <Badge key={x} variant="secondary">
                                            {x}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                {/* Details expander */}
                                <details className="group">
                                    <summary className="cursor-pointer text-sm font-medium text-foreground">
                                        <span className="group-open:hidden">{labels.details}</span>
                                        <span className="hidden group-open:inline">{labels.hide}</span>
                                    </summary>

                                    <div className="mt-4 space-y-6">
                                        <div>
                                            <div className="text-sm font-medium">{labels.whatIDid}</div>
                                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                                {p.whatIDid[lang].map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <div className="text-sm font-medium">{labels.impact}</div>
                                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                                {p.businessImpact[lang].map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <div className="text-sm font-medium">{labels.tech}</div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {p.tech.map((x) => (
                                                    <Badge key={x} variant="outline">
                                                        {x}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}