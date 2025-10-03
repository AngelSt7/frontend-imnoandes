'use client';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import { ChevronDownIcon } from 'lucide-react';
import { ModeOption } from '@/src/myLib/hooks/searchParams/interfaces';
import { useModeSegment } from './hooks';

const modeOptions: ModeOption[] = [
  { key: 'venta', value: 'En venta' },
  { key: 'alquiler', value: 'En alquiler' },
];

export function ButtonSegment() {
  const { getLabel, getText, handleChange } = useModeSegment(modeOptions, "Modo");

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          endContent={<ChevronDownIcon className="text-small" />}
          variant="flat"
        >
          {getText}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        closeOnSelect
        selectionMode="single"
        selectedKeys={getLabel()}
        onSelectionChange={handleChange}
      >
        {modeOptions.map(opt => (
          <DropdownItem key={opt.key} className="capitalize">
            {opt.value}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
