import { EditorConfig } from "ckeditor5";

export const image: EditorConfig["image"] = {
  toolbar: [
    "toggleImageCaption",
    "imageTextAlternative",
    "|",
    "imageStyle:inline",
    "imageStyle:wrapText",
    "imageStyle:breakText",
    "|",
    "resizeImage",
  ],
};
