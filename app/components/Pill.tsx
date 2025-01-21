const Pill = ({ text }: { text: string }) => {
  return (
    <div className="rounded-[20px] bg-stone-700 py-1 px-3 w-fit text-xs hover:cursor-default h-fit">
      {text}
    </div>
  );
};

export default Pill;
