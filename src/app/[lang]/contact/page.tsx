import ContactForm from "./ContactForm";
import { getDictionary } from "../dictionaries";

type ContactPageProps = {
  params: Promise<{ lang: "es" | "en" }>;
};

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return <ContactForm t={t.contact} />;
}
