"use client";

import { FC, ReactElement } from "react";
import { XIcon } from "lucide-react";

import { useEditorContent } from "@/stores";
import { EmptyMessage } from "./empty-message";
import { Output } from "@/app/(editor)/_components/output";

export const ResultSection: FC = (): ReactElement => {
  const content = useEditorContent((state) => state.content);
  const removeContent = useEditorContent((state) => state.removeContent);

  if (!content?.length) return <EmptyMessage />;

  return (
    <ul className="flex flex-col gap-10">
      {content.map((item, index) => (
        <li key={index} className="relative">
          <XIcon
            onClick={() => removeContent(item.id)}
            className="absolute -top-0 -left-0 size-4 cursor-pointer rounded-full bg-red-500"
          />

          <Output content={item.text} hideHTML />
        </li>
      ))}
    </ul>
  );
};
