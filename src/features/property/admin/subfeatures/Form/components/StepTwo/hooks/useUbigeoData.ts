
import { Location } from "@/src/features/property/public";
import { useGetData } from "@/src/myLib/hooks";

export const useUbigeoData = (
  departmentId: string,
  provinceId: string
) => {

  const { data: Provinces = [], ...provinceQuery } = useGetData({
    functionService: Location.listProvinces,
    id: departmentId,
    queryKey: ["provinces", departmentId],
    enabled: !!departmentId
  });

  const { data: Districts = [], ...districtQuery } = useGetData({
    functionService: Location.listDistricts,
    id: provinceId,
    queryKey: ["districts", provinceId],
    enabled: !!provinceId
  });

  return {
    Provinces,
    Districts,
    provinceQuery,
    districtQuery,
  };
};
