"use client";

import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";
import { useToast } from "@/components/ui/use-toast";

const EMAIL = "brandon.dykun@gmail.com";

const ContactSection = () => {
  const { toast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast({ title: "Copied", description: "Email copied to clipboard.", duration: 3000 });
    } catch {
      toast({ title: "Couldn't copy", description: EMAIL, duration: 3000 });
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container-page grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="contact-heading" number="05" title="Contact" />
          <p className="mt-8 max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Have a role or a project in mind? Let&apos;s talk.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href={`mailto:${EMAIL}`}
              className="focus-ring break-all border-b-2 border-accent pb-1 text-lg transition-colors hover:text-accent sm:text-xl"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="focus-ring font-mono text-xs text-subtle transition-colors hover:text-fg"
            >
              Copy
            </button>
          </div>

          <div className="mt-6 flex gap-6 font-mono text-xs font-medium">
            <a
              href="https://www.linkedin.com/in/bdykun"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring transition-colors hover:text-accent"
            >
              LinkedIn <span aria-hidden>↗</span>
            </a>
            <a
              href="https://www.github.com/brandondykun"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring transition-colors hover:text-accent"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
