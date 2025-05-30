import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

export const RichTextEditorClient = dynamic(() => import("./rich-text-editor"), {
  loading: () => <Skeleton className="h-96 w-full" />,
  ssr: false,
});
