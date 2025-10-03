"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Pagination as PaginationHero } from "@heroui/react";
import { Meta } from "@/src/features/shared";

export function Pagination({ meta, cursor }: { meta: Meta | undefined, cursor?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if(meta?.totalItems === 0) return null

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <PaginationHero
        classNames={{
          cursor: cursor || "bg-linear-to-b shadow-lg from-default-500 to-default-800 text-white font-bold"
        }}
        size="md"
        color="warning"
        loop
        showControls
        total={meta?.totalPages || 1}
        page={meta?.currentPage || 1}
        onChange={handlePageChange}
      />

    </>
  );
}
