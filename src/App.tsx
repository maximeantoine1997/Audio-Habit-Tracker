import {
  DesktopOutlined,
  PieChartOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./index.css";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={(collapsed) => setIsCollapsed(collapsed)}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<SettingOutlined />}>
            User Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}></Content>
        <Footer style={{ textAlign: "center" }}>
          Created by Maxime Antoine ©2021
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
