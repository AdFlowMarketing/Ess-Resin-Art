"use client";

import { useState } from "react";

type ContactFormProps = {
  email: string;
  whatsappNumber: string;
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  service: "Epoxy Resin Flooring",
  message: "",
};

export function ContactForm({ email, whatsappNumber }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [error, setError] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.fullName || !form.email || !form.location || !form.message) {
      setError("Please complete your name, email, project location, and project details.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);

    const subject = encodeURIComponent(
      `New enquiry from ${form.fullName} about ${form.service}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.fullName}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Project location: ${form.location}`,
        `Service of interest: ${form.service}`,
        "",
        "Project details:",
        form.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Full name
          </span>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
            placeholder="Your full name"
            autoComplete="name"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Email address
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Telephone
          </span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
            placeholder="+44 ..."
            autoComplete="tel"
          />
        </label>

        <label className="space-y-2">
          <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Project location
          </span>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
            placeholder="City or postcode"
            autoComplete="address-level2"
          />
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Service of interest
        </span>
        <select
          name="service"
          value={form.service}
          onChange={(event) => updateField("service", event.target.value)}
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]"
        >
          <option>Epoxy Resin Flooring</option>
          <option>Resin Bound Driveways</option>
          <option>Microcement</option>
          <option>Decorative Wall Finishes</option>
          <option>General Enquiry</option>
        </select>
      </label>

      <label className="space-y-2">
        <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Project details
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={6}
          className="w-full resize-y rounded-[1.25rem] border border-black/10 bg-white px-4 py-3 text-sm leading-7 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
          placeholder="Tell us about the room, dimensions, finish you like, timeline, and anything else useful."
        />
      </label>

      <div className="rounded-[1.25rem] border border-dashed border-black/12 bg-[var(--color-surface-subtle)] px-4 py-4 text-sm leading-6 text-[var(--color-muted)]">
        Need to send photos or drawings? The quickest route is WhatsApp:{" "}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[var(--color-accent-strong)] underline-offset-2 hover:underline"
        >
          send images here
        </a>
        .
      </div>

      {error ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      {submitted ? (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Your email app should open with the enquiry prefilled. If it does not, use WhatsApp or email us directly.
        </p>
      ) : null}

      <button type="submit" className="button-primary">
        Send Enquiry
      </button>
    </form>
  );
}
