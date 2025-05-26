import { cn } from "@/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-gray-100 dark:bg-zinc-800", className)}
      {...props}
    />
  );
}

export { Skeleton };
