import { Navigation } from "@/src/components";
import { User } from "@/src/features/shared";
import { UserProvider } from "@/src/features/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PropertiesLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    const cookieStore = await cookies();
    const jwt = cookieStore.get("SESSION")?.value
    if (!jwt) return redirect('/auth/iniciar-sesion');

    const user = await User.validate(jwt);
    if (user) return (
        <UserProvider user={user}>
            <div className="flex flex-col min-h-screen">
                <Navigation user={user} />
                <div className="flex-1 flex flex-col mt-8 mb-4">{children}</div>
            </div>
        </UserProvider>
    )
}