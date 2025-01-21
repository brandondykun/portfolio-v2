type Props = {
  href: string;
  label: string;
};

const HoverNavLink = ({ href, label }: Props) => {
  return (
    <a className="relative group hover:cursor-pointer" href={href}>
      <span>{label}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
    </a>
  );
};

export default HoverNavLink;
