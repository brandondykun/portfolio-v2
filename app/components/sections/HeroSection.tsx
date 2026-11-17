const facts = [
  { label: "Building since", value: "2022 professionally, 2020 for fun" },
  { label: "Service", value: "20 years of military experience" },
  { label: "Education", value: "Bachelor's, Geospatial Information Science" },
];

const HeroSection = () => {
  return (
    <section id="home" className="border-b border-line">
      <div className="container-page pb-16 pt-16 sm:pb-20 sm:pt-24">
        <p className="flex items-center gap-2 font-mono text-xs text-muted">
          <span aria-hidden className="inline-block h-2 w-2 bg-accent" />
          Full-stack software engineer
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[64px]">
          I build full-stack web and mobile apps.
        </h1>

        <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-rule pt-5 sm:mt-14 md:grid-cols-3 md:gap-8">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="eyebrow">{f.label}</dt>
              <dd className="mt-2 text-base font-medium sm:text-lg">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="focus-ring inline-flex h-11 items-center border border-btn-bg bg-btn-bg px-5 text-sm font-medium text-btn-fg transition-opacity hover:opacity-85"
          >
            See selected work
          </a>
          <a
            href="#contact"
            className="focus-ring inline-flex h-11 items-center border border-fg px-5 text-sm font-medium transition-colors hover:bg-fg hover:text-bg"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
