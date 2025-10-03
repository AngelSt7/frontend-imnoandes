import { NextRequest, NextResponse } from "next/server";
import { validSearchParams, PropertyCategoryDB, PropertyTypeDB } from "@/src/features/property/public/subfeatures/PropertySearch/constants";
import { CURRENCY } from "@/src/features/property/admin";

export function withPublicParams(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (!url.pathname.startsWith("/es/buscar")) {
    return null;
  }

  let changed = false;

  const pathWithoutPrefix = url.pathname.replace(/^\/es\/buscar\//, "");
  const regex = /^(.*?)-de-(.*?)(?:-en-(.*))?$/;
  const match = pathWithoutPrefix.match(regex);

  if (!match) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/es/buscar/venta-de-departamentos-o-casas?page=1`);
  }

  for (const [key] of url.searchParams.entries()) {
    if (!validSearchParams.includes(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  }

  const getParam = (key: string) => url.searchParams.get(key);

  const page = getParam("page");
  const currency = getParam("currency");
  const minBathrooms = getParam("minBathrooms");
  const minParkingSpaces = getParam("minParkingSpaces");
  const minBedrooms = getParam("minBedrooms");
  const maxBedrooms = getParam("maxBedrooms");
  const published = getParam("published");
  const minArea = getParam("minArea");
  const maxArea = getParam("maxArea");
  const propertyType = match[1];
  const categoryType = match[2].split("-o-");


  if ((page && isNaN(Number(page))) || Number(page) < 1) {
    url.searchParams.set("page", "1");
    changed = true;
  }

  if (propertyType && !Object.keys(PropertyTypeDB).includes(propertyType)) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/es/buscar/venta-de-departamentos-o-casas?page=1`);
  }

  for (const category of categoryType) {
    if (!Object.keys(PropertyCategoryDB).includes(category)) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/es/buscar/venta-de-departamentos-o-casas?page=1`);
    }
  }

  if (currency && !Object.keys(CURRENCY).includes(currency)) {
    url.searchParams.delete("currency");
    changed = true;
  }

  const validBathrooms = ["1", "2", "3", "4", "5"];
  if (minBathrooms && !validBathrooms.includes(minBathrooms)) {
    url.searchParams.delete("minBathrooms");
    changed = true;
  }

  if (minBedrooms && Number(minBedrooms) < 1) {
    url.searchParams.delete("minBedrooms");
    changed = true;
  }
  if (maxBedrooms && (Number(maxBedrooms) > 10 || Number(maxBedrooms) < Number(minBedrooms))) {
    url.searchParams.delete("maxBedrooms");
    changed = true;
  }

  if (minArea && (isNaN(Number(minArea)) || Number(minArea) <= 0)) {
    url.searchParams.delete("minArea");
    changed = true;
  }
  if (maxArea && (isNaN(Number(maxArea)) || Number(maxArea) <= 0)) {
    url.searchParams.delete("maxArea");
    changed = true;
  }

  const min = minArea ? Number(minArea) : null;
  const max = maxArea ? Number(maxArea) : null;

  if (min !== null && max !== null) {
    if (max <= min) {
      url.searchParams.delete("maxArea");
      changed = true;
    }
  }

  if (minParkingSpaces && !validBathrooms.includes(minParkingSpaces)) {
    url.searchParams.delete("minParkingSpaces");
    changed = true;
  }

  const validPublished = ["0", "5", "7"];
  if (published && !validPublished.includes(published)) {
    url.searchParams.delete("published");
    changed = true;
  }

  if (changed) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
