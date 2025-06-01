import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ContentItem = {
  id: string;
  text: string;
};

type EditorContent = {
  content: ContentItem[];
  addContent: (text: string) => void;
  removeContent: (id: string) => void;
};

export const useEditorContent = create<EditorContent>()(
  persist(
    (set) => ({
      content: [],

      addContent: (text: string) =>
        set((state) => ({
          content: [...state.content, { id: crypto.randomUUID(), text }],
        })),

      removeContent: (id: string) =>
        set((state) => ({
          content: state.content.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "useEditorContent",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
