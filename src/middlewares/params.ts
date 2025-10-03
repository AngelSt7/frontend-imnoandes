import { NextRequest, NextResponse } from "next/server";
import { validate as isUUID, validate } from "uuid";
import { CURRENCY, PROPERTY_CATEGORY, PROPERTY_TYPE, VALID_PARAMS } from "@/src/features/property/admin/constants";
import { STATE } from "../features/property/admin/subfeatures/ClientPage/components/Filters/constants";

export function withParamValidation(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (!url.pathname.startsWith("/dashboard/propiedades")) {
    return null
  }

  let changed = false;

  for (const [key] of url.searchParams.entries()) {
    if (!VALID_PARAMS.includes(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  }
  const getParam = (key: string) => url.searchParams.get(key);

  if (url.pathname.startsWith("/dashboard/propiedades")) {
    const page = getParam("page");
    const id = getParam("id");
    const action = getParam("action");
    const departmentId = getParam("departmentId");
    const propertyCategory = getParam("propertyCategory");
    const propertyType = getParam("propertyType");
    const currency = getParam("currency");
    const state = getParam("state");
    const limit = getParam("limit");

    if(action && !["create", "edit", "details", "change-status", "custom-images"].includes(action)) {
      url.searchParams.delete("action");
      if(id){
        url.searchParams.delete("id");
      }
      changed = true;
    }

    if(action) {
      if(action === "change-status" || action === "custom-images" || action === "details" || action === "edit"){
        if(!id) {
          url.searchParams.delete("action");
          changed = true;
        }
      }
    }

    if(id && !validate(id)) {
      url.searchParams.delete("id");
      changed = true;
    }

    if (!page || isNaN(Number(page)) || Number(page) < 1) {
      url.searchParams.set("page", "1");
      changed = true;
    }

    if (departmentId && !isUUID(departmentId)) {
      url.searchParams.delete("departmentId");
      changed = true;
    }

    if (propertyCategory && !Object.values(PROPERTY_CATEGORY).includes(propertyCategory as PROPERTY_CATEGORY)) {
      url.searchParams.delete("propertyCategory");
      changed = true;
    }

    if (propertyType && !Object.values(PROPERTY_TYPE).includes(propertyType as PROPERTY_TYPE)) {
      url.searchParams.delete("propertyType");
      changed = true;
    }

    if (currency && !Object.keys(CURRENCY).includes(currency)) {
      url.searchParams.delete("currency");
      changed = true;
    }

    if (state && !STATE.some(op => op.key === state)) {
      url.searchParams.delete("state");
      changed = true;
    }

    if (!limit || !["5", "10", "15"].includes(limit) || isNaN(Number(limit))) {
      url.searchParams.set("limit", "10");
      changed = true;
    }
  }

  if (changed) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
