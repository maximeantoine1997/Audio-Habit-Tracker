import React from "react";
import { Col, Progress, Row } from "antd";
import Title from "antd/lib/typography/Title";

interface CircularStatsProps {
  /**
   * The title of the habit circle.
   */
  title: string;
}

const CircularStats: React.FunctionComponent<CircularStatsProps> = ({
  title
}) => {
  return (
    <>
      <Row justify="center">
        <Progress type="circle" percent={75} />
      </Row>
      <Row justify="center">
        <Title level={4}>{title}</Title>
      </Row>
    </>
  );
};

export default CircularStats;
