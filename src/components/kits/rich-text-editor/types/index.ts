import { ReactNode, type ComponentPropsWithoutRef } from "react";
import RichEditor, { Editor } from "reactjs-tiptap-editor";

export type EditorProps = ComponentPropsWithoutRef<typeof RichEditor>;

export type RichTextEditorProps = {
  content: string;
  setContent: (value: string) => void;
};

export type EditorBubbleMenuContentProps = {
  editor: Editor;
  disabled: boolean;
  extensionsNames: string[];
  defaultDom: ReactNode;
};
