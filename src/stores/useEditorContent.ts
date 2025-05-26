import { create } from "zustand";

type Content = string[] | null;

type EditorContent = {
  content: Content;
  setContent: (newContent: Content) => void;
};

export const useEditorContent = create<EditorContent>((set) => ({
  content: null,
  setContent: (newContent) => set(() => ({ content: newContent })),
}));
