import { FC, ReactElement } from "react";
import { CKEditorRichTextEditorClient } from "@/components/kits/ck-editor";

export const TextEditorSection: FC = (): ReactElement => {
  return (
    <section className="flex flex-col gap-4">
      <CKEditorRichTextEditorClient />
    </section>
  );
};
