"use client";

import SkillImage from "../SkillImage";
import jsImage from "../../../public/javascript.svg";
import tsImage from "../../../public/typescript.svg";
import pythonImage from "../../../public/python.svg";
import htmlImage from "../../../public/html5.svg";
import cssImage from "../../../public/css.svg";
import tailwindImage from "../../../public/tailwind.svg";
import scssImage from "../../../public/scss.svg";
import pwImage from "../../../public/playwright.svg";
import cyImage from "../../../public/cypress.svg";
import reactImage from "../../../public/react.svg";
import nextImage from "../../../public/next.svg";
import reduxImage from "../../../public/redux.svg";
import pgImage from "../../../public/postgresql.svg";
import nodeImage from "../../../public/node.svg";
import djangoImage from "../../../public/django.svg";
import fbImage from "../../../public/firebase.svg";
import gitImage from "../../../public/git.svg";
// import gitHubImage from "../../../public/github.svg";
// import gitLabImage from "../../../public/gitlab.svg";
// import githubDark from "../../../public/github-dark.svg";
import nextDarkImg from "../../../public/next-dark.svg";
import cyDarkImg from "../../../public/cypress-dark.svg";
import dockerImage from "../../../public/docker.svg";
import expoImage from "../../../public/expo.svg";
import expoDarkImage from "../../../public/expo-dark.svg";
import awsImage from "../../../public/aws.svg";
import awsDarkImage from "../../../public/aws-dark.svg";
import { RxTriangleRight } from "react-icons/rx";
import { motion } from "framer-motion";

const SkillsSection = () => {
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
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { translateY: 500, opacity: 0 },
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
    <section id="skills" className="min-h-screen sm:p-12 p-4 pt-12 mt-12">
      <h2 className="text-3xl text-accent mb-12 font-bold tracking-wider pt-4">
        SKILLS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
        <div className="md:pr-8 max-w-sm m-auto md:max-w-lg lg:pb-0 text-stone-700 dark:text-stone-300">
          <motion.div
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
          >
            <div className="font-bold text-lg dark:text-stone-200">
              Technical
            </div>
            <div className="bg-accent h-[2px] w-28 mb-2"></div>
          </motion.div>
          <p className="pb-4">
            My technical skill set centers around front end web and mobile
            development using React and React Native, but I also have experience
            with Django Rest Framework, Firebase, and Node.
          </p>
          <ul className="dark:text-stone-400 pl-4 mb-12 md:mb-0">
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>JavaScript</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>TypeScript</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>React</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>React Native</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>Next.js</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>Tailwind</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>Python</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>Django (DRF)</span>
            </li>
          </ul>

          <motion.div
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
          >
            <div className="mt-12 font-bold text-lg dark:text-stone-200">
              Personal
            </div>
            <div className="bg-accent h-[2px] w-28 mb-2"></div>
          </motion.div>
          <p className="pb-4">
            Aside from technical skills, I have years of military experience
            leading teams and working with others around the world to solve
            difficult problems with limited time and resources.
          </p>
          <ul className="pl-4 mb-12 lg:mb-0 dark:text-stone-400">
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>Leadership</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>Problem Solving</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>Teamwork</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>Communication</span>
            </li>
            <li className="flex items-center gap-1">
              <span className="text-accent">
                <RxTriangleRight size={20} />
              </span>
              <span>Resiliency</span>
            </li>
          </ul>
        </div>

        <motion.div
          className="grid p-4 grid-cols-3 sm:grid-cols-5 place-items-center max-w-[500px] m-auto bg-stone-100 dark:bg-stone-950 rounded-lg border border-solid border-stone-300 dark:border-stone-900 sm:shadow-[10px_10px_0px_0px_#a8a29e] dark:sm:shadow-[10px_10px_0px_0px_#22c55e] overflow-hidden shadow-accent"
          whileInView={["hidden", "show"]}
          initial="hidden"
          variants={container}
          viewport={{ once: true }}
        >
          <SkillImage
            src={jsImage.src}
            alt="javaScript"
            label="JavaScript"
            variants={item}
          />
          <SkillImage
            src={tsImage.src}
            alt="typeScript"
            label="TypeScript"
            variants={item}
          />
          <SkillImage
            src={reactImage.src}
            alt="react"
            label="React"
            variants={item}
          />
          <div className="dark:hidden">
            <SkillImage
              src={nextImage.src}
              alt="next.js"
              label="Next.js"
              variants={item}
            />
          </div>
          <div className="hidden dark:block">
            <SkillImage
              src={nextDarkImg.src}
              alt="next.js"
              label="Next.js"
              variants={item}
            />
          </div>
          <div className="dark:hidden">
            <SkillImage
              src={expoImage.src}
              alt="expo"
              label="Expo"
              variants={item}
            />
          </div>
          <div className="hidden dark:block">
            <SkillImage
              src={expoDarkImage.src}
              alt="expo"
              label="Expo"
              variants={item}
            />
          </div>
          <SkillImage
            src={reduxImage.src}
            alt="redux"
            label="Redux"
            variants={item}
          />
          <SkillImage
            src={htmlImage.src}
            alt="html5"
            label="HTML5"
            variants={item}
          />
          <SkillImage
            src={tailwindImage.src}
            alt="tailwind"
            label="Tailwind"
            variants={item}
          />
          <SkillImage
            src={scssImage.src}
            alt="scss"
            label="Scss"
            variants={item}
          />
          <SkillImage
            src={cssImage.src}
            alt="css"
            label="CSS"
            variants={item}
          />
          <SkillImage
            src={dockerImage.src}
            alt="docker"
            label="Docker"
            variants={item}
          />
          <SkillImage
            src={pgImage.src}
            alt="postgresql"
            label="PostgreSQL"
            variants={item}
          />
          <SkillImage
            src={nodeImage.src}
            alt="node"
            label="Node"
            variants={item}
          />
          <SkillImage
            src={pythonImage.src}
            alt="python"
            label="Python"
            variants={item}
          />
          <SkillImage
            src={djangoImage.src}
            alt="django"
            label="Django"
            variants={item}
          />
          <SkillImage
            src={fbImage.src}
            alt="firebase"
            label="Firebase"
            variants={item}
          />
          <div className="dark:hidden">
            <SkillImage
              src={awsImage.src}
              alt="aws"
              label="AWS"
              variants={item}
            />
          </div>
          <div className="hidden dark:block">
            <SkillImage
              src={awsDarkImage.src}
              alt="aws"
              label="AWS"
              variants={item}
            />
          </div>
          <div className="dark:hidden">
            <SkillImage
              src={cyImage.src}
              alt="cypress"
              label="Cypress"
              variants={item}
            />
          </div>
          <div className="hidden dark:block">
            <SkillImage
              src={cyDarkImg.src}
              alt="cypress"
              label="Cypress"
              variants={item}
            />
          </div>
          <SkillImage
            src={pwImage.src}
            alt="playwright"
            label="Playwright"
            variants={item}
          />

          <SkillImage
            src={gitImage.src}
            alt="git"
            label="Git"
            variants={item}
          />

          {/* <div className="dark:hidden">
            <SkillImage
              src={gitHubImage.src}
              alt="github"
              label="Github"
              variants={item}
            />
          </div>
          <div className="hidden dark:block">
            <SkillImage
              src={githubDark.src}
              alt="github"
              label="Github"
              variants={item}
            />
          </div>
          <SkillImage
            src={gitLabImage.src}
            alt="gitlab"
            label="GitLab"
            variants={item}
          /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
