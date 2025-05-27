"use client";

import { FC, ReactElement } from "react";

type Props = {
  isDark: boolean;
  onClickDark: () => void;

  isEditable: boolean;
  onClickEditable: () => void;
};

export const TopToolbar: FC<Props> = ({
  isDark,
  onClickDark,
  isEditable,
  onClickEditable,
}): ReactElement => {
  return (
    <div className="mb-5 flex gap-3 *:px-3 *:py-2 hover:*:cursor-pointer">
      <button onClick={onClickDark}>{isDark ? "Light" : "Dark"}</button>

      <button onClick={onClickEditable}>{isEditable ? "Editable" : "Readonly"}</button>

      <button
        onClick={() => {
          window.open("https://github.com/hunghg255/reactjs-tiptap-editor-demo", "_blank");
        }}
      >
        Source Demo
      </button>

      <button
        onClick={() => {
          window.open("https://reactjs-tiptap-editor.vercel.app/", "_blank");
        }}
      >
        Documentation
      </button>
    </div>
  );
};
