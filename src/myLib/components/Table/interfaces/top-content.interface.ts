import { Meta } from "@/src/features/shared";

export interface TopContentProps<T> {
  filterValue: string;
  onSearchChange: (value: string) => void;
  onClear: () => void;
  total: Meta['totalItems'] | undefined;
  renderFilters: (show: T[]) => React.ReactNode;
}
