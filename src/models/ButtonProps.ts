import { MouseEventHandler, ReactElement } from "react";

export default interface ButtonProps{
    btnBgColor?: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    children: string | ReactElement
}