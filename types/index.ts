import { MouseEvent } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEvent<HTMLButtonElement>;
  btnType?: "button" | "submit";
}
