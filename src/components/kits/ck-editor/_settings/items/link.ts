import { EditorConfig } from "ckeditor5";

export const link: EditorConfig["link"] = {
  defaultProtocol: "https://",

  decorators: {
    toggleDownloadable: {
      mode: "manual",
      label: "Downloadable",
      attributes: {
        download: "file",
      },
    },
    isExternal: {
      mode: "manual",
      label: "Open in a new tab",
      attributes: {
        target: "_blank",
      },
      defaultValue: true,
    },
  },
};
