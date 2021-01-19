import { Card } from "antd";
import React from "react";
import "./Block.css";

interface BlockProps {
  children?: any;
}

const Block: React.FunctionComponent<BlockProps> = ({ children }) => {
  return (
    <Card bordered={false} className="card">
      {children}
    </Card>
  );
};

export default Block;
