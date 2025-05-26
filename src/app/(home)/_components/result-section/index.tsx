"use client";

import { FC, ReactElement } from "react";

import { useEditorContent } from "@/stores";
import { EmptyMessage } from "./empty-message";

export const ResultSection: FC = (): ReactElement => {
  const content = useEditorContent((state) => state.content);

  if (!content?.length) return <EmptyMessage />;

  return <section>ResultSection</section>;
};
