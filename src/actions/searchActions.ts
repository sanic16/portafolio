"use server";

import { redirect } from "next/navigation";

export const searchAction = async (lang: "es" | "en", formData: FormData) => {
  const term = formData.get("term");

  if (typeof term !== "string" || term.trim().length === 0) {
    return redirect("/search");
  }

  return redirect(`/${lang}/search?search=${term}`);
};
