'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FieldError, FieldErrorsImpl, FieldValues, Merge, Path, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { customIcon } from './config';
import { Errors } from '@/src/components';
import { useMapForm } from './hooks';

export interface MapProps<T extends FieldValues> {
    valueLatitude: Path<T>;
    valueLongitude: Path<T>;
    setValue: UseFormSetValue<T>;
    watch: UseFormWatch<T>;
    errorMessage?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export function Map<T extends FieldValues>({
    setValue, watch, valueLatitude, valueLongitude, errorMessage
}: MapProps<T>) {


    const { onSearch, markerPos, onMarkerDragEnd, address, ChangeMapView } = useMapForm({ setValue, watch, valueLatitude, valueLongitude });

    const inputClass = `
        text-base h-12 block w-full p-2 border rounded-md outline-none
        bg-[#f4f4f5] hover:bg-[#e4e4e7]
         
        ${errorMessage
            ? 'border-[#d10b30] ring-[#d10b30]'
            : 'border-[#afaeae]  focus:ring-white/10'
        }
    `;

    return (
        <div className="flex flex-col gap-4 py-6">
            <input
                placeholder="Buscar dirección"
                defaultValue={address}
                className={inputClass}
            />
            <button
                type="button"
                onClick={onSearch}
                className="px-4 py-2 bg-[#bba3f4] text-white rounded hover:bg-[#ad8cfc]"
            >
                Buscar
            </button>

            <MapContainer
                center={markerPos}
                zoom={15}
                scrollWheelZoom={false}
                className="h-[300px] w-full rounded-lg"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    position={markerPos}
                    icon={customIcon}
                    draggable={true}
                    eventHandlers={{ dragend: onMarkerDragEnd }}
                >
                    <Popup>Arrástrame para mover la ubicación</Popup>
                </Marker>
                <ChangeMapView coords={markerPos} />
            </MapContainer>

            {errorMessage && <Errors>{errorMessage.message?.toString()}</Errors>}
        </div>
    );
}
