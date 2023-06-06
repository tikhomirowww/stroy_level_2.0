export interface IModal {
  title: string;
  children: any;
  onClose: () => void;
  isOpen: boolean;
}
