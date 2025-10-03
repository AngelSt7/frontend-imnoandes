'use client';

import { Skeleton } from "@heroui/react";

export function SkeletonStepFour() {
  return (
    <div className="w-full py-6 space-y-4">
      <div className="text-2xl  text-zinc-800">
        Servicios de la propiedad
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-1/3 bg-default-200 rounded-md" />
          <Skeleton className="h-12 w-full bg-default-300 rounded-md" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-1/3 bg-default-200 rounded-md" />
          <Skeleton className="h-24 w-full bg-default-300 rounded-md" />
        </div>
      </div>
    </div>
  );
}
