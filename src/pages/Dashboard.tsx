import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import "./Dashboard.css";

interface DashboardProps {
  /**
   * The identifier of the component.
   */
  identifier?: string;
}

const Dashboard: React.FunctionComponent<DashboardProps> = ({ identifier }) => {
  return (
    <Row className="container">
      <Row className="row" style={{ border: "1px solid black" }}>
        <Col span={16}>overview</Col>
        <Col span={8}>dates</Col>
      </Row>
      <Row className="row">
        <Col span={16} style={{ border: "1px solid black" }}>
          <Row className="row">
            <Row className="row" gutter={[24, 24]}>
              <Col span={8}>1</Col>
              <Col span={8}>2</Col>
              <Col span={8}>3</Col>
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
