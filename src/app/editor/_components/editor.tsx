"use client";

import { FC, ReactElement, useState } from "react";
import { SerializedEditorState } from "lexical";

import { RichEditor } from "@/components/kits/rich-editor";

export const EditorSection: FC = (): ReactElement => {
  const [editorState, setEditorState] = useState<SerializedEditorState>();

  return (
    <RichEditor
      editorSerializedState={editorState}
      onSerializedChange={(value) => setEditorState(value)}
    />
  );
};
