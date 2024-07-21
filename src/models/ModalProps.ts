import { MouseEventHandler, ReactElement } from "react";

export default interface ModalProps {
    isOpen: boolean,
    onClose: MouseEventHandler<HTMLDivElement>,
    children: ReactElement
}