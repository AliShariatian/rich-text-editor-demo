import { FC, ReactElement, ComponentProps } from "react";
import { cn } from "@/utils";

type Props = ComponentProps<"div">;

export const Skeleton: FC<Props> = ({ className, ...props }): ReactElement => {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-zinc-800", className)}
      {...props}
    />
  );
};
