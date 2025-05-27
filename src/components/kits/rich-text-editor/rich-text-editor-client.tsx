"use client";

import { FC, ReactElement } from "react";
import dynamic from "next/dynamic";

import { Skeleton } from "@/components/ui/skeleton";
import type { RichTextEditorProps } from "./types";

const RichTextEditor = dynamic(() => import("./rich-text-editor"), {
  loading: () => <Skeleton className="h-96 w-full" />,
  ssr: false,
});

export const RichTextEditorClient: FC<RichTextEditorProps> = (props): ReactElement => {
  return <RichTextEditor {...props} />;
};
