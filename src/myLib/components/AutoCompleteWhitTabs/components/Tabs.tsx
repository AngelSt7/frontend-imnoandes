import { Option } from '@/src/myLib/interfaces'
import React from 'react'

export function Tabs({item, handleDelete} : { item: Option, handleDelete: (key: string) => void }) {
    return (
        <div
            key={item!.key}
            onDoubleClick={() => handleDelete(String(item.key))}
            className="select-none px-4 py-2 rounded-full text-sm font-medium border border-zinc-300 flex items-center gap-2 bg-gray-100 cursor-pointer"
        >
            {item!.label}
        </div>
    )
}
