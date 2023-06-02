import React, { FC, useState } from "react";
import { ILayout } from "./Layout.types";
import Navbar from "../Navbar/Navbar";
import Meta from "../Meta/Meta";
import SideBar from "../SideBar/SideBar";

const Layout: FC<ILayout> = ({ children, title, description }) => {
  const [side, setSide] = useState(false);

  const toggleSideBar = () => {
    setSide(!side);
  };

  // React.useEffect(() => {
  //   if (setSide) {
  //     setNewSide(setSide);
  //   }
  // }, []);
  // console.log(newSide, "lay");

  return (
    <div>
      <Meta title={title} description={description}>
        <Navbar setSide={toggleSideBar} />
        <SideBar setSide={toggleSideBar} state={side} />
        <div>{children}</div>
      </Meta>
    </div>
  );
};

export default Layout;
