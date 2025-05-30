"use client";

import { FC, ReactElement } from "react";
import { CopyIcon } from "lucide-react";
import { cn } from "@/utils";

type Props = {
  className?: string;
  text: string;
};

export const CopyButton: FC<Props> = ({ text, className }): ReactElement => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <span className={cn("cursor-pointer", className)} onClick={handleCopy}>
      <CopyIcon className="absolute top-1 right-1.5 size-4 text-gray-300 opacity-40 transition-all group-hover/code:opacity-100 hover:text-gray-100" />
    </span>
  );
};
