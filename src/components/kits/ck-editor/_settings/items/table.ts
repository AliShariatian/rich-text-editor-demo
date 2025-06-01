import { EditorConfig } from "ckeditor5";

export const table: EditorConfig["table"] = {
  contentToolbar: [
    "tableColumn",
    "tableRow",
    "mergeTableCells",
    "tableProperties",
    "tableCellProperties",
  ],
};
