"use server";

import { revalidateTag } from "next/cache";

export async function revalidateProperty(id: string) {
  revalidateTag(`property-${id}`);

}
