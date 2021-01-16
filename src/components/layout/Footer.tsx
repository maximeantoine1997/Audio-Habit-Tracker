import React from "react";
import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <AntFooter style={{ textAlign: "center" }}>
      Created by Maxime Antoine ©2021
    </AntFooter>
  );
};

export default Footer;
