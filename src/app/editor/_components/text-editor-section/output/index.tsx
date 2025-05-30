"use client";

import { FC, ReactElement } from "react";

import parse from "html-react-parser";
import { options } from "./_components/html-react-parser-options";

type Props = {
  content: string;
};

export const Output: FC<Props> = ({ content }): ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <article className="bb p-4">{parse(content, options)}</article>

      <div dir="ltr" className="bb p-4">
        {content}
      </div>
    </div>
  );
};
