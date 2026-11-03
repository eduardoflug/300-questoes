import App from "@/App";
import { renderWithActor } from "@/__tests__/test-utils";
import { CHECKOUT_URL, PRICE, SUBJECTS, TOTAL_QUESTIONS } from "@/lib/content";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

/** The sales page is static; no actor method is called by the tested tree. */
function renderPage() {
  return renderWithActor<never>(<App />, {});
}

describe("Simulado GM Imperatriz sales page", () => {
  it("renders the hero with the product name and 300-question call", () => {
    renderPage();

    const hero = screen.getByTestId("hero.section");
    expect(hero).toBeInTheDocument();
    expect(within(hero).getByRole("heading", { level: 1 })).toHaveTextContent(
      /simulado gm\s*imperatriz/i,
    );
    expect(hero).toHaveTextContent(/300\s*questões/i);
    expect(hero).toHaveTextContent(/guarda municipal de imperatriz-ma/i);
  });

  it("shows the exact subject distribution totalling 300", () => {
    renderPage();

    const expected = [
      { name: "Língua Portuguesa", count: 60 },
      { name: "Raciocínio Lógico", count: 50 },
      { name: "Informática", count: 50 },
      { name: "Conhecimentos Específicos", count: 140 },
    ];
    expect(SUBJECTS).toEqual(expected.map((s) => expect.objectContaining(s)));
    expect(SUBJECTS.reduce((sum, s) => sum + s.count, 0)).toBe(TOTAL_QUESTIONS);

    const productGrid = screen.getByTestId("product.section");
    for (const [index, subject] of expected.entries()) {
      const card = within(productGrid).getByTestId(
        `product.subject_card.${index + 1}`,
      );
      expect(card).toHaveTextContent(subject.name);
      expect(card).toHaveTextContent(String(subject.count));
    }
    expect(productGrid).toHaveTextContent(/total:\s*300 questões/i);
  });

  it("shows R$ 19,90 alongside every purchase button", () => {
    renderPage();

    const buttons = screen.getAllByRole("link", { name: /quero/i });
    expect(buttons.length).toBeGreaterThanOrEqual(3);
    for (const button of buttons) {
      // The price is displayed in the same section as the CTA.
      const context = button.closest("section") ?? button;
      expect(context).toHaveTextContent(PRICE);
    }
  });

  it("opens the payment checkout from any purchase button", () => {
    renderPage();

    const buttons = screen.getAllByRole("link", { name: /quero/i });
    for (const button of buttons) {
      expect(button).toHaveAttribute("href", CHECKOUT_URL);
      expect(button).toHaveAttribute("target", "_blank");
    }
  });

  it("expands and collapses each FAQ question on click", async () => {
    const user = userEvent.setup();
    renderPage();

    const faq = screen.getByTestId("faq.section");
    const triggers = within(faq).getAllByRole("button");
    expect(triggers.length).toBeGreaterThanOrEqual(3);

    const first = triggers[0];
    expect(first).toHaveAttribute("aria-expanded", "false");

    await user.click(first);
    expect(first).toHaveAttribute("aria-expanded", "true");

    await user.click(first);
    expect(first).toHaveAttribute("aria-expanded", "false");
  });

  it("shows the legal notices in the footer", () => {
    renderPage();

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveTextContent(/material independente/i);
    expect(footer).toHaveTextContent(/sem vínculo com a prefeitura/i);
    expect(footer).toHaveTextContent(/não garante aprovação/i);
  });
});
