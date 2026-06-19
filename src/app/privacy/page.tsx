import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — The Roastline",
  description:
    "How The Roastline collects, uses, and protects your personal data.",
};

const EMAIL = "info@theroastline.com";

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      `The Roastline (“Roastline,” “we,” “us”) operates a mobile app and service that lets you order ahead from independent coffee shops, pay from a prepaid wallet, and discover nearby deals. This policy explains what we collect and why. Questions? Email ${EMAIL}.`,
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect only what we need to run the service:",
      [
        "Account details — your name, email address, and phone number.",
        "Location — your device location, used to show nearby coffee shops, estimate walking times, and (if you allow notifications) alert you when a nearby shop’s discount is live.",
        "Orders & wallet — your order history, prepaid wallet balance, and transactions.",
        "Payment information — processed by our payment provider; we receive a token and the card brand and last four digits, never the full card number.",
        "Profile photo — only if you choose to upload one.",
      ],
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use your information to:",
      [
        "Create and secure your account and authenticate sign-in.",
        "Process pickup orders and maintain your prepaid wallet balance.",
        "Show nearby shops and send order, pickup, and nearby-deal notifications.",
        "Improve shop recommendations and the overall service.",
      ],
      "We do not sell your personal data, and we do not use it for third-party advertising or cross-app tracking.",
    ],
  },
  {
    heading: "Location",
    body: [
      "Roastline uses your location in two ways. While you are using the app, location surfaces nearby roasters and directions. If you grant “Always” location and enable promo notifications, the app monitors a small set of geofences around the shops nearest you so it can notify you when a discount is live close by.",
      "The nearby-deal feature runs on your device — the geofence evaluation happens locally and your continuous location is not uploaded to our servers for it. You can change or revoke location access at any time in iOS Settings, and turn off promo notifications in the app.",
    ],
  },
  {
    heading: "Payments",
    body: [
      "Cards and Apple Pay are used to top up your Roastline wallet. Card details are tokenized by our payment processor (Stripe); Roastline never stores full card numbers. Orders are paid from your wallet balance, not charged to your card per order.",
    ],
  },
  {
    heading: "How we share information",
    body: [
      "We share data only with service providers that help us operate, and only as needed:",
      [
        "Supabase — secure database, authentication, and storage.",
        "Stripe — payment processing and wallet top-ups.",
        "Square — menu and order sync for shops that use Square as their point of sale.",
        "Resend — transactional email (such as password resets).",
        "Apple — Apple Pay and push/local notification delivery.",
      ],
      "When you place an order, the coffee shop receives the details needed to prepare and hand off your order.",
    ],
  },
  {
    heading: "Data retention & security",
    body: [
      "We keep your information for as long as your account is active or as needed to provide the service and meet legal obligations. Data is protected in transit and at rest, and access is restricted to what each provider needs to function.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can update your notification preferences in the app, revoke location access in iOS Settings, request a copy of your data, or delete your account from within the app or by emailing us.",
    ],
  },
  {
    heading: "Children",
    body: [
      "Roastline is intended for people aged 16 and older. We do not knowingly collect data from children under 16.",
    ],
  },
  {
    heading: "Changes & contact",
    body: [
      `We may update this policy as the service evolves; we’ll revise the “last updated” date above when we do. For any privacy questions or requests, contact us at ${EMAIL}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 19, 2026"
      intro="Your trust matters to us. This policy describes the personal information The Roastline collects, how we use it, and the choices you have."
      sections={sections}
    />
  );
}
