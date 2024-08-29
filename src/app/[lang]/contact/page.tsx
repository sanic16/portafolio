import ContactForm from "./ContactForm";
import { getDictionary } from "../dictionaries";

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function ContactPage({
  params: { lang },
}: {
  params: {
    lang: "es" | "en";
  };
}) {
  const t = await getDictionary(lang);
  return <ContactForm t={t.contact} />;
}
