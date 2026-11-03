import { PRICE } from "@/lib/content";
import { ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

/** Sticky slim header + legal footer shell for the sales page. */
export function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href="#top"
            data-ocid="header.brand_link"
            className="flex items-center gap-2 rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <ShieldCheck aria-hidden="true" className="size-5 text-primary" />
            <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground sm:text-base">
              Simulado GM Imperatriz
            </span>
          </a>
          <span className="numeral rounded-full border border-accent/40 px-3 py-1 text-xs font-semibold text-accent">
            {PRICE}
          </span>
        </div>
      </header>

      <main id="top" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-muted/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex items-center gap-2">
            <ShieldCheck
              aria-hidden="true"
              className="size-4 text-muted-foreground"
            />
            <span className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              Simulado GM Imperatriz
            </span>
          </div>
          <ul className="mt-5 space-y-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <li>
              Material independente de estudos, sem vínculo com a Prefeitura de
              Imperatriz-MA, com a banca organizadora ou com qualquer órgão
              público.
            </li>
            <li>
              Este material não garante aprovação em concurso. O desempenho
              depende exclusivamente do estudo e do resultado na prova oficial.
            </li>
            <li>
              Uso pessoal e individual. É proibida a revenda, cópia ou
              distribuição do conteúdo.
            </li>
          </ul>
          <p className="mt-6 border-t border-border pt-5 text-xs text-muted-foreground">
            © {year} Simulado GM Imperatriz. Todos os direitos reservados.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
