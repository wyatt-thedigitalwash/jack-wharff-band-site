import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Jack Wharff Band for booking inquiries, press, and general questions.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageContent />
    </main>
  );
}
