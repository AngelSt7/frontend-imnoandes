'use client'
import { LogOut } from "lucide-react";
import { Auth } from "@/src/features/auth/services";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function CloseSession() {
    const router = useRouter();
    const handleLogout = async () => {
        const { data } = await Auth.logout();
        toast.success(data.message);
        router.refresh();
    }
    return (
        <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
            <LogOut className="w-5 h-5" />
            Cerrar sesión
        </button>
    )
}
