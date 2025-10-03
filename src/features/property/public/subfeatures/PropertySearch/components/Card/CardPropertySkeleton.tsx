'use client';
import { Skeleton } from "@heroui/react";

export function CardPropertySkeleton() {
  return (
    <article className="bg-[#f5f5f5] rounded-lg shadow-sm border border-gray-200 md:h-[295px] overflow-hidden transition-all duration-200 hover:shadow-md hover:border-gray-300 group relative">
      <div className="flex w-full h-full">
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="relative w-full md:w-[320px] lg:h-full lg:w-[425px] flex-shrink-0 overflow-hidden">
            <Skeleton className="w-full h-[200px] md:h-full rounded-none" />
          </div>
          
          <div className="space-y-1 p-4 flex-1 flex flex-col justify-between overflow-hidden">
            <header className="space-y-3">
              <div className="space-y-2">
                <Skeleton className="w-32 h-4 rounded" />
                <Skeleton className="w-40 h-8 rounded" />
              </div>
            </header>

            <address className="not-italic">
              <Skeleton className="w-48 h-4 rounded mb-1" />
              <Skeleton className="w-32 h-4 rounded" />
            </address>

            <Skeleton className="w-full h-4 rounded" />

            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <Skeleton className="w-5 h-5 rounded" />
                <Skeleton className="w-20 h-4 rounded" />
              </div>
              <ul className="flex items-center gap-4 pt-1">
                <li><Skeleton className="w-12 h-4 rounded" /></li>
                <li><Skeleton className="w-16 h-4 rounded" /></li>
                <li><Skeleton className="w-16 h-4 rounded" /></li>
              </ul>
            </div>

            <footer className="flex justify-center items-center md:justify-end gap-3 pt-2">
              <Skeleton className="w-full md:w-fit h-9 rounded-lg" />
              <Skeleton className="w-full md:w-fit h-9 rounded-lg" />
            </footer>
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 right-4">
        <Skeleton className="w-9 h-9 rounded-full" />
      </div>
    </article>
  );
}