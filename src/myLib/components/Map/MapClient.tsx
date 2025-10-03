'use client';

import { FormDataProperty } from '@/src/features/property/admin';
import dynamic from 'next/dynamic';
import { MapProps } from './MapForm';

export const Map = dynamic<MapProps<FormDataProperty>>(
  () => import('./MapForm').then(mod => mod.Map),
  { ssr: false }
);


export const MapStatic = dynamic(() => import('./MapStatic').then(mod => mod.MapStatic), {
  ssr: false,
});
