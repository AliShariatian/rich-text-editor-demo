import { EditorConfig } from "ckeditor5";

export const htmlSupport: EditorConfig["htmlSupport"] = {
  allow: [
    {
      name: /^.*$/,
      styles: true,
      attributes: true,
      classes: true,
    },
  ],
};
