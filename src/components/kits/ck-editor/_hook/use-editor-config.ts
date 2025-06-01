import { useMemo } from "react";
import { EditorConfig } from "ckeditor5";

import {
  toolbar,
  plugins,
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
} from "../_settings";

type Params = {
  initialData: string;
};

export const useEditorConfig = ({ initialData }: Params) => {
  const editorConfig = useMemo((): EditorConfig | undefined => {
    return {
      initialData,
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
    };
  }, [initialData]);

  return { editorConfig };
};
