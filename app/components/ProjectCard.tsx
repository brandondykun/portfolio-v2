type ProjectCard = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

export const ProjectCard = ({ icon, title, children }: ProjectCard) => {
  return (
    <div className="bg-stone-100 dark:bg-stone-950 w-full sm:max-w-sm relative p-4 pt-12 border border-solid dark:border-stone-800 border-stone-400 rounded-md shadow-lg flex flex-col col-span-1 h-full">
      <div className="bg-stone-100 dark:bg-stone-900 border border-solid border-stone-400 dark:border-stone-700 rounded-[50%] h-14 w-14 absolute -top-4 left-6 flex justify-center items-center text-accent">
        {icon}
      </div>
      <div className="font-bold text-lg dark:text-stone-100 hover:cursor-default">
        {title}
      </div>
      <div className="bg-accent h-[2px] w-12 m-2"></div>
      {children}
    </div>
  );
};

export const ProjectCardText = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="py-2 dark:text-stone-400 hover:cursor-default flex-1 font-light">
      {children}
    </div>
  );
};

export const ProjectCardPills = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-wrap gap-1 text-stone-300 py-6 min-h-[100px]">
      {children}
    </div>
  );
};

export const ProjectCardFooter = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="flex justify-between p-2 mt-auto">{children}</div>;
};

export const ProjectCardLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="text-accent hover:text-stone-900 dark:hover:text-stone-100 underline"
    >
      {children}
    </a>
  );
};
