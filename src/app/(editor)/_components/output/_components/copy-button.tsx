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
      <CopyIcon className="size-4" />
    </span>
  );
};
