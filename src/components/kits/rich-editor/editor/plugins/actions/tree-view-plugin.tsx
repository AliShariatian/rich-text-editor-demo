"use client";

import { JSX } from "react";

import { NotebookPenIcon } from "lucide-react";
import { TreeView } from "@lexical/react/LexicalTreeView";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function TreeViewPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} variant={"ghost"} className="p-2">
          <NotebookPenIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-7xl">
        <DialogHeader>
          <DialogTitle>Tree View</DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[40rem] overflow-hidden rounded-lg bg-gray-900 text-gray-100">
          <TreeView
            viewClassName="p-8"
            treeTypeButtonClassName={buttonVariants({ variant: "secondary" })}
            timeTravelPanelClassName=""
            timeTravelButtonClassName=""
            timeTravelPanelSliderClassName=""
            timeTravelPanelButtonClassName=""
            editor={editor}
          />

          <ScrollBar orientation="vertical" />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
