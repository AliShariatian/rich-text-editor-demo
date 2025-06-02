import { useMemo } from "react";
import { EditorConfig } from "ckeditor5";

import {
  plugins,
  toolbar,
  balloonToolbar,
  blockToolbar,
  heading,
  style,
  mention,
  link,
  table,
  image,
  fontSize,
  list,
  htmlSupport,
  fontFamily,
  language,
  highlight,
  autosave,
} from "../_settings";

export const useEditorConfig = () => {
  const editorConfig = useMemo((): EditorConfig | undefined => {
    return {
      placeholder: "شروع کن",
      licenseKey: "GPL",
      plugins,
      toolbar,
      balloonToolbar,
      language,
      blockToolbar,
      fontFamily,
      fontSize,
      heading,
      htmlSupport,
      image,
      link,
      list,
      mention,
      style,
      table,
      highlight,
      autosave,

      codeBlock: { indentSequence: "9" },
    };
  }, []);

  return { editorConfig };
};
