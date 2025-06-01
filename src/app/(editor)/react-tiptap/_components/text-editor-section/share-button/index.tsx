"use client";

import { useEditorContent } from "@/stores";
import { FC, ReactElement } from "react";

type Props = {
  content: string;
};

export const ShareButton: FC<Props> = ({ content }): ReactElement => {
  const addContent = useEditorContent((state) => state.addContent);

  const handleShareContent = () => {
    addContent(content);
  };

  return (
    <button
      onClick={handleShareContent}
      className="w-full cursor-pointer rounded-lg bg-green-700 py-2 transition-colors hover:bg-green-600"
    >
      انتشار
    </button>
  );
};
