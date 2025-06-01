import { EditorConfig } from "ckeditor5";

export const blockToolbar: EditorConfig["blockToolbar"] = [
  "fontSize",
  "fontColor",
  "fontBackgroundColor",
  "|",
  "bold",
  "italic",
  "|",
  "link",
  "insertImage",
  "insertTable",
  "insertTableLayout",
  "|",
  "bulletedList",
  "numberedList",
  "outdent",
  "indent",
];
