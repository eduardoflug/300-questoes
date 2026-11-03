import { Card } from "@/components/ui/card";
import { SUBJECTS, type Subject, TOTAL_QUESTIONS } from "@/lib/content";
import { cn } from "@/lib/utils";

const TONE_CLASS: Record<Subject["tone"], string> = {
  primary: "text-primary",
  accent: "text-accent",
  "chart-3": "text-chart-3",
  destructive: "text-destructive",
};

const BAR_CLASS: Record<Subject["tone"], string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  "chart-3": "bg-chart-3",
  destructive: "bg-destructive",
};

interface SubjectGridProps {
  /** Deterministic test marker prefix, e.g. "hero" or "pdf". */
  ocidPrefix: string;
}

/** Four-card grid showing the question distribution across subjects. */
export function SubjectGrid({ ocidPrefix }: SubjectGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {SUBJECTS.map((subject, index) => (
        <Card
          key={subject.name}
          data-ocid={`${ocidPrefix}.subject_card.${index + 1}`}
          className="gap-3 rounded-lg border-border bg-card px-4 py-5 shadow-elevated shadow-inset-soft transition-smooth hover:-translate-y-0.5 hover:border-primary/50 sm:px-5 sm:py-6"
        >
          <span
            className={cn(
              "numeral block text-4xl font-bold leading-none sm:text-5xl",
              TONE_CLASS[subject.tone],
            )}
          >
            {subject.count}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "block h-1 w-10 rounded-full",
              BAR_CLASS[subject.tone],
            )}
          />
          <span className="font-display text-sm font-semibold uppercase leading-tight tracking-wide text-foreground sm:text-base">
            {subject.name}
          </span>
        </Card>
      ))}
      <p className="col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground lg:col-span-4">
        Total: {TOTAL_QUESTIONS} questões objetivas
      </p>
    </div>
  );
}
