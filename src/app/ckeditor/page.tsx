import { FC, ReactElement } from "react";
import { type Metadata } from "next";

import { Container } from "@/components/layouts";
import { TextEditorSection } from "./_components/text-editor-section";

export const metadata: Metadata = {
  title: "CKEditor",
};

const CKEditorPage: FC = (): ReactElement => {
  return (
    <Container>
      <TextEditorSection />
    </Container>
  );
};

export default CKEditorPage;
