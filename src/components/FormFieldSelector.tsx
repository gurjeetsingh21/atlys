import FormSelectorProps from "../models/FromSelectorProps";

const FormFieldSelector = (props: FormSelectorProps) => {
  const { type, value, onChange, label, placeholder, endEndorement } = props;

  return (
    <div className="flex flex-col items-start gap-1 w-[100%]">
      <div className="text-[14px] text-[#C5C7CA] font-[500] w-[100%] text-left">
        {label}
      </div>
      <div className="w-[100%]">
        <input
          className="w-[100%] rounded-[8px] h-[43px] text-[15px] px-2 bg-transparent text-[#7F8084] border-solid border-[1.5px] border-[#35373B]"
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        <i className="absolute right-[30px] mt-[10px]">
          {endEndorement && endEndorement}
        </i>
      </div>
    </div>
  );
};

export default FormFieldSelector;
