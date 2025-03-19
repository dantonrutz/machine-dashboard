import { cn } from "./lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-accent bg-gray-400/30 animate-pulse rounded-lg",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
