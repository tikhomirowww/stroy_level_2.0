

export interface IInput {
  prefixIcon?: React.ReactNode;
  postfixIcon?: React.ReactNode;
  onChange?: any
  placeholder?: string;
  className?: string;
  width?: string;
  value?: string;
  type: "number" | "text" | "email";
  name: string;
}
