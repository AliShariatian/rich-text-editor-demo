import { FC, ReactElement } from "react";
import { CopyButton } from "../copy-button";
import { CodeLangName } from "../code-lang-name";

type Props = {
  code: string;
  language: string;
};

export const Options: FC<Props> = ({ code, language }): ReactElement => {
  return (
    <div className="flex h-9 w-full items-center justify-between bg-[#1d2634] px-4 text-gray-300">
      <CopyButton text={code} className="transition-colors hover:text-gray-50" />
      <CodeLangName language={language} />
    </div>
  );
};
