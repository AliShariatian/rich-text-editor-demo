"use client";

import { FC, ReactElement, useState, useEffect, useRef, ComponentRef } from "react";
import { ClassicEditor } from "ckeditor5";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "ckeditor5/ckeditor5.css";

import { useEditorConfig } from "./_hook/use-editor-config";
import "./_styles/ck-editor.css";

export const CKEditorRichTextEditor: FC = (): ReactElement => {
  const initialData: string = "";

  const editorWordCountRef = useRef<ComponentRef<"div">>(null);
  const [isLayoutReady, setIsLayoutReady] = useState<boolean>(false);

  useEffect(() => {
    setIsLayoutReady(true);
    return () => setIsLayoutReady(false);
  }, []);

  const { editorConfig } = useEditorConfig({ initialData });

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
    <section className="">
      <div>
        {editorConfig && isLayoutReady && (
          <CKEditor
            editor={ClassicEditor}
            config={editorConfig}
            onReady={handleOnReady}
            onAfterDestroy={handleOnAfterDestroy}
          />
        )}
      </div>

      <div className="" ref={editorWordCountRef} />
    </section>
  );
};
