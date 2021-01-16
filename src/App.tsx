import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import "./index.css";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Sidebar />
          <Header />
          <Content style={{ margin: "0 16px" }}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/calendar">
                <Calendar />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
