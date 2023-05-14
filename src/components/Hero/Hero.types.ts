import { StaticImageData } from "next/image";

export interface IHero {
  background: StaticImageData;
  handleOpen: () => void;
}
