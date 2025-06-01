import { EditorConfig } from "ckeditor5";

export const mention: EditorConfig["mention"] = {
  feeds: [
    {
      marker: "@",
      feed: [
        /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
      ],
    },
  ],
};
