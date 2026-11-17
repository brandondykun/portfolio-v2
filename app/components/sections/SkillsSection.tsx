import SectionHeading from "../SectionHeading";

const groups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "HTML & CSS / Sass"],
  },
  {
    label: "Web & mobile",
    items: ["React · Next.js", "React Native · Expo", "Redux", "Tailwind CSS"],
  },
  {
    label: "Backend & data",
    items: [
      "Django REST Framework",
      "Flask · FastAPI",
      "Node",
      "PostgreSQL",
      "Firebase",
    ],
  },
  {
    label: "Testing & infra",
    items: ["Playwright · Cypress", "Maestro", "Docker · AWS", "Git"],
  },
  {
    label: "AI tools",
    items: ["Claude Code", "Cursor"],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="border-b border-line"
    >
      <div className="container-page py-20 sm:py-28">
        <SectionHeading id="toolkit-heading" number="03" title="Toolkit" />
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {groups.map((g) => (
            <div key={g.label} className="border-t border-rule pt-4">
              <h3 className="eyebrow">{g.label}</h3>
              <ul className="mt-4 space-y-2 text-[15px]">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
