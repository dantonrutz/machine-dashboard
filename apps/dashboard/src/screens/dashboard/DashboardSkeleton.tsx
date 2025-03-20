// Skeleton de loading exibido enquanto o Machine Metrics carrega

import { Skeleton } from "@repo/components/shadcn-ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <section className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 640:grid-cols-2 1280:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-[212px]" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 1024:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-[268px]" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 1024:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-[268px]" />
        ))}
      </div>
    </section>
  );
}
