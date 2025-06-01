import { EditorConfig } from "ckeditor5";

export const link: EditorConfig["link"] = {
  addTargetToExternalLinks: true,
  defaultProtocol: "https://",
  decorators: {
    toggleDownloadable: {
      mode: "manual",
      label: "Downloadable",
      attributes: {
        download: "file",
      },
    },
  },
};
