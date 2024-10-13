import { Children } from "react";

interface Props {
  children: string;
  color?: "primary" | "success" | "info";
  onClick: () => void;
}

function Button({ children, color = "info", onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
