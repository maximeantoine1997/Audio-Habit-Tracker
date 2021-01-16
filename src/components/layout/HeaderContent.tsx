import React from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import "./HeaderContent.css";
import { BellOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

interface HeaderProps {
  /**
   * The identifier of the component.
   */
  identifier?: string;
}

const menu = (
  <Menu>
    <Menu.Item>Log Out</Menu.Item>
    <Menu.Item>User Settings</Menu.Item>
  </Menu>
);

const HeaderContent: React.FunctionComponent<HeaderProps> = ({
  identifier
}) => {
  return (
    <Row>
      <Col span={18}></Col>
      <Col span={6}>
        <Row>
          <Col span={4}>
            <BellOutlined className="icon" />
          </Col>
          <Col span={4}>
            <SettingOutlined className="icon" />
          </Col>
          <Col span={4}>
            <Avatar
              style={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer"
              }}
            >
              fr
            </Avatar>
          </Col>
          <Col span={12}>
            <Dropdown overlay={menu}>
              <Row style={{ cursor: "pointer" }}>
                <Col span={6}>
                  <Avatar icon={<UserOutlined />} />
                </Col>
                <Col span={18}>Maximus</Col>
              </Row>
            </Dropdown>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HeaderContent;
