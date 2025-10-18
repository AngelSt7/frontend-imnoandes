'use client'
import { LoginPage } from "@/src/features/auth/subfeatures/LoginOrquest";
import { useAppStore } from "@/src/store/useAppStore";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import Image from "next/image";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function LoginModal() {
  const { statusModalLogin, onChangeLogin } = useAppStore()
  if (!statusModalLogin) return null

  return (
    <>
      <Modal scrollBehavior="inside" isOpen={statusModalLogin} onOpenChange={onChangeLogin}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center justify-center gap-1"><Image src="/LogoImnoandes.png" alt="Logo imnoandes" width={150} height={50} /></ModalHeader>
              <ModalBody>
                <LoginPage isModal />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
