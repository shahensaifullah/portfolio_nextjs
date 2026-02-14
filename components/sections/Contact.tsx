import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/data/profile";
import type { Lang } from "@/data/i18n";
import { i18n } from "@/data/i18n";

type Props = {
    lang: Lang;
};

export default function Contact({ lang }: Props) {
    const t = i18n[lang];
    const cvHref = lang === "de" ? "/resume-de.pdf" : "/resume-en.pdf";

    return (
        <div className="py-16">
            <h2 className="text-2xl font-semibold tracking-tight">
                {t.contactSection.title}
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                {t.contactSection.subtitle}
            </p>

            <Separator className="my-8" />

            <Card>
                <CardContent className="p-5">
                    <div className="space-y-2">
                        <div className="text-sm text-muted-foreground">
                            {t.contactSection.location}
                        </div>
                        <div className="font-medium">{profile.location}</div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button asChild>
                            <a href={`mailto:${profile.email}`}>{t.buttons.email}</a>
                        </Button>

                        <Button asChild variant="outline">
                            <a href={profile.linkedin} target="_blank" rel="noreferrer">
                                {t.buttons.linkedin}
                            </a>
                        </Button>

                        <Button asChild variant="outline">
                            <a href={profile.github} target="_blank" rel="noreferrer">
                                {t.buttons.github}
                            </a>
                        </Button>

                        <Button asChild variant="ghost">
                            <a href={cvHref}>{t.buttons.downloadCV}</a>
                        </Button>
                    </div>

                    <div className="mt-6 text-sm text-muted-foreground">
                        <div>
              <span className="font-medium text-foreground">
                {t.contactSection.email}:
              </span>{" "}
                            {profile.email}
                        </div>

                        <div className="mt-1">
              <span className="font-medium text-foreground">
                {t.contactSection.phone}:
              </span>{" "}
                            {profile.phone}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}