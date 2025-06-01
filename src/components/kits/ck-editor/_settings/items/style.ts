import { EditorConfig } from "ckeditor5";

export const style: EditorConfig["style"] = {
  definitions: [
    {
      name: "Article category",
      element: "h3",
      classes: ["category"],
    },
    {
      name: "Title",
      element: "h2",
      classes: ["document-title"],
    },
    {
      name: "Subtitle",
      element: "h3",
      classes: ["document-subtitle"],
    },
    {
      name: "Info box",
      element: "p",
      classes: ["info-box"],
    },
    {
      name: "CTA Link Primary",
      element: "a",
      classes: ["button", "button--green"],
    },
    {
      name: "CTA Link Secondary",
      element: "a",
      classes: ["button", "button--black"],
    },
    {
      name: "Marker",
      element: "span",
      classes: ["marker"],
    },
    {
      name: "Spoiler",
      element: "span",
      classes: ["spoiler"],
    },
  ],
};
