interface Props {
  children: string;
  color?: "primary" | "success" | "info";
  onClick: () => void;
}

function ButtonDismissable({ children, color = "info", onClick }: Props) {
  return (
    <button
      type="button"
      className={"btn alert-dismissible btn-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonDismissable;
