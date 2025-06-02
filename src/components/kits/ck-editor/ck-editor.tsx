"use client";

import { FC, ReactElement, useState, useEffect, useRef, ComponentRef } from "react";
import { ClassicEditor, EventInfo } from "ckeditor5";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "ckeditor5/ckeditor5.css";

import { useEditorConfig } from "./_hook/use-editor-config";
import { Skeleton } from "@/components/ui/skeleton";
import "./_styles/ck-editor.css";

type Props = {
  content: string;
  setContent: (value: string) => void;
};

export const CKEditorRichTextEditor: FC<Props> = ({ content, setContent }): ReactElement => {
  const editorWordCountRef = useRef<ComponentRef<"div">>(null);
  const [isLayoutReady, setIsLayoutReady] = useState<boolean>(false);

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useEditorConfig();

  const handleOnChange = (_event: EventInfo, editor: ClassicEditor) => {
    setContent(editor.getData());
  };

  const handleOnReady = (editor: ClassicEditor) => {
    const wordCount = editor.plugins.get("WordCount");
    if (editorWordCountRef.current) {
      editorWordCountRef.current.appendChild(wordCount.wordCountContainer);
    }
  };

  const handleOnAfterDestroy = () => {
    if (editorWordCountRef.current) {
      Array.from(editorWordCountRef.current.children).forEach((child) => child.remove());
    }
  };

  return (
    <section>
      <div>
        {editorConfig && isLayoutReady ? (
          <CKEditor
            data={content}
            onChange={handleOnChange}
            editor={ClassicEditor}
            config={editorConfig}
            onReady={handleOnReady}
            onAfterDestroy={handleOnAfterDestroy}
          />
        ) : (
          <Skeleton className="h-96 w-full" />
        )}
      </div>

      <div ref={editorWordCountRef} />
    </section>
  );
};
