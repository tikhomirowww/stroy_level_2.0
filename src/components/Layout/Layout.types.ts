export interface ILayout {
  setSide?: (state: boolean) => void
  children: React.ReactNode;
  title: string;
  description: string;
}
