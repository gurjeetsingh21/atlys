import { MouseEventHandler } from "react"

interface PostProps {
    id: number,
    postedBy?: string,
    image?: any,
    createdAt?: string,
    isEdited?: boolean
    mood: any,
    body: string,
    commentCnt?: number,
    likeCnt?: number,
    onBtnClick?: MouseEventHandler<HTMLButtonElement>,
    btnText?: string
}

export default PostProps