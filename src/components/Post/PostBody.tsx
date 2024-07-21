interface PostBodyProps {
  mood: any;
  body: string;
}

const PostBody = ({ mood, body }: PostBodyProps) => {
  return (
    <div className="bg-[#191920] rounded-[8px] flex p-3 gap-4">
      <div className="w-[48px] h-[48px] rounded-full p-4 flex items-center bg-[#27292D] self-start">
        {mood}
      </div>
      <div className="text-left self-center text-[16px] text-[#7F8084]">
        {body}
      </div>
    </div>
  );
};

export default PostBody;
