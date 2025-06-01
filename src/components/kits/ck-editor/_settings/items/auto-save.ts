import { EditorConfig } from "ckeditor5";

export const autosave: EditorConfig["autosave"] = {
  save(editor) {
    return new Promise<void>((resolve) => {
      localStorage.setItem("CKEditor", editor.getData());
      resolve();
    });
  },

  waitingTime: 2000, // 2s
};
