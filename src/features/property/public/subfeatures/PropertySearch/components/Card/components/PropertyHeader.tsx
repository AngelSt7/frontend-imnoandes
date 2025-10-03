'use client';
import { PROPERTY_CATEGORY_TRANSLATE, PROPERTY_TYPE_TRANSLATE } from "@/src/features/property/admin";
import { formatCurrency } from "@/src/myLib";

type PropertyHeaderProps = {
  type: string;
  category: string;
  price: number;
  currency: string;
};

export function PropertyHeader({ type, category, price, currency }: PropertyHeaderProps) {
  return (
    <header className="space-y-3">
      <div className="space-y-2">
        <span className="text-sm font-medium text-gray-700">
          {PROPERTY_TYPE_TRANSLATE[type]} · {PROPERTY_CATEGORY_TRANSLATE[category]}
        </span>
        <h2 className="text-2xl font-bold text-gray-900">
          {formatCurrency(price, currency)}
        </h2>
      </div>
    </header>
  );
}
