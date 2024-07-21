import PostHeaderProps from "../../models/PostHeaderProps";
import { getDateDifference } from "../../utility";

const PostHeader = ({
  postedBy,
  image,
  createdAt,
  isEdited,
}: PostHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        {image && <img className="w-[52px]" src={image} alt="image" />}
        <div className="flex flex-col text-start">
          <div className="text-[17px] text-[#C5C7CA] font-[500]">
            {postedBy || "Create Post"}
          </div>
          {createdAt && (
            <div className="text-[14px] text-[#7F8084]">
              {`${getDateDifference(createdAt)} ago`}{" "}
              {isEdited && <span>● Edited</span>}
            </div>
          )}
        </div>
      </div>
      {postedBy && <div className="text-[#C5C7CA]">...</div>}
    </div>
  );
};

export default PostHeader;
