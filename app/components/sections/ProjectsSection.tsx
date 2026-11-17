import { projects } from "@/app/data/projects";
import SectionHeading from "../SectionHeading";

const ProjectLink = ({ href, label, title }: { href: string; label: string; title: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${title}: ${
      label === "Code" ? "source code" : label === "App Store" ? "App Store listing" : "live site"
    } (opens in new tab)`}
    className="focus-ring whitespace-nowrap font-mono text-xs font-medium text-fg transition-colors hover:text-accent"
  >
    {label} <span aria-hidden>↗</span>
  </a>
);

const ProjectsSection = () => {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-b border-line">
      <div className="container-page py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
          <SectionHeading id="work-heading" number="01" title="Selected work" />
          <p className="font-mono text-xs text-subtle">
            {projects.length} projects · web &amp; mobile
          </p>
        </div>

        <ol className="mt-8 border-t border-rule sm:mt-10">
          {projects.map((p, i) => (
            <li
              key={p.title}
              className="grid grid-cols-[2rem_1fr] gap-x-4 gap-y-4 border-b border-line py-7 sm:grid-cols-[3.5rem_1fr] lg:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,17rem)_9.5rem] lg:gap-x-8"
            >
              <span className="pt-1 font-mono text-xs text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="max-w-xl">
                <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
                  {p.description}
                </p>
              </div>

              <p className="col-start-2 font-mono text-xs leading-relaxed text-subtle lg:col-start-3 lg:pt-1">
                {p.tech.map((t, j) => (
                  <span key={t}>
                    <span className="whitespace-nowrap">{t}</span>
                    {j < p.tech.length - 1 && " · "}
                  </span>
                ))}
              </p>

              <div className="col-start-2 flex gap-5 lg:col-start-4 lg:justify-end lg:pt-1">
                {p.code && <ProjectLink href={p.code} label="Code" title={p.title} />}
                {p.live && <ProjectLink href={p.live} label="Live" title={p.title} />}
                {p.appStore && (
                  <ProjectLink href={p.appStore} label="App Store" title={p.title} />
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProjectsSection;
