import { EditorConfig } from "ckeditor5";

export const highlight: EditorConfig["highlight"] = {
  options: [
    {
      model: "yellowMarker",
      class: "marker-yellow",
      title: "Yellow marker",
      color: "var(--ck-highlight-marker-yellow)",
      type: "marker",
    },
  ],
};
