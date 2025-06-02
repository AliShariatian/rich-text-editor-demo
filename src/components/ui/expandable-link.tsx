import { FC, ReactElement } from "react";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

export const ExpandableLink: FC<Props> = ({ text, href }): ReactElement => {
  return (
    <div className="relative">
      <Link
        href={href}
        className="desktop:w-72 desktop:h-16 block h-14 w-52 rounded-lg bg-cyan-400 transition-all duration-300 hover:scale-110 hover:bg-cyan-300"
      >
        <span className="sr-only">{text}</span>
      </Link>

      <span className="desktop:text-2xl pointer-events-none absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-lg font-bold text-cyan-950">
        {text}
      </span>
    </div>
  );
};
