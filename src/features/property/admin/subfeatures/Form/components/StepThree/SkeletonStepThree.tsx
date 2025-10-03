'use client';

import { Skeleton } from "@heroui/react";

export function SkeletonStepThree() {
  return (
    <div className="w-full py-6 space-y-4">
      <div className="text-2xl  text-zinc-800">
        Detalles de la propiedad
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <Skeleton className="h-5 w-1/3 bg-default-200 rounded-md" />
              <Skeleton className="h-10 w-full bg-default-300 rounded-md" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex flex-col gap-2 sm:col-span-1">
              <Skeleton className="h-5 w-1/3 bg-default-200 rounded-md" />
              <Skeleton className="h-10 w-full bg-default-300 rounded-md" />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-3">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 bg-default-300 rounded-md" />
              <Skeleton className="h-4 w-32 bg-default-200 rounded-md" />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-1/3 bg-default-200 rounded-md" />
          <Skeleton className="h-10 w-full bg-default-300 rounded-md" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-1/4 bg-default-200 rounded-md" />
          <Skeleton className="h-24 w-full bg-default-300 rounded-md" />
        </div>
      </div>
    </div>
  );
}
