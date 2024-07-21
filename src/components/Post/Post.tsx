import PostHeader from "./PostHeader";
import PostProps from "../../models/PostProps";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const Post = (props: PostProps) => {
  return (
    <div className="w-[100%] min-h-[223px] flex flex-col gap-4 px-4 py-4 bg-[#35373B] rounded-[8px] justify-center">
      <PostHeader key={props.id} {...props} />
      <PostBody {...props} />
      <PostFooter {...props} />
    </div>
  );
};

export default Post;
