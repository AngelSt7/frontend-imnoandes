"use server";

import { revalidateTag } from "next/cache";

export async function revalidateSearch() {
  revalidateTag(`properties-search`);
  revalidateTag(`carrousel`);
}
