"use client";

import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import ContactForm from "../ContactForm";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  return (
    <section
      id="contact"
      className="min-h-screen sm:p-12 p-4 flex flex-col mt-12 pt-12"
    >
      <h2 className="text-3xl text-accent mb-12 font-bold tracking-wider pt-4">
        CONTACT
      </h2>
      <div className="lg:w-4/6 sm:5/6 m-auto text-center mb-12 md:mb-28 dark:text-stone-400 text-xl font-light dark:font-thin">
        Feel free to check out my LinkedIn and Github. You can send me an email
        directly from the form below or copy my email to send using the platform
        of your choice.
      </div>
      <div className="md:flex flex-1">
        <div className="flex-1 flex justify-center items-center md:border-r border-solid border-stone-400 dark:border-stone-800 mb-24 md:mb-0">
          <div className="flex flex-col gap-4 text-lg text-stone-800 dark:text-stone-300">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="flex gap-4 items-center hover:cursor-pointer dark:hover:text-green-500 hover:text-green-600"
                    onClick={() => {
                      navigator.clipboard.writeText("brandon.dykun@gmail.com");
                      toast({
                        title: "Success",
                        description: (
                          <div className="text-stone-900 dark:text-stone-200">
                            Email copied to clipboard.
                          </div>
                        ),
                        duration: 3000,
                      });
                    }}
                  >
                    <MdEmail size={25} />
                    <div>brandon.dykun@gmail.com</div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to Copy to Clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <a href="https://www.linkedin.com/in/bdykun" className="w-fit">
              <div className="flex gap-4 items-center dark:hover:text-green-500 hover:text-green-600">
                <BsLinkedin size={22} />
                <div>LinkedIn</div>
              </div>
            </a>
            <a href="https://www.github.com/brandondykun" className="w-fit">
              <div className="flex gap-4 items-center dark:hover:text-green-500 hover:text-green-600">
                <FaGithub size={25} />
                <div>GitHub</div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="text-2xl mb-8 text-accent">Send Me an Email</div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
