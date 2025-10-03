'use client'

import CardCarrousel from './CardCarrousel'
import { Carrousel } from './Carrousel'

interface PreparedCarrouselProps<T> {
    data: T[]
}

export function PreparedCarrousel<T>({ data }: PreparedCarrouselProps<T>) {

    return (
        <Carrousel<T>
            data={data}
            card={CardCarrousel}
        />
    )
}
