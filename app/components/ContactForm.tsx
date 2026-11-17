"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type Errors = {
  name: null | string;
  email: null | string;
  message: null | string;
};

const fieldClass = (hasError: boolean) =>
  `mt-2 block w-full rounded-none border-0 border-b bg-transparent px-0 py-2 text-[15px] text-fg placeholder:text-subtle focus:outline-none focus:ring-0 transition-colors ${
    hasError ? "border-red-600" : "border-rule focus:border-accent"
  }`;

const labelClass = "eyebrow";

const ErrorText = ({ id, children }: { id: string; children: string | null }) => (
  <p id={id} className="mt-1 min-h-[1rem] text-xs text-red-600" aria-live="polite">
    {children}
  </p>
);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({
    name: null,
    email: null,
    message: null,
  });
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Honeypot field
  const [middleName, setMiddleName] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (middleName) {
      return;
    }

    const nextErrors: Errors = {
      name: name ? null : "Please enter your name.",
      email: email ? null : "Please enter your email.",
      message: message ? null : "Please enter a message.",
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      return;
    }

    setLoading(true);
    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        { user_name: name, user_email: email, message },
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setSubmitError("There was an error. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col justify-center border-t border-rule pt-6" role="status">
        <p className="eyebrow">Message sent</p>
        <p className="mt-3 text-2xl font-medium tracking-tight">
          Thank you for reaching out!
        </p>
        <p className="mt-2 text-muted">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="relative w-full" onSubmit={sendEmail} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="user_name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby="contact-name-error"
            className={fieldClass(!!errors.name)}
          />
          <ErrorText id="contact-name-error">{errors.name}</ErrorText>
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="user_email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby="contact-email-error"
            className={fieldClass(!!errors.email)}
          />
          <ErrorText id="contact-email-error">{errors.email}</ErrorText>
        </div>
      </div>

      {/* Honeypot field — hidden from people, visible to bots */}
      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        <label htmlFor="contact-middle-name">Middle Name</label>
        <input
          id="contact-middle-name"
          type="text"
          name="middle_name"
          autoComplete="off"
          tabIndex={-1}
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby="contact-message-error"
          className={`${fieldClass(!!errors.message)} resize-y`}
        />
        <ErrorText id="contact-message-error">{errors.message}</ErrorText>
      </div>

      {submitError && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="focus-ring mt-6 inline-flex h-11 items-center bg-accent px-6 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Sending…" : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
