import React from "react";
import { Header as AntHeader } from "antd/lib/layout/layout";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <AntHeader className="site-layout-background" style={{ padding: 0 }} />
  );
};

export default Header;
