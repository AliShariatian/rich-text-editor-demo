"use client";

import { FC, ReactElement } from "react";

import parse from "html-react-parser";
import { options } from "./_components/html-react-parser-options";

type Props = {
  content: string;
  hideHTML?: boolean;
};

export const Output: FC<Props> = ({ content, hideHTML = false }): ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <article className="bb rounded-md p-4">{parse(content, options)}</article>

      {!hideHTML && (
        <div dir="ltr" className="bb rounded-md p-4 text-left text-wrap break-all">
          {content}
        </div>
      )}
    </div>
  );
};
