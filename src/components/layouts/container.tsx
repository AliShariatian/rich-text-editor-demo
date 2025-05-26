import { FC, ReactElement, ReactNode } from "react";
import { cn } from "@/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<Props> = ({ children, className }): ReactElement => {
  return (
    <div className={cn("max-desktop:px-6 container mx-auto max-w-5xl", className)}>{children}</div>
  );
};
