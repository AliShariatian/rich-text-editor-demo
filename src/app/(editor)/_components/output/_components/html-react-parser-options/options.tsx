import { FC, ReactElement } from "react";
import { CopyButton } from "../copy-button";
import { CodeLangName } from "../code-lang-name";

type Props = {
  code: string;
  language: string;
};

export const Options: FC<Props> = ({ code, language }): ReactElement => {
  return (
    <div className="absolute top-1.5 right-1.5 flex items-center gap-2 text-gray-300 opacity-40 transition-opacity group-hover/code:opacity-100">
      <CopyButton text={code} className="transition-colors hover:text-gray-100" />
      <CodeLangName language={language} />
    </div>
  );
};
