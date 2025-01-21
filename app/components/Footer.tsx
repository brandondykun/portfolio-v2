import HoverNavLink from "./HoverNavLink";

const Footer = () => {
  return (
    <footer className="p-8 border-t border-t-solid border-stone-400 dark:border-stone-800 bg-stone-300 dark:bg-stone-950 relative flex flex-col items-center justify-center gap-6">
      <span className="text-accent font-bold absolute right-4 top-4">BD</span>
      <div className="dark:text-stone-600 text-stone-500">
        <span className="text-accent pr-2">-</span>
        Brandon Dykun
        <span className="text-accent pl-2">-</span>
      </div>
      <div className="flex sm:gap-6 flex-row gap-4 w-full justify-center">
        <HoverNavLink href="#home" label="Home" />
        <HoverNavLink href="#about" label="About" />
        <HoverNavLink href="#skills" label="Skills" />
        <HoverNavLink href="#projects" label="Projects" />
        <HoverNavLink href="#contact" label="Contact" />
      </div>
    </footer>
  );
};

export default Footer;
