import { GraduationCap } from "lucide-react";
import { MdMilitaryTech } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import AboutCard from "../AboutCard";
import SlideRight from "../motion.tsx/SlideRight";
import SlideLeft from "../motion.tsx/SlideLeft";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen sm:p-12 p-4 pt-12 flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center mb-20 mt-6 w-full md:px-24">
        <div className="h-[1px] bg-stone-300 dark:bg-stone-700 flex-1"></div>
        <h2 className="text-3xl text-accent font-bold px-6 tracking-wider">
          ABOUT
        </h2>
        <div className="h-[1px] bg-stone-300 dark:bg-stone-700 flex-1"></div>
      </div>
      <div className="text-2xl pb-16 pt-8 dark:text-stone-300 text-center text-stone-900 font-light">
        My name is <span className="text-accent">Brandon</span>, and here is a
        little bit about me.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl m-x-auto">
        <SlideRight duration={1}>
          <AboutCard icon={<BsCodeSlash size={40} />}>
            I have been working as a developer since{" "}
            <span className="text-accent">2022</span> and have been coding as a
            hobby since <span className="text-accent">2020</span>. My
            professional experience is in full-stack web and mobile development.
            My current preferred technologies include React, React Native, and
            Django Rest Framework.
          </AboutCard>
        </SlideRight>
        <SlideLeft duration={1}>
          <AboutCard icon={<GraduationCap size={40} />}>
            I have a bachelors degree in Geospatial Information Science from the
            Indiana University of Pennsylvania. I graduated Summa Cum Laude with
            a <span className="text-accent"> 4.0 GPA. </span> While I did make a
            career change, I first discoverd coding in a college course, which
            made it all worth it!
          </AboutCard>
        </SlideLeft>
        <SlideRight duration={1} delay={0.2}>
          <AboutCard icon={<MdMilitaryTech size={40} />}>
            I have over 18 years of military experience which has taught me a
            lot about <span className="text-accent">leadership </span> and{" "}
            <span className="text-accent">teamwork</span>. The military has
            taken me around the world, and has made me adept at solving
            challenging problems with limited time and resources.
          </AboutCard>
        </SlideRight>

        <SlideLeft duration={1} delay={0.2}>
          <AboutCard icon={<GiFullMotorcycleHelmet size={40} />}>
            When I'm not working (or coding for fun), I prefer to be outside.
            Whether that is riding my{" "}
            <span className="text-accent">motorcycle</span>,{" "}
            <span className="text-accent">paddle boarding</span>, or going on a{" "}
            <span className="text-accent">camping</span> adventure, I enjoy
            escaping the keyboard and experiencing all the things the outdoors
            has to offer.
          </AboutCard>
        </SlideLeft>
      </div>
    </section>
  );
};

export default AboutSection;
