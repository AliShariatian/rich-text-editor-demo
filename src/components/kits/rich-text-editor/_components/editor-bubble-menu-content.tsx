import { FC, ReactElement } from "react";
import {
  BubbleMenuTwitter,
  BubbleMenuKatex,
  BubbleMenuExcalidraw,
  BubbleMenuMermaid,
  BubbleMenuDrawer,
} from "reactjs-tiptap-editor/bubble-extra";

import type { EditorBubbleMenuContentProps } from "../_types";

export const EditorBubbleMenuContent: FC<EditorBubbleMenuContentProps> = ({
  editor,
  disabled,
  extensionsNames,
  defaultDom,
}): ReactElement => {
  return (
    <>
      {defaultDom}

      {extensionsNames.includes("twitter") && (
        <BubbleMenuTwitter disabled={disabled} editor={editor} key="twitter" />
      )}

      {extensionsNames.includes("katex") && (
        <BubbleMenuKatex disabled={disabled} editor={editor} key="katex" />
      )}

      {extensionsNames.includes("excalidraw") && (
        <BubbleMenuExcalidraw disabled={disabled} editor={editor} key="excalidraw" />
      )}

      {extensionsNames.includes("mermaid") && (
        <BubbleMenuMermaid disabled={disabled} editor={editor} key="mermaid" />
      )}

      {extensionsNames.includes("drawer") && (
        <BubbleMenuDrawer disabled={disabled} editor={editor} key="drawer" />
      )}
    </>
  );
};
