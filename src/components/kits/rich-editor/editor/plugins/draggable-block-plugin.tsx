"use client";

import { useRef, JSX, RefObject } from "react";

import { GripVerticalIcon } from "lucide-react";
import { DraggableBlockPlugin_EXPERIMENTAL as LexicalDraggableBlockPlugin } from "@lexical/react/LexicalDraggableBlockPlugin";

const DRAGGABLE_BLOCK_MENU_CLASSNAME = "draggable-block-menu";

const isOnMenu = (element: HTMLElement): boolean => {
  return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`);
};

export function DraggableBlockPlugin({
  anchorElem,
}: {
  anchorElem: HTMLElement | null;
}): JSX.Element | null {
  const menuRef = useRef<HTMLDivElement>(null);
  const targetLineRef = useRef<HTMLDivElement>(null);

  if (!anchorElem) return null;

  return (
    <LexicalDraggableBlockPlugin
      anchorElem={anchorElem}
      menuRef={menuRef as RefObject<HTMLDivElement>}
      targetLineRef={targetLineRef as RefObject<HTMLDivElement>}
      menuComponent={
        <div
          ref={menuRef}
          className="draggable-block-menu absolute top-0 left-4 cursor-grab rounded-sm px-[1px] py-0.5 opacity-0 will-change-transform hover:bg-gray-700 active:cursor-grabbing"
        >
          <GripVerticalIcon className="size-4 opacity-30" />
        </div>
      }
      targetLineComponent={
        <div
          ref={targetLineRef}
          className="pointer-events-none absolute top-0 left-0 h-1 bg-gray-900 opacity-0 will-change-transform dark:bg-gray-50"
        />
      }
      isOnMenu={isOnMenu}
    />
  );
}
