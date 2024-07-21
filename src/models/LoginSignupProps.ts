import { MouseEventHandler } from "react";
import FormSelectorProps from "./FromSelectorProps";

export interface LoginSignupProps {
    handleSubmit?: Function,
    toggleLogin: MouseEventHandler<HTMLSpanElement>,
  formConfig: Array<FormSelectorProps>,
  heading: string,
  subHeading: string,
  submitText: string,
  footerText: string,
  footerToggleText: string,
}