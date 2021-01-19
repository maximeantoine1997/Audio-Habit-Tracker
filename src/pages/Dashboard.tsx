import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";

import "./Dashboard.css";
import Title from "antd/lib/typography/Title";
import Block from "../components/layout/Block";
import CircularStats from "../components/statistics/CircularStats";

interface DashboardProps {
  /**
   * The identifier of the component.
   */
  identifier?: string;
}

const Dashboard: React.FunctionComponent<DashboardProps> = ({ identifier }) => {
  return (
    <Row className="container">
      <Row className="row">
        <Col span={16}>
          <Title level={2}>Overview</Title>
        </Col>
        <Col span={8}>dates</Col>
      </Row>
      <Row className="row">
        <Col span={16}>
          <Row className="row">
            <Row className="row" gutter={[24, 24]}>
              <Col span={16}>
                <Block>
                  <Row>
                    <Col span={8}>
                      <CircularStats title="Read" />
                    </Col>
                    <Col span={8}>
                      <CircularStats title="Exercise" />
                    </Col>
                    <Col span={8}>
                      <CircularStats title="Drink Water" />
                    </Col>
                  </Row>
                </Block>
              </Col>
              <Col span={8}>
                <Block></Block>
              </Col>
            </Row>
            <Row className="row" gutter={[24, 24]}>
              <Col>SOME CONTENT</Col>
            </Row>
          </Row>
        </Col>
        <Col span={8}>CONTENT</Col>
      </Row>
    </Row>
  );
};

export default Dashboard;
