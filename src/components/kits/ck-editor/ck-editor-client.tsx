"use client";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

export const CKEditorRichTextEditorClient = dynamic(
  () => import("./ck-editor").then((module) => module.CKEditorRichTextEditor),
  {
    loading: () => <Skeleton className="h-96 w-full" />,
    ssr: false,
  },
);
