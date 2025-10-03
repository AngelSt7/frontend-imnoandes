'use client'

import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { MutationError, UseSubmitMutationProps } from './interfaces';

export function useSubmitMutation<T>(props: UseSubmitMutationProps<T>): UseMutationResult<T, MutationError, T> {
  const { serviceFunction, invalidateQueries, onSuccessCallback, onSuccessServerActions, onErrorCallback, onSettledCallback, onCharge, message, navigation, cancelToast = false, toastOptions } = props

  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<T, MutationError, T>({
    mutationFn: serviceFunction,
    onMutate: () => onCharge?.(),
    onError: (error: MutationError) => {
      toast.error(error?.message ?? 'Error inesperado', toastOptions);
      onCharge?.();
      onErrorCallback?.(error);
    },
    onSuccess: async (data) => {
      invalidateQueries?.forEach((key) =>
        queryClient.invalidateQueries({ queryKey: key })
      );

      if (navigation) {
        switch (navigation.type) {
          case 'replace': router.replace(navigation.url); break;
          case 'push': router.push(navigation.url); break;
          case 'back': router.back(); break;
        }
      }

      if (onSuccessServerActions?.length) {
        for (const action of onSuccessServerActions) {
          try { await action(); } 
          catch (err) { console.error("Error ejecutando Server Action:", err); }
        }
      }

      if (!cancelToast) toast.success((data as any).message ?? message, toastOptions);
      onCharge?.();
      onSuccessCallback?.(data);
    },
    onSettled: () => {
      onSettledCallback?.();
    }
  });
}