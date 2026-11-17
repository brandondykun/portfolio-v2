type Props = {
  number: string;
  title: string;
  id?: string;
  /** Use the inverted "band" palette (About section). */
  inverted?: boolean;
};

const SectionHeading = ({ number, title, id, inverted }: Props) => {
  return (
    <h2
      id={id}
      className="flex items-baseline gap-3 text-3xl font-medium tracking-tight sm:text-4xl"
    >
      <span
        className={`font-mono text-xs font-medium ${
          inverted ? "text-band-accent" : "text-accent"
        }`}
      >
        {number}
      </span>
      {title}
    </h2>
  );
};

export default SectionHeading;
