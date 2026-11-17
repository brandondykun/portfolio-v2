import SectionHeading from "../SectionHeading";

const highlights = [
  { label: "Leadership", value: "Leading teams for 13 years" },
  {
    label: "Education",
    value: "Bachelor's in Geospatial Information Science, IUP, 4.0 GPA",
  },
  { label: "Off the clock", value: "Motorcycles, my dog Lucy, working out" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-band-bg text-band-fg"
    >
      <div className="container-page grid gap-10 py-20 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.85fr)] lg:gap-16">
        <div>
          <SectionHeading id="about-heading" number="02" title="About" inverted />
          <p className="mt-8 max-w-md text-2xl font-light leading-snug sm:text-[28px]">
            Years of solving challenging problems with limited time and
            resources, now applied to software.
          </p>
        </div>

        <div>
          <div className="space-y-5 text-[15px] leading-relaxed text-band-muted sm:text-base">
            <p>
              I&apos;ve been coding as a hobby since 2020 and working as a
              developer since 2022, focused on full-stack web and mobile
              development with React, React Native and Python backends like
              Django REST Framework, FastAPI and Flask.
            </p>
            <p>
              In my current role, I build cutting-edge defense research and
              operational DoD applications. Past projects have included full-stack web and mobile
              apps, as well as AI integrations with LLMs and other models for
              image and video analysis. Much of my work has had no existing examples or documentation to lean on,
              so it has meant developing novel solutions to very difficult
              problems.
            </p>
            <p>
              20 years of military experience have taught me a lot about
              leadership and teamwork, taken me around the world, and made me
              adept at solving challenging problems with limited time and
              resources. I first found coding in a college course; I graduated
              Summa Cum Laude with a 4.0 from Indiana University of
              Pennsylvania.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 border-y border-band-line py-6 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-band-subtle">
                  {h.label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
