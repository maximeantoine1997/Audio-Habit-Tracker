import {
  PieChartOutlined,
  CalendarOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const getSelectedMenu = (): Array<string> => {
    const split = window.location.href.split("/");
    const key = split[split.length - 1];

    if (!key) return ["index"];

    return [key];
  };

  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      onCollapse={(collapsed) => setIsCollapsed(collapsed)}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={getSelectedMenu()} mode="inline">
        <Menu.Item key="index" icon={<PieChartOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="calendar" icon={<CalendarOutlined />}>
          <Link to="/calendar">Calendar</Link>
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          <Link to="/settings">User Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
