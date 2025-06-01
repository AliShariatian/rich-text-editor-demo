"use client";

import { FC, ReactElement, useState } from "react";

import { RichTextEditorClient } from "@/components/kits/rich-text-editor";
import { ShareButton } from "./share-button";
import { Output } from "../../../_components/output";

export const TextEditorSection: FC = (): ReactElement => {
  const [content, setContent] = useState<string>("");

  return (
    <section className="flex flex-col gap-4">
      <RichTextEditorClient content={content} setContent={setContent} />

      <ShareButton content={content} />

      <Output content={content} />
    </section>
  );
};
