import { ColumnsType } from "@/src/myLib/components/Table";
import { UseMutateFunction } from "@tanstack/react-query";
import { IOpenModal } from "@/src/myLib/hooks";
import { FiltersProps } from "./filters.interface";
import { ApiResponse } from "@/src/features/shared";

interface RenderCellProps {
    onOpenModal?: (meta: IOpenModal) => void
    onMutate?: UseMutateFunction<any, any, string, unknown>;
};

export interface TableContentProps<T, F> {
  baseKey: string[];
  columns: ColumnsType;
  defaultVisibleColumns: (keyof T | string)[];
  renderCells: React.ComponentType<{ item: T; columnKey: React.Key } & RenderCellProps>;
  renderFilters: React.ComponentType<FiltersProps<F>>;
  renderCellsProps?: RenderCellProps;
  onList: (filters: any) => Promise<ApiResponse<T> | undefined>;
  getRowId: (item: T) => string | number;
  validParams: string[]
  topContent: React.ComponentType<{
    filterValue: string;
    onSearchChange: (value: string) => void;
    onClear: () => void;
    total: number | undefined;
    renderFilters: (show: F[]) => React.ReactNode;
  }>;
}
