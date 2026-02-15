import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { skillGroups } from "@/data/skills";
import type { Lang } from "@/data/i18n";
import { i18n } from "@/data/i18n";

type Props = {
    lang: Lang;
};

export default function Skills({ lang }: Props) {
    const t = i18n[lang].skills;

    return (
        <div className="py-8">
            <h2 className="text-2xl font-semibold tracking-tight">{t.title}</h2>
            {/*<p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">*/}
            {/*    {t.subtitle}*/}
            {/*</p>*/}

            <Separator className="my-4" />

            <div className="grid gap-4 sm:grid-cols-2">
                {skillGroups.map((group) => (
                    <Card key={group.title.en}>
                        <CardContent className="px-5">
                            <h3 className="">{group.title[lang]}</h3>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <Badge className="md:text-md text-sm" key={item} variant="secondary">
                                        {item}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}