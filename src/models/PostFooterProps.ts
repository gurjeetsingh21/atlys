import { MouseEventHandler } from "react";

export default interface PostFooterProps {
    commentCnt?: number,
    likeCnt?: number,
    onBtnClick?: MouseEventHandler<HTMLButtonElement>,
    btnText?: string
}