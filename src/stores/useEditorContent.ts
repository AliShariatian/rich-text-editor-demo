import { create } from "zustand";

type EditorContent = {
  content: string[] | null;
  setContent: (newContent: string) => void;
};

export const useEditorContent = create<EditorContent>((set) => ({
  content: null,
  setContent: (newContent) =>
    set((state) => ({
      content: state.content ? [...state.content, newContent] : [newContent],
    })),
}));
