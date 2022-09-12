import * as Dialog from '@radix-ui/react-dialog'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

interface AppDialogProps {
    trigger: JSX.Element
}

const AppDialog = ({ trigger }: AppDialogProps) => {
    const [open, setOpen] = useState(false)
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            {trigger && <Dialog.Trigger>{trigger}</Dialog.Trigger>}
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-neutral-very-dark-black-blue opacity-95" />
                <Dialog.Close className="w-8 fixed top-8 right-4 pointer-events-none">
                    <XMarkIcon className="text-white" />
                </Dialog.Close>
                <Dialog.Content className="fixed bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg w-[calc(100%-4rem)]">
                    <Dialog.Description className="flex flex-col text-primary-very-dark-blue text-center font-semibold gap-4">
                        <a href="#">Product</a>
                        <a href="#">Company</a>
                        <a href="#">About</a>
                        <a href="#">Team</a>
                        <a href="#">Gallery</a>
                        <a href="#">Connect</a>
                    </Dialog.Description>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default AppDialog
