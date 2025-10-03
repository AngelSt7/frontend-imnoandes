'use client';

export function PropertyDescription({ description }: { description?: string }) {
  if (!description) return null;
  return (
      <p className="text-sm font-normal text-neutral-600 truncate">
        {description}
      </p>
  );
}
