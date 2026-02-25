"use client";

import { useState } from "react";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch(`/${locale}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, ...form })
      });
      const json = await response.json();
      if (!response.ok || !json.ok) throw new Error(json.error || "Request failed");
      setStatus("ok");
      setForm({ name: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("err");
    }
  }

  return (
    <form className="mt-5 space-y-4" onSubmit={submit}>
      <div>
        <label htmlFor="name" className="text-sm text-bodyColor/75">
          {t.form.name}
        </label>
        <input
          id="name"
          required
          className="mt-2 w-full rounded-2xl border border-[#e5d8c7] bg-white/90 px-4 py-3 outline-none transition focus:border-primary/70"
          value={form.name}
          onChange={(e) => setForm((state) => ({ ...state, name: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm text-bodyColor/75">
          {t.form.phone}
        </label>
        <input
          id="phone"
          required
          className="mt-2 w-full rounded-2xl border border-[#e5d8c7] bg-white/90 px-4 py-3 outline-none transition focus:border-primary/70"
          value={form.phone}
          onChange={(e) => setForm((state) => ({ ...state, phone: e.target.value }))}
        />
      </div>

      <div>
        <label htmlFor="service" className="text-sm text-bodyColor/75">
          {t.form.service}
        </label>
        <select
          id="service"
          required
          className="mt-2 w-full rounded-2xl border border-[#e5d8c7] bg-white/90 px-4 py-3 outline-none transition focus:border-primary/70"
          value={form.service}
          onChange={(e) => setForm((state) => ({ ...state, service: e.target.value }))}
        >
          <option value="">{locale === "ar" ? "اختر" : "Select"}</option>
          <option value={locale === "ar" ? "تفصيل حسب الطلب" : "Made-to-Measure"}>
            {locale === "ar" ? "تفصيل حسب الطلب" : "Made-to-Measure"}
          </option>
          <option value={locale === "ar" ? "تعديلات" : "Alterations"}>{locale === "ar" ? "تعديلات" : "Alterations"}</option>
          <option value={locale === "ar" ? "إصلاحات" : "Repairs"}>{locale === "ar" ? "إصلاحات" : "Repairs"}</option>
          <option value={locale === "ar" ? "إكسسوارات/أقمشة" : "Accessories/Fabrics"}>
            {locale === "ar" ? "إكسسوارات/أقمشة" : "Accessories/Fabrics"}
          </option>
          <option value={locale === "ar" ? "أخرى" : "Other"}>{locale === "ar" ? "أخرى" : "Other"}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-bodyColor/75">
          {t.form.message}
        </label>
        <textarea
          id="message"
          rows={5}
          required
          className="mt-2 w-full rounded-2xl border border-[#e5d8c7] bg-white/90 px-4 py-3 outline-none transition focus:border-primary/70"
          value={form.message}
          onChange={(e) => setForm((state) => ({ ...state, message: e.target.value }))}
        />
      </div>

      <button
        disabled={status === "loading"}
        className="w-full rounded-full border border-primary bg-primary px-4 py-3 font-semibold text-white transition hover:bg-[#00513E] disabled:opacity-60"
      >
        {status === "loading" ? t.form.sending : t.form.send}
      </button>

      {status === "ok" ? <p className="text-sm text-primary">{t.form.success}</p> : null}
      {status === "err" ? <p className="text-sm text-bodyColor/75">{t.form.error}</p> : null}
    </form>
  );
}
