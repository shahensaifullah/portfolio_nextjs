import Image from "next/image";
import {Mail, Github, Linkedin, MapPin, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import type {Lang} from "@/data/i18n";
import {i18n} from "@/data/i18n";
import {profile} from "@/data/profile";

type Props = { lang: Lang };

export default function Hero({lang}: Props) {
    const t = i18n[lang];
    const cvHref = lang === "de" ? "/resume-de.pdf" : "/resume-en.pdf";

    const techStack = [
        "Python",
        "Django / DRF",
        "PostgreSQL",
        "Redis",
        "Elasticsearch",
        "Docker",
        "REST APIs",
        "RBAC",
    ];

    return (
        <div className="py-8">
            <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-center">
                {/* Left */}
                <div className="flex flex-col gap-4">
                    <Badge variant="secondary" className="w-fit">
                        {t.hero.badge}
                    </Badge>

                    <div>
                        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                            Saifullah Shahen
                        </h1>
                        <p className="text-muted-foreground leading-relaxed">AI-Focused Software Engineer</p>

                    </div>

                    <p className="max-w-2xl text-muted-foreground leading-relaxed">
                        Specialized in architecting production-ready systems using Python (Django, FastAPI) and modern
                        frontends (Next.js, Vue.js). Currently focused on the end-to-end integration of AI-driven logic
                        and automated data workflows into scalable web applications. Expert in clean architecture and
                        structured data modeling, bridging the gap between sophisticated data science and robust
                        software delivery.
                    </p>

                    {/*<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">*/}
                    {/*    {t.hero.title}*/}
                    {/*</h1>*/}

                    {/*<p className="max-w-2xl text-muted-foreground leading-relaxed">*/}
                    {/*    {t.hero.subtitle}*/}
                    {/*</p>*/}

                    {/* Top contact/actions row */}
                    <div className="flex flex-wrap gap-2 pt-1">
                        <Button asChild variant="outline" size="sm">
                            <a href={`mailto:${profile.email}`}>
                                <Mail className="mr-2 h-4 w-4"/>
                                {profile.email}
                            </a>
                        </Button>

                        <Button asChild variant="outline" size="sm">
                            <a href={profile.linkedin} target="_blank" rel="noreferrer">
                                <Linkedin className="mr-2 h-4 w-4"/>
                                LinkedIn
                            </a>
                        </Button>

                        <Button asChild variant="outline" size="sm">
                            <a href={profile.github} target="_blank" rel="noreferrer">
                                <Github className="mr-2 h-4 w-4"/>
                                GitHub
                            </a>
                        </Button>

                        <Button asChild size="sm">
                            <a href={cvHref}>{t.buttons.downloadCV}</a>
                        </Button>
                    </div>

                    {/* Location + phone (compact, not huge buttons) */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4"/>
                            <span>{profile.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4"/>
                            <span>{profile.phone}</span>
                        </div>
                    </div>

                    <Separator className="mt-6"/>

                    <div className="flex flex-wrap gap-2 pt-4">
                        {techStack.map((tech) => (
                            <Badge key={tech} variant="outline">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Right: photo */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative h-64 w-64 overflow-hidden rounded-2xl border shadow-sm">
                        <Image
                            src="/profile.jpg"
                            alt={profile.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}