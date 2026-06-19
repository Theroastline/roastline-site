import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service — The Roastline",
  description: "The terms that govern your use of The Roastline app and service.",
};

const EMAIL = "info@theroastline.com";

const sections: LegalSection[] = [
  {
    heading: "Acceptance of these terms",
    body: [
      "By creating an account or using The Roastline app, you agree to these Terms of Service. If you do not agree, please don’t use the service. You must be 16 or older to use Roastline.",
    ],
  },
  {
    heading: "Your account",
    body: [
      "You’re responsible for the activity on your account and for keeping your sign-in details secure. Let us know promptly if you believe your account has been accessed without your permission.",
    ],
  },
  {
    heading: "Wallet & payments",
    body: [
      "The Roastline wallet holds a prepaid balance you fund with your cards or Apple Pay. Orders are paid from this balance — your card is not charged per order.",
      "Wallet balance is intended for purchases within the app. It is non-refundable to cash except where required by law, and it does not expire. Top-ups are processed by our payment provider, Stripe.",
    ],
  },
  {
    heading: "Orders & pickup",
    body: [
      "Orders are prepared and fulfilled by independent coffee shops, not by Roastline. Shops set their own menus, prices, hours, and availability. A shop may accept, reject, or cancel an order; if an order is rejected or cancelled, the amount is refunded to your wallet in full.",
      "Please pick up your order during the shop’s stated hours. Roastline is not responsible for the quality, preparation, or safety of items, which are the responsibility of the shop.",
    ],
  },
  {
    heading: "Discounts & promotions",
    body: [
      "Roastline discounts and promotional offers are applied at checkout and reflected in your total. Shops may set discount hours, so a deal may be live only during certain times. Promotional offers may change, pause, or end at any time.",
    ],
  },
  {
    heading: "Acceptable use",
    body: [
      "Don’t misuse the service — for example, by interfering with its operation, attempting unauthorized access, or using it for unlawful purposes. We may suspend or terminate accounts that violate these terms.",
    ],
  },
  {
    heading: "Service “as is”",
    body: [
      "The service is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, Roastline disclaims warranties not expressly stated here and is not liable for indirect or incidental damages arising from your use of the service.",
    ],
  },
  {
    heading: "Changes & contact",
    body: [
      `We may update these terms as the service evolves; we’ll revise the “last updated” date above when we do. Continued use after changes means you accept the updated terms. Questions? Reach us at ${EMAIL}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 19, 2026"
      intro="These terms govern your use of The Roastline app and service. Please read them carefully."
      sections={sections}
    />
  );
}
