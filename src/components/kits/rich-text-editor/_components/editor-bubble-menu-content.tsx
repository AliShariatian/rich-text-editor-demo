import { FC, ReactElement } from "react";
import { BubbleMenuKatex, BubbleMenuDrawer } from "reactjs-tiptap-editor/bubble-extra";

import type { EditorBubbleMenuContentProps } from "../_types";

export const EditorBubbleMenuContent: FC<EditorBubbleMenuContentProps> = ({
  editor,
  disabled,
  extensionsNames,
  defaultDom,
}): ReactElement => {
  return (
    <div dir="ltr">
      {defaultDom}

      {extensionsNames.includes("katex") && (
        <BubbleMenuKatex disabled={disabled} editor={editor} key="katex" />
      )}

      {extensionsNames.includes("drawer") && (
        <BubbleMenuDrawer disabled={disabled} editor={editor} key="drawer" />
      )}
    </div>
  );
};
