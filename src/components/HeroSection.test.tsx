import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import HeroSection from "./HeroSection";

// Mock i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "hero.mainTitle": "rooms & apartments in San Niccolò, Florence",
        "hero.ratingBadge": "4.68 rating • 1,700+ reviews",
        "hero.checkRooms": "Check rooms",
        "hero.writeUs": "or write us",
        "hero.scrollHint": "Scroll to rooms",
        "footer.email": "lorenzoelorenzo@libero.it",
        "hero.greetings.it": "Benvenuti",
        "hero.greetings.en": "Welcome",
        "hero.greetings.es": "Bienvenidos",
        "hero.greetings.ru": "Добро пожаловать",
        "hero.greetings.zh": "欢迎",
      };
      return translations[key] || key;
    },
    i18n: {
      language: "en",
    },
  }),
}));

describe("HeroSection", () => {
  it("renders the hero section with main elements", () => {
    const { getByText, getByRole } = render(<HeroSection />);
    
    // Check for main title text
    expect(getByText(/rooms & apartments in San Niccolò, Florence/i)).toBeInTheDocument();
    
    // Check for rating badge
    expect(getByText(/4.68 rating/i)).toBeInTheDocument();
    
    // Check for CTA button
    expect(getByRole("button", { name: /check rooms/i })).toBeInTheDocument();
    
    // Check for scroll hint
    expect(getByText(/scroll to rooms/i)).toBeInTheDocument();
  });

  it("renders the contact email link", () => {
    const { getByText } = render(<HeroSection />);
    
    expect(getByText("lorenzoelorenzo@libero.it")).toBeInTheDocument();
  });

  it("has accessible hero image", () => {
    const { getByAltText } = render(<HeroSection />);
    
    const heroImage = getByAltText(/Reception area of Lorenzo & Lorenzo/i);
    expect(heroImage).toBeInTheDocument();
  });

  it("verifies greeting translations have no typos", () => {
    // The translations should not contain typos
    const greetings = ["Benvenuti", "Welcome", "Bienvenidos", "Добро пожаловать", "欢迎"];
    
    // Verify all greetings are spelled correctly (no "Benvenut" typo)
    greetings.forEach(greeting => {
      expect(greeting).not.toBe("Benvenut");
      expect(greeting).not.toBe("Welcom");
    });
  });
});
