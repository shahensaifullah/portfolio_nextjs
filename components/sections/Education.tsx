import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { education } from "@/data/education";
import type { Lang } from "@/data/i18n";

type Props = {
    lang: Lang;
};

export default function Education({ lang }: Props) {
    const title = lang === "de" ? "Ausbildung" : "Education";
    const subtitle =
        lang === "de"
            ? "Aktuelles Studium und bisheriger akademischer Hintergrund."
            : "Current study and academic background.";

    return (
        <div className="py-16">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                {subtitle}
            </p>

            <Separator className="my-8" />

            <div className="grid gap-4">
                {education.map((e) => (
                    <Card key={`${e.institution}-${e.start}`}>
                        <CardContent className="p-5">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                <div>
                                    <div className="text-base font-semibold tracking-tight">
                                        {e.degree[lang]}
                                    </div>
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
        </div>
    );
}