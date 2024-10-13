import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function AlertChildren({ children }: Props) {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
}
export default AlertChildren;
