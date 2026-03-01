import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Lang } from "@/data/i18n";
import { i18n } from "@/data/i18n";

type Props = {
  lang: Lang;
};

export default function About({ lang }: Props) {
  const t = i18n[lang].about;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold tracking-tight">{t.title}</h2>

      <Card className="mt-8 max-w-3xl">
        <CardHeader className="space-y-4">
          <CardTitle className="text-base font-medium">{t.headline}</CardTitle>

          <div className="flex flex-wrap gap-2">
            {t.techChips.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{t.paragraph}</p>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">{t.contributionTitle}</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground leading-relaxed">
              {t.contributionBullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{t.currently}</p>
        </CardContent>
      </Card>
    </div>
  );
}
