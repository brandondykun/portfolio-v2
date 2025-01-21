"use client";

import { motion } from "framer-motion";
import { BiDumbbell } from "react-icons/bi";
import {
  ProjectCard,
  ProjectCardText,
  ProjectCardPills,
  ProjectCardFooter,
  ProjectCardLink,
} from "../ProjectCard";
import Pill from "../Pill";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { RiLockPasswordFill, RiTeamFill } from "react-icons/ri";
import {
  BsJournalBookmark,
  BsGlobeAmericas,
  BsCreditCard,
} from "react-icons/bs";
import { IoPaw, IoCodeSlashOutline } from "react-icons/io5";

const ProjectsSection = () => {
  const container = {
    hidden: {
      opacity: 1,
      transition: {
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { translateY: 100, opacity: 0 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        type: "spring",
        damping: 20,
      },
    },
  };

  return (
    <section id="projects" className="min-h-screen sm:p-12 p-4 mt-12 pt-12">
      <h2 className="text-3xl text-accent mb-12 font-bold tracking-wider pt-4">
        PROJECTS
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center max-w-[1200px] m-auto"
        whileInView={["hidden", "show"]}
        initial="hidden"
        variants={container}
        viewport={{ once: true }}
      >
        <motion.div variants={item} className="h-full">
          <ProjectCard
            title="Army ACFT Calculator"
            icon={<BiDumbbell size={35} />}
          >
            <ProjectCardText>
              The ACFT is the Army Combat Fitness Test. It's a 6 event test that
              is a pain to score with paper score sheets. Other online ACFT
              calculators were either difficult to use on a mobile device or had
              edge case incorrect scores, so I built my own. Built with Next.js,
              the Army ACFT Calculator is designed to work seamlessly on any
              device.
            </ProjectCardText>
            <ProjectCardPills>
              <Pill text="React" />
              <Pill text="Next.js" />
              <Pill text="TypeScript" />
              <Pill text="Tailwind" />
              <Pill text="Playwright" />
            </ProjectCardPills>
            <ProjectCardFooter>
              <ProjectCardLink href="https://github.com/brandondykun/acft-calculator">
                View GitHub
              </ProjectCardLink>
              <ProjectCardLink href="https://armyacftcalculator.com">
                View Live
              </ProjectCardLink>
            </ProjectCardFooter>
          </ProjectCard>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <ProjectCard title="OnlyPaws Mobile App" icon={<IoPaw size={27} />}>
            <ProjectCardText>
              Scrolling social media can be great fun, but let's be honest, it
              can also be exhausting. That's where OnlyPaws comes in! OnlyPaws
              is a social media mobile app for adorable pet profiles. Users can
              have a guilt free scrolling experience that is both entertaining
              and good for their mental health. OnlyPaws is projected to launch
              on the App Store and Google Play Store in Spring of 2025.
            </ProjectCardText>
            <ProjectCardPills>
              <Pill text="React Native" />
              <Pill text="TypeScript" />
              <Pill text="Expo" />
              <Pill text="Docker" />
              <Pill text="Django Rest Framework" />
              <Pill text="AWS S3" />
              <Pill text="Maestro" />
            </ProjectCardPills>
            <ProjectCardFooter>
              <ProjectCardLink href="https://github.com/brandondykun/onlypaws-app">
                View GitHub
              </ProjectCardLink>
            </ProjectCardFooter>
          </ProjectCard>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <ProjectCard
            title="Code Editor"
            icon={<IoCodeSlashOutline size={27} />}
          >
            <ProjectCardText>
              Have you ever needed to run a small piece of code to make sure it
              works as expected? Me too! Having to create a whole new file and
              opening it in your code editor is just plain cumbersome. I started
              using browser based code editors, but I was tired of the ads and
              popups, so I decided to build my own. The code editor is powered
              by Piston and has 8 different languages to choose from.
            </ProjectCardText>
            <ProjectCardPills>
              <Pill text="React" />
              <Pill text="Next.js" />
              <Pill text="TypeScript" />
              <Pill text="Tailwind CSS" />
              <Pill text="Monaco-Editor/React" />
              <Pill text="Piston API" />
              <Pill text="shadcn/ui" />
            </ProjectCardPills>
            <ProjectCardFooter>
              <ProjectCardLink href="https://github.com/brandondykun/code-editor/tree/main">
                View GitHub
              </ProjectCardLink>
              <ProjectCardLink href="https://code-editor-lwkgli7mu-brandondykuns-projects.vercel.app/">
                View Live
              </ProjectCardLink>
            </ProjectCardFooter>
          </ProjectCard>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <ProjectCard
            title="Portfolio V2"
            icon={<BsJournalBookmark size={27} />}
          >
            <ProjectCardText>
              As a web developer, showing your work online is crucial. I created
              this portfolio to showcase my work and to share a little bit about
              myself. I created my first portfolio shortly after graduating from
              a coding boot camp, but after spending a while building the web, I
              decided to use my new skills and revamp it to create V2.
            </ProjectCardText>
            <ProjectCardPills>
              <Pill text="React" />
              <Pill text="Next.js" />
              <Pill text="TypeScript" />
              <Pill text="Tailwind" />
              <Pill text="Email.js" />
              <Pill text="Framer Motion" />
              <Pill text="shadcn/ui" />
            </ProjectCardPills>
            <ProjectCardFooter>
              <ProjectCardLink href="">View GitHub</ProjectCardLink>
            </ProjectCardFooter>
          </ProjectCard>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <ProjectCard
            title="Wordle Clone"
            icon={<TfiLayoutGrid4Alt size={27} />}
          >
            <ProjectCardText>
              FIST Wordle is a side project that was built for my fellow
              military team members. The game uses only military specific words,
              and when a word is guessed correctly, the technical definition is
              displayed. It was designed to be simple, fun, and educational.
            </ProjectCardText>
            <ProjectCardPills>
              <Pill text="React" />
              <Pill text="CSS" />
            </ProjectCardPills>
            <ProjectCardFooter>
              <ProjectCardLink href="https://github.com/brandondykun/fist_wordle">
                View GitHub
              </ProjectCardLink>
              <ProjectCardLink href="https://brandondykun.github.io/fist_wordle/">
                View Live
              </ProjectCardLink>
            </ProjectCardFooter>
          </ProjectCard>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <ProjectCard
            title="Password Creation Validator"
            icon={<RiLockPasswordFill size={27} />}
          >
            <ProjectCardText>
              This is a fun registration password verification project. It uses
              regex to ensure that the registration password meets certain
              criteria and alerts the user if it doesn't. It also uses React
              Context to pass the sign up information between components!
            </ProjectCardText>
            <ProjectCardPills>
              <Pill text="React" />
              <Pill text="CSS" />
              <Pill text="Regex" />
              <Pill text="Vite" />
              <Pill text="Vercel" />
            </ProjectCardPills>
            <ProjectCardFooter>
              <ProjectCardLink href="https://github.com/brandondykun/signup-verification">
                View GitHub
              </ProjectCardLink>
              <ProjectCardLink href="https://signup-verification.vercel.app">
                View Live
              </ProjectCardLink>
            </ProjectCardFooter>
          </ProjectCard>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <ProjectCard
            title="Small Team Management System"
            icon={<RiTeamFill size={27} />}
          >
            <ProjectCardText>
              Managing people can be hard. The Small Team Management system was
              created to help track information and career progress milestones
              for Soldiers under my leadership. Team members can log in to view
              and edit their information as well as receive direct feedback
              notes regarding performance.
            </ProjectCardText>
            <ProjectCardPills>
              <Pill text="React" />
              <Pill text="CSS" />
              <Pill text="Vite" />
              <Pill text="Vercel" />
              <Pill text="Firebase" />
              <Pill text="Firebase Auth" />
              <Pill text="Cypress" />
            </ProjectCardPills>
            <ProjectCardFooter>
              <ProjectCardLink href="https://github.com/brandondykun/stms">
                View GitHub
              </ProjectCardLink>
              <ProjectCardLink href="https://www.110thfist.com/login">
                View Live
              </ProjectCardLink>
            </ProjectCardFooter>
          </ProjectCard>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <ProjectCard
            title="Where in the World?"
            icon={<BsGlobeAmericas size={27} />}
          >
            <ProjectCardText>
              Where in the World is an exploratory site that displays
              information about countries around the world. It features light
              and dark mode, and the countries can be filtered by region. Users
              can also search for a specific country. On each country details
              page, users can find out more detailed information about the
              country and explore all border countries.
            </ProjectCardText>
            <ProjectCardPills>
              <Pill text="React" />
              <Pill text="Next.js" />
              <Pill text="TypeScript" />
              <Pill text="Tailwind" />
              <Pill text="shadcn/ui" />
              <Pill text="REST Countries API" />
            </ProjectCardPills>
            <ProjectCardFooter>
              <ProjectCardLink href="https://github.com/brandondykun/where-in-the-world">
                View GitHub
              </ProjectCardLink>
              <ProjectCardLink href="https://where-in-the-world-ten-sigma.vercel.app/">
                View Live
              </ProjectCardLink>
            </ProjectCardFooter>
          </ProjectCard>
        </motion.div>

        <motion.div variants={item} className="h-full">
          <ProjectCard
            title="Card Details Form"
            icon={<BsCreditCard size={27} />}
          >
            <ProjectCardText>
              When buying something online, the checkout process is important.
              Having a seamless,intuitive checkout process builds trust and
              confidence with users. This project created a fun experience for
              users that updates a card's information in real time as
              information is entered. It give the process a professional
              trustworthy feel for users.
            </ProjectCardText>
            <ProjectCardPills>
              <Pill text="React" />
              <Pill text="TypeScript" />
              <Pill text="CSS" />
              <Pill text="Vite" />
            </ProjectCardPills>
            <ProjectCardFooter>
              <ProjectCardLink href="https://github.com/brandondykun/interactive-card-details-form">
                View GitHub
              </ProjectCardLink>
              <ProjectCardLink href="https://interactive-user-form-kappa-blue.vercel.app/">
                View Live
              </ProjectCardLink>
            </ProjectCardFooter>
          </ProjectCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
