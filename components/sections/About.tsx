import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Lang } from "@/data/i18n";
import { i18n } from "@/data/i18n";

type Props = {
  lang: Lang;
};

export default function About({ lang }: Props) {
  const t = i18n[lang].about;

  return (
      <div className="py-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t.title}
        </h2>

        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
          {t.intro}
        </p>

        {/*<Separator className="my-4" />*/}

        <div className="grid gap-4 sm:grid-cols-2 mt-8">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-medium">{t.whatIDo}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {t.whatIDoBullets.map((item) => (
                    <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <h3 className="font-medium">{t.lookingFor}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {t.lookingForBullets.map((item) => (
                    <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}