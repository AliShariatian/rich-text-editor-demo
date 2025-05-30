import { FC, ReactElement } from "react";

type Props = {
  language: string;
};

export const CodeLangName: FC<Props> = ({ language }): ReactElement => {
  return (
    <span className="absolute right-1.5 bottom-0.5 text-xs text-gray-300 capitalize opacity-40 transition-opacity group-hover/code:opacity-100">
      {language}
    </span>
  );
};
