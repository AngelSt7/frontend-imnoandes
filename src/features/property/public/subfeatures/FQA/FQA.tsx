'use client'

import { Accordion, AccordionItem } from "@heroui/react";
import Link from "next/link";
import { FQA as FQADATA } from "./constants";

export function FQA() {
    return (
        <Accordion variant="shadow">
            {FQADATA.map((acordeon, index) => (
                <AccordionItem key={index} aria-label={acordeon.arialLabel} title={acordeon.tittle}>
                    <div className=" text-justify">
                    {acordeon.content} 
                    
                    { acordeon.link && <Link className=" block focus:underline text-base  text-zinc-900 font-bold " href={acordeon.link}>Ir a contacto</Link> }
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
