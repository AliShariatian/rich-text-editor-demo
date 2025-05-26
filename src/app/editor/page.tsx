import { FC, ReactElement } from "react";
import { type Metadata } from "next";

import { Container } from "@/components/layouts";
import { EditorSection } from "./_components/editor-section";

export const metadata: Metadata = {
  title: "Editor",
};

const EditorPage: FC = (): ReactElement => {
  return (
    <Container>
      <EditorSection />
    </Container>
  );
};

export default EditorPage;
