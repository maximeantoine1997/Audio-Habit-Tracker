import { PieChartOutlined, SettingOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const { Content, Footer, Sider } = Layout;

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getSelectedMenu = (): Array<string> => {
    const split = window.location.href.split("/");
    const key = split[split.length - 1];

    if (!key) return ["index"];

    return [key];
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={isCollapsed}
          onCollapse={(collapsed) => setIsCollapsed(collapsed)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={getSelectedMenu()}
            mode="inline"
          >
            <Menu.Item key="index" icon={<PieChartOutlined />}>
              <Link to="/">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined />}>
              <Link to="/settings">User Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created by Maxime Antoine ©2021
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
