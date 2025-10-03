'use client';
import { MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

type PropertyActionsProps = {
  onWhatsApp: (e: React.MouseEvent) => void;
};

export function PropertyActions({ onWhatsApp }: PropertyActionsProps) {
  const router = useRouter();
  return (
    <footer className="flex justify-center items-center md:justify-end gap-3 pt-2">
      <button
        onClick={onWhatsApp}
        className="flex justify-center w-full md:w-fit items-center gap-2 bg-[#1fa953] hover:bg-[#178541] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
      >
        <MessageCircle className="w-4 h-4" />
        WhatsApp
      </button>
    </footer>
  );
}
