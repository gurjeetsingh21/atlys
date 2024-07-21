import PostFooterProps from "../../models/PostFooterProps";
import Button from "../Button";
import ChatBubble from "../../assets/images/Chat Bubble.png";

const PostFooter = ({
  commentCnt,
  likeCnt,
  btnText,
  onBtnClick,
}: PostFooterProps) => {
  return (
    <div className="flex justify-between">
      <div className="text-[#7F8084]">
        {commentCnt && (
          <div className="flex items-center gap-2 text-[14px]">
            <span>
              <img src={ChatBubble} alt="image" />
            </span>{" "}
            {commentCnt} comments
          </div>
        )}
      </div>
      {btnText && onBtnClick && (
        <div className="w-[111px]">
          <Button onClick={onBtnClick}>{btnText}</Button>
        </div>
      )}
    </div>
  );
};

export default PostFooter;
