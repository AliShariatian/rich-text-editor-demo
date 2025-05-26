import { FC, JSX } from "react";
import { ContentEditable as LexicalContentEditable } from "@lexical/react/LexicalContentEditable";

export const ContentEditable: FC = (): JSX.Element => {
  const placeholderText: string = "شروع به نوشتن کن...";

  return (
    <LexicalContentEditable
      aria-placeholder={placeholderText}
      className="ContentEditable__root relative block min-h-72 overflow-auto px-8 py-4 focus:outline-none"
      placeholder={
        <div className="pointer-events-none absolute top-0 right-0 overflow-hidden px-8 py-[18px] text-ellipsis text-gray-500 select-none">
          {placeholderText}
        </div>
      }
    />
  );
};
