const contacts = [
  { label: "E-mail", value: "pedroferreira0212@gmail.com", href: "mailto:pedroferreira0212@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/pedro-lucas-ferreira-7a4a97260",
    href: "https://linkedin.com/in/pedro-lucas-ferreira-7a4a97260",
  },
  { label: "GitHub", value: "github.com/LPedroo", href: "https://github.com/LPedroo" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="section-label">Contato</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Vamos construir o próximo sistema juntos?
            </h2>
            <p className="mt-4 text-ink/70 dark:text-cream/70">
              Aberto a oportunidades como Full Stack Developer e Software Engineer. Rio de Janeiro, RJ.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:pedroferreira0212@gmail.com"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Enviar e-mail
              </a>
              <a
                href="/cv/CV-Pedro-Ferreira.pdf"
                download
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold transition hover:border-accent dark:border-white/15"
              >
                Baixar currículo
              </a>
            </div>
          </div>

          <ul className="space-y-3 text-sm">
            {contacts.map((c) => (
              <li key={c.label} className="flex flex-col sm:flex-row sm:gap-3">
                <span className="w-20 shrink-0 font-semibold text-ink/50 dark:text-cream/50">{c.label}</span>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="break-all text-ink/80 transition hover:text-accent dark:text-cream/80"
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-14 text-xs text-ink/40 dark:text-cream/40">
          © {new Date().getFullYear()} Pedro Lucas Ferreira
        </p>
      </div>
    </footer>
  );
}
