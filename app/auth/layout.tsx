import Image from "next/image";
export default async function AuthLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className='w-11/12 max-w-[580px] h-fit mx-auto flex-1 flex flex-col justify-center items-center my-8'>
                <div className="bg-white rounded-xl w-full sm:w-[95%] border border-zinc-200 
                shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.05)]
                hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.05)]
                transition-shadow duration-300
                ">
                    <div className='flex justify-center my-9'>
                        <Image src='/LogoImnoandes.png' alt='Logo imnoandes' width={150} height={50} />

                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}