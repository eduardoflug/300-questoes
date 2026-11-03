import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, PRICE } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface PurchaseButtonProps {
  /** Visible label. Defaults to the standard price CTA. */
  label?: string;
  size?: "default" | "lg";
  className?: string;
  /** Deterministic test marker id. */
  ocid: string;
}

/**
 * Signal-green pill CTA that opens the Kiwify checkout in a new tab.
 * Used for every purchase action on the page.
 */
export function PurchaseButton({
  label = `QUERO MEU SIMULADO POR ${PRICE}`,
  size = "lg",
  className,
  ocid,
}: PurchaseButtonProps) {
  return (
    <Button
      asChild
      size={size}
      data-ocid={ocid}
      className={cn(
        "rounded-full bg-primary font-display font-bold uppercase tracking-wide text-primary-foreground shadow-signal transition-smooth hover:-translate-y-0.5 hover:bg-primary/90",
        size === "lg"
          ? "h-12 px-7 text-sm sm:text-base"
          : "h-10 px-5 text-xs sm:text-sm",
        className,
      )}
    >
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
        {label}
        <ArrowRight aria-hidden="true" />
      </a>
    </Button>
  );
}
