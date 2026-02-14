"use client";

import { useState } from "react";
import type { Lang } from "@/data/i18n";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";


export default function HomePage() {
    const [lang, setLang] = useState<Lang>("en");

    return (
        <div className="min-h-screen">
            <Navbar lang={lang} setLang={setLang} />

            <main className="mx-auto max-w-4xl px-6">
                <section id="home" className="scroll-mt-24">
                    <Hero lang={lang} />
                </section>

                <section id="about" className="scroll-mt-24">
                    <About lang={lang} />
                </section>

                <section id="skills" className="scroll-mt-24">
                    <Skills lang={lang} />
                </section>

                <section id="experience" className="scroll-mt-24">
                    <Experience lang={lang} />
                </section>

                <section id="projects" className="scroll-mt-24">
                    <Projects lang={lang} />
                </section>

                <section id="education" className="scroll-mt-24">
                    <Education lang={lang} />
                </section>

                <section id="contact" className="scroll-mt-24 pb-24">
                    <Contact lang={lang} />
                </section>
            </main>

            <Footer />
        </div>
    );
}