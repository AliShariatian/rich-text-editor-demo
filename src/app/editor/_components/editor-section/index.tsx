"use client";

import { FC, ReactElement } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const Editor = dynamic(() => import("./editor").then((module) => module.Editor), {
  loading: () => <Skeleton className="h-96 w-full" />,
  ssr: false,
});

export const EditorSection: FC = (): ReactElement => <Editor />;
