"use client";

import { QueryKey } from "@tanstack/react-query";
import { ToastOptions } from "react-hot-toast";

export type MutationError = { message?: string } | Error;

export type NavigationAction = 
  | { type: 'replace'; url: string } 
  | { type: 'push'; url: string } 
  | { type: 'back' };

export type UseSubmitMutationProps<T> = {
  serviceFunction: (data: T) => Promise<any>;
  onErrorCallback?: (data: any) => void;
  onCharge?: (message?: string) => void;
  onSuccessCallback?: (data: any) => void;
  onSettledCallback?: () => void;
  invalidateQueries?: QueryKey[];
  message?: string;
  navigation?: NavigationAction;
  cancelToast?: boolean;
  toastOptions?: ToastOptions;
  onSuccessServerActions?: (() => Promise<void>)[];
};
