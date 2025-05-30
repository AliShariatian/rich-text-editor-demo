"use client";

import { FC, ReactElement } from "react";

import { useEditorContent } from "@/stores";
import { EmptyMessage } from "./empty-message";
import { Output } from "@/app/editor/_components/text-editor-section/output";

export const ResultSection: FC = (): ReactElement => {
  const content = useEditorContent((state) => state.content);

  console.log(content);

  if (!content?.length) return <EmptyMessage />;

  return (
    <ul className="flex flex-col gap-10">
      {content.map((item, index) => (
        <li key={index}>
          <Output content={item} />
        </li>
      ))}
    </ul>
  );
};
