export type AllowedFilters = 'currency' | 'bedrooms' | 'bathrooms' | 'propertyType' | 'propertyCategory' | 'area' | 'minBathrooms' | 'minParkingSpaces' | 'published' | 'propertyCategory' | 'filters' | 'clear' | 'page'

export interface FilterPrices {
  minPrice: number;
  maxPrice: number;
}

export interface FilterArea {
  minArea: number;
  maxArea: number;
}

export interface FilterBedrooms {
  minBedrooms: number;
  maxBedrooms: number;
}
