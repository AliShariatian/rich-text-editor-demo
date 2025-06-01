import { FC, ReactElement } from "react";

type Props = {
  language: string;
};

export const CodeLangName: FC<Props> = ({ language }): ReactElement => {
  return <span className="font-jetBrains text-xs">{language}</span>;
};
