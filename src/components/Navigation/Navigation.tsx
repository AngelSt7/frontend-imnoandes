'use client'

import { usePathname } from 'next/navigation'
import { Button } from '@heroui/react'
import { Actions, MenuPopover, useModalUtils } from '@/src/myLib'
import { LinksMenu } from '@/src/constants/links'
import { UserInfo } from '@/src/features/user/interfaces'
import { messages } from '@/src/constants/header/header'

export function Navigation({ user }: { user: UserInfo }) {
    const { openModal } = useModalUtils();
    const path = usePathname()

    const getPageType = (path: string) => {
        if (path === '/dashboard/propiedades') return 'propiedades'
        if (path === '/dashboard/perfil') return 'perfil'
        if (path === '/dashboard/favoritos') return 'favoritos'
        return 'default'
    }

    const pageType = getPageType(path)
    const currentMessages = messages[pageType as keyof typeof messages]

    return (
        <div className="w-full bg-white  border-b border-gray-200 ">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex justify-between items-center space-x-4">
                    <div>
                        <div className='flex gap-3'>
                            {currentMessages.icon}
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 ">
                                    {currentMessages.title}
                                </h1>
                            </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 ">
                            {currentMessages.description}
                        </p>
                    </div>

                    <div className='flex gap-3 items-center'>
                        {path === '/dashboard/propiedades' &&
                            <div className='hidden md:block'>
                                <Button
                                    onPress={() => openModal({ action: Actions.create })}
                                    type='submit'
                                    radius='full'
                                    className='px-4 py-2 rounded-full text-sm font-medium border border-zinc-200 transition flex items-center gap-2 bg-gray-100 hover:bg-gray-200'
                                >
                                    Agregar propiedad
                                </Button>
                            </div>
                        }
                        <MenuPopover
                            icon="/dance-goku.gif"
                            position="bottom-start"
                            links={LinksMenu}
                            user={{ userName: user.name, email: user.email, message: "Session iniciada como:" }}
                            whitUser={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}