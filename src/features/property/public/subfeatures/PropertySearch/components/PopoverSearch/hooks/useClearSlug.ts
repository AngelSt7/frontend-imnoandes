"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useClearSlug() {
  const path = usePathname();
  const searchParams = useSearchParams();

  const clearSlug = useCallback(
    (slug: string) => {
      const match = path.match(/(?<=-en-)[^?]+/);
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", "1");
      let newPath = path;

      if (match) {
        const beforeEn = path.split("-en-")[0];
        const arraySlugs = match[0].split("-o-");
        const clear = arraySlugs.filter((f) => f !== slug).join("-o-");
        newPath = clear ? `${beforeEn}-en-${clear}` : beforeEn;
      }

      const query = newParams.toString() ? `?${newParams}` : "";
      return newPath + query;
    },
    [path, searchParams]
  );

  return clearSlug;
}
