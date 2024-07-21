import { useState } from "react";
import FormFieldSelector from "../components/FormFieldSelector";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { LoginSignupProps } from "../models/LoginSignupProps";

interface formDataModel {
  email: string;
  password: string;
  username?: string;
}

const Login = ({
  handleSubmit,
  toggleLogin,
  formConfig,
  heading,
  subHeading,
  submitText,
  footerText,
  footerToggleText,
}: LoginSignupProps) => {
  const [formData, setFormData] = useState<formDataModel>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (name: string, value: string) => {
    setFormData((oldValues) => ({
      ...oldValues,
      [name]: value,
    }));
  };
  return (
    <div className="flex gap-2 flex-col items-center text-[#FFFFFF] rounded-[8px]">
      <div className="text-[#6B6C70] text-[14px]">{heading}</div>
      <div className="text-[18px] font-[600]">{subHeading}</div>
      <div className="flex flex-col items-start gap-3 mt-5 w-[100%]">
        {formConfig.map((item) => (
          <FormFieldSelector
            key={item.name}
            name={item.name}
            type={item.type}
            value={formData[item.name as keyof formDataModel]}
            label={item.label}
            placeholder={item.placeholder}
            onChange={(e) => handleChange(item.name, e.target.value)}
            endEndorement={item.endEndorement}
          />
        ))}
      </div>
      <Button
        onClick={() => {
          !handleSubmit && navigate("/home");
          handleSubmit && handleSubmit();
        }}
      >
        {submitText}
      </Button>
      <div className="text-[#6B6C70] w-[100%] text-start text-[14px]">
        {footerText}{" "}
        <span className="text-[#C5C7CA] cursor-pointer" onClick={toggleLogin}>
          {footerToggleText} <span className="text-[16px]">➛</span>
        </span>
      </div>
    </div>
  );
};

export default Login;
