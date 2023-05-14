import React, { FC } from "react";
import { ILayout } from "./Layout.types";
import Navbar from "../Navbar/Navbar";
import Meta from "../Meta/Meta";

const Layout: FC<ILayout> = ({ children, title, description }) => {
  return (
    <div>
      <Meta title={title} description={description}>
        <Navbar />
        <div>{children}</div>
      </Meta>
    </div>
  );
};

export default Layout;
