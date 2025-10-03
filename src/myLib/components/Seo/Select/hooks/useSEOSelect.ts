import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { SEOProps } from "../interfaces";
import { useUrlTransformer } from "@/src/myLib/hooks";

export function useSEOSelect({ regex, mode, joiner, options, prefix, onChange }: Omit<SEOProps, 'inProvider'>) {
  const router = useRouter();
  const { matches, buildUrl } = useUrlTransformer({ regex, mode, joiner });

  const selectedKeysFromUrl = useMemo(
    () => new Set(options.filter(opt => matches.includes(opt.slug)).map(opt => opt.key)),
    [matches, options]
  );

  const [tempKeys, setTempKeys] = useState<Set<string>>(selectedKeysFromUrl);

  const syncTempSelection = useCallback(
    (isOpen: boolean) => {
      if (isOpen) setTempKeys(selectedKeysFromUrl);
    },
    [selectedKeysFromUrl]
  );

  const applySelection = useCallback(() => {
    const selectedItems = options.filter(item => tempKeys.has(item.key));
    if (selectedItems.length === 0) return;

    const newUrl = buildUrl(selectedItems.map(opt => opt.slug), prefix);
    router.push(newUrl);

    onChange?.();
  }, [options, tempKeys, buildUrl, router]);

  const clearSelection = useCallback(
    () => setTempKeys(new Set()),
    []
  );

const toggleSelection = useCallback(
  (id: string, isSelected: boolean) => {
    setTempKeys(prev => {
      if (mode === "single") {
        return isSelected ? new Set([id]) : new Set();
      }
      const next = new Set(prev);
      isSelected ? next.add(id) : next.delete(id);
      return next;
    });
  },
  [mode]
);

  const getButtonLabel = useCallback(() => {
    const selectedItems = options.filter(item => selectedKeysFromUrl.has(item.key));
    if (selectedItems.length === 0) return "Tipo de inmueble";
    if (selectedItems.length === 1) return selectedItems[0].label;
    return `${selectedItems.length} tipos seleccionados`;
  }, [options, selectedKeysFromUrl]);

  return {
    options,
    selectedKeysFromUrl,
    tempKeys,
    setTempKeys,
    syncTempSelection,
    applySelection,
    clearSelection,
    toggleSelection,
    getButtonLabel,
  };
}
