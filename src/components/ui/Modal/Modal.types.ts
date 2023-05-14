export interface IModal {
  title: string;
  children: any;
  button: any;
  onClose: () => void;
  onClick: () => void;
  isOpen: boolean;
}
