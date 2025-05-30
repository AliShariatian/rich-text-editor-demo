"use client";

import { ReactElement, useState } from "react";

// Rich Editor ----------
import Editor from "reactjs-tiptap-editor";
import { extensions } from "./_extensions";
import type { RichTextEditorProps } from "./_types";
import { TopToolbar, EditorBubbleMenuContent } from "./_components";

// Styles ----------
import "reactjs-tiptap-editor/style.css";

import "prism-code-editor-lightweight/layout.css";
import "prism-code-editor-lightweight/themes/github-dark.css";

import "react-image-crop/dist/ReactCrop.css";

export default function RichTextEditor({
  setContent,
  content,
}: RichTextEditorProps): ReactElement {
  const [dark, setDark] = useState<boolean>(true);
  const [disable, setDisable] = useState<boolean>(false);

  const onChangeContent = (value: string) => {
    setContent(value);
  };

  return (
    <div dir="ltr">
      <TopToolbar
        isEditable={disable}
        onClickEditable={() => setDisable((prev) => !prev)}
        isDark={dark}
        onClickDark={() => setDark((prev) => !prev)}
      />

      <Editor
        output="html"
        contentClass="min-h-80"
        content={content}
        onChangeContent={onChangeContent}
        extensions={extensions}
        disabled={disable}
        dark={dark}
        bubbleMenu={{
          render({ extensionsNames, editor, disabled }, bubbleDefaultDom) {
            return (
              <EditorBubbleMenuContent
                editor={editor}
                disabled={disabled}
                defaultDom={bubbleDefaultDom}
                extensionsNames={extensionsNames}
              />
            );
          },
        }}
      />
    </div>
  );
}
