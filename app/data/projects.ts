export type Project = {
  title: string;
  description: string;
  tech: string[];
  code?: string;
  live?: string;
  appStore?: string;
};

export const projects: Project[] = [
  {
    title: "RTAP",
    description:
      "An offline-first tactical map mobile app: plot units in MIL-STD-2525C symbology, quick-plot MGRS grids, measure range and direction in mils or degrees, and draw phase lines and engagement areas on real 3D terrain, all saved by mission.",
    tech: [
      "React Native",
      "TypeScript",
      "Expo",
      "Mapbox",
      "PowerSync",
      "SQLite",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "DigitalOcean",
      "Sentry",
    ],
    code: "https://github.com/brandondykun/rtap-app",
    appStore: "https://apps.apple.com/app/id6834856833",
  },
  {
    title: "Army ACFT Calculator",
    description:
      "Scores the six-event Army Combat Fitness Test without paper score sheets. Built because other calculators were difficult to use on mobile or gave incorrect scores on edge cases.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Playwright"],
    code: "https://github.com/brandondykun/acft-calculator",
    live: "https://armyacftcalculator.com",
  },
  {
    title: "Small Team Management System",
    description:
      "Tracks information and career progress milestones for Soldiers under my leadership. Team members can log in to view and edit their information and receive direct feedback notes.",
    tech: ["React", "Vite", "Firebase", "Firebase Auth", "Cypress", "CSS", "Vercel"],
    code: "https://github.com/brandondykun/stms",
    live: "https://www.110thfist.com/login",
  },
  {
    title: "Where in the World?",
    description:
      "Explore every country with search, region filters, light and dark mode, and detail pages linking border countries.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "shadcn/ui",
      "REST Countries API",
    ],
    code: "https://github.com/brandondykun/where-in-the-world",
    live: "https://where-in-the-world-ten-sigma.vercel.app/",
  },
  {
    title: "FIST Wordle",
    description:
      "A Wordle game for fellow military team members, using only military-specific words. Guess correctly and the technical definition is displayed.",
    tech: ["React", "CSS"],
    code: "https://github.com/brandondykun/fist_wordle",
    live: "https://brandondykun.github.io/fist_wordle/",
  },
  {
    title: "Portfolio V2",
    description:
      "My portfolio, revamped from the first version I built after coding boot camp, using the skills I've gained since.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Email.js",
      "Framer Motion",
      "shadcn/ui",
    ],
    code: "https://github.com/brandondykun/portfolio-v2",
  },
  {
    title: "Password Creation Validator",
    description:
      "Uses regex to make sure a registration password meets certain criteria, and alerts the user if it does not.",
    tech: ["React", "Regex", "Vite", "Vercel", "CSS"],
    code: "https://github.com/brandondykun/signup-verification",
    live: "https://signup-verification.vercel.app",
  },
  {
    title: "Card Details Form",
    description:
      "A checkout form whose card updates in real time as information is entered.",
    tech: ["React", "TypeScript", "Vite", "CSS"],
    code: "https://github.com/brandondykun/interactive-card-details-form",
    live: "https://interactive-user-form-kappa-blue.vercel.app/",
  },
];
