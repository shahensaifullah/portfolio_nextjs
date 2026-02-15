import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { education } from "@/data/education";
import { research } from "@/data/research";
import type { Lang } from "@/data/i18n";

type Props = { lang: Lang };

export default function Education({ lang }: Props) {
    const eduTitle = lang === "de" ? "Ausbildung" : "Education";
    const eduSubtitle =
        lang === "de"
            ? "Aktuelles Studium und akademischer Hintergrund."
            : "Current study and academic background.";

    const researchTitle = lang === "de" ? "Forschung / Publikation" : "Research / Publication";
    const researchSubtitle =
        lang === "de"
            ? "Aus dem Undergraduate-Studium (Teamprojekt)."
            : "From undergraduate studies (team project).";

    return (
        <div className="py-8">
            <h2 className="text-2xl font-semibold tracking-tight">{eduTitle}</h2>

            <Separator className="my-4" />

            <div className="grid gap-4">
                {education.map((e) => (
                    <Card key={`${e.institution}-${e.start}`}>
                        <CardContent className="p-5">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                <div>
                                    <div className="text-base font-semibold tracking-tight">{e.degree[lang]}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {e.institution} • {e.location}
                                    </div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {e.start} – {e.end}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Research subsection */}
            <Separator className="my-10" />

            <h3 className="text-xl font-semibold tracking-tight">{researchTitle}</h3>

            <div className="mt-6 grid gap-4">
                {research.map((r) => (
                    <Card key={`${r.title.en}-${r.year}`}>
                        <CardContent className="p-5">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div className="space-y-1">
                                    <div className="text-base font-semibold tracking-tight">{r.title[lang]}</div>

                                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                        <Badge variant="secondary">{r.year}</Badge>
                                        {r.venue?.[lang] ? <span>{r.venue[lang]}</span> : null}
                                    </div>

                                    {r.authors ? (
                                        <div className="text-sm text-muted-foreground">{r.authors}</div>
                                    ) : null}
                                </div>

                                <Button asChild variant="outline" size="sm">
                                    <a href={r.link} target="_blank" rel="noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        {r.linkTitle}
                                    </a>
                                </Button>
                            </div>

                            {r.description ? (
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                    {r.description[lang].map((d) => (
                                        <li key={d}>{d}</li>
                                    ))}
                                </ul>
                            ) : null}

                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}