"use client";

import { FC, ReactElement } from "react";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer";

import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import { editorTheme } from "./themes";
import type { RichEditorProps } from "./types";

import { TooltipProvider } from "@/components/ui/tooltip";

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error);
  },
};

export const RichEditor: FC<RichEditorProps> = ({
  editorState,
  editorSerializedState,
  onChange,
  onSerializedChange,
}): ReactElement => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow dark:border-gray-800 dark:bg-gray-950">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
          ...(editorState ? { editorState } : {}),
          ...(editorSerializedState ? { editorState: JSON.stringify(editorSerializedState) } : {}),
        }}
      >
        <TooltipProvider>
          <Plugins />

          <OnChangePlugin
            ignoreSelectionChange={true}
            onChange={(editorState) => {
              onChange?.(editorState);
              onSerializedChange?.(editorState.toJSON());
            }}
          />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  );
};
