'use client'

import { Modal, ModalContent } from "@heroui/react";
import { useAppStore } from "@/src/store/useAppStore";
import { FormContact } from "./FormContact";

export function ModalContact({ phone, address, ownerEmail }: any) {
  const modalContact = useAppStore(state => state.modalContact)
  const changeStatusModal = useAppStore(state => state.changeContactModal)
  if(!modalContact) return null
  return (
    <>
      <Modal isOpen={modalContact}  onOpenChange={() => changeStatusModal()}>
        <ModalContent>
          {() => (
            <>
              <FormContact address={address} phone={phone} ownerEmail={ownerEmail} />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
