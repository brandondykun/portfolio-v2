type Props = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

const AboutCard = ({ icon, children }: Props) => {
  return (
    <div className="border-2 border-solid border-stone-300 dark:border-stone-800 rounded-lg overflow-hidden relative w-full text-stone-900 dark:text-stone-300 flex-1 sm:min-w-[250px] bg-stone-100 dark:bg-stone-950 shadow-lg h-full">
      <div className="absolute top-2 left-6 text-accent">{icon}</div>
      <div className="bg-stone-300 dark:bg-stone-900 rotate-45 h-10 absolute top-0 right-[-60px] w-[200px]"></div>
      <p className="p-4 pt-16 md:p-8 md:pt-16 font-light">{children}</p>
    </div>
  );
};

export default AboutCard;
