'use client'
import { IconSpinner } from '@/src/features/property/admin/icons';
import { Button } from '@heroui/react';
import { useButtonSubmit } from './hooks/useButtonSubmit';

interface ButtonSubmitProps {
  isFormComplete: boolean;
  onSubmit: () => void;
  isPending: boolean;
  incompleteStepsDetails?: Array<{
    stepIndex: number;
    stepName?: string;
    missingFields: string[];
  }>;
}

export function ButtonSubmit({
  isFormComplete,
  onSubmit,
  isPending,
  incompleteStepsDetails,
}: ButtonSubmitProps) {

  const { handleClick } = useButtonSubmit({ isFormComplete, onSubmit, incompleteStepsDetails });

  return (
    <Button
      isLoading={isPending}
      spinner={IconSpinner}
      type="button"
      onPress={handleClick}
      radius="full"
      className="bg-zinc-800 text-white font-semibold py-2 transition-all hover:bg-zinc-700 focus:ring-2 focus:ring-zinc-400 px-12"
    >
      Finalizar
    </Button>
  );
}