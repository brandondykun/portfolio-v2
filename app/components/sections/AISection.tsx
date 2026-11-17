import SectionHeading from "../SectionHeading";

const uses = [
  { label: "Building features", value: "Planning and writing new features" },
  { label: "Tests", value: "Writing and running tests" },
  {
    label: "Debugging & refactoring",
    value: "Tracking down bugs and cleaning up existing code",
  },
  { label: "Code review", value: "Reviewing changes before they're merged" },
];

const AISection = () => {
  return (
    <section id="ai" aria-labelledby="ai-heading" className="border-b border-line">
      <div className="container-page grid gap-10 py-20 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.85fr)] lg:gap-16">
        <div>
          <SectionHeading id="ai-heading" number="04" title="AI-assisted development" />
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
            I use Claude Code and Cursor across the development cycle.
          </p>        </div>

        <dl className="grid gap-x-8 border-t border-rule sm:grid-cols-2">
          {uses.map((u) => (
            <div key={u.label} className="border-b border-line py-6">
              <dt className="eyebrow">{u.label}</dt>
              <dd className="mt-2 text-base font-medium">{u.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AISection;
