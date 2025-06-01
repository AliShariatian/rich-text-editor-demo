"use client";

import { FC, ReactElement, useState } from "react";

import { CKEditorRichTextEditorClient } from "@/components/kits/ck-editor";
import { Output } from "@/app/(editor)/_components/output";
import { ShareButton } from "@/app/(editor)/react-tiptap/_components/text-editor-section/share-button";

export const TextEditorSection: FC = (): ReactElement => {
  const [content, setContent] = useState<string>("");

  return (
    <section className="flex flex-col gap-4">
      <CKEditorRichTextEditorClient content={content} setContent={setContent} />

      <ShareButton content={content} />

      <Output content={content} />
    </section>
  );
};
