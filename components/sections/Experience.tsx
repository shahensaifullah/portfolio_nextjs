import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experience } from "@/data/experience";
import type { Lang } from "@/data/i18n";
import { i18n } from "@/data/i18n";

type Props = {
    lang: Lang;
};

export default function Experience({ lang }: Props) {
    const t = i18n[lang].experience;

    return (
        <div className="py-8">
            <h2 className="text-2xl font-semibold tracking-tight">{t.title}</h2>
            {/*<p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">*/}
            {/*    {t.subtitle}*/}
            {/*</p>*/}

            <Separator className="my-4" />

            <div className="grid gap-4">
                {experience.map((e) => (
                    <Card key={`${e.company}-${e.start}`}>
                        <CardContent className="p-5">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                <div>
                                    <div className="text-base font-semibold tracking-tight">
                                        {e.title[lang]}
                                    </div>

                                    <div className="text-sm text-muted-foreground">
                                        {e.company}
                                        {e.location ? ` • ${e.location[lang]}` : ""}
                                    </div>
                                </div>

                                <div className="text-sm text-muted-foreground">
                                    {e.start} – {e.end}
                                </div>
                            </div>

                            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                                {e.bullets[lang].map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}