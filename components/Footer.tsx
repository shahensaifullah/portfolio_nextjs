export default function Footer() {
    return (
        <footer className="border-t mt-24">
            <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-muted-foreground">
                © {new Date().getFullYear()} Saifullah Shahen. Built with Next.js + Tailwind.
            </div>
        </footer>
    );
}