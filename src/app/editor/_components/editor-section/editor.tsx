"use client";

import { FC, ReactElement, useState } from "react";
import { RichEditor, type SerializedEditorState } from "@/components/kits/rich-editor";

export const Editor: FC = (): ReactElement => {
  const [editorState, setEditorState] = useState<SerializedEditorState>();

  return (
    <RichEditor
      editorSerializedState={editorState}
      onSerializedChange={(value) => setEditorState(value)}
    />
  );
};
