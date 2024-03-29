import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Bear } from "./pages/StateDemo";
import { Flex } from "@mantine/core";
import { PostPage } from "./pages/QueryDemo";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="/"
            element={
              <Flex direction="column">
                <Bear />
                <PostPage />
              </Flex>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<div>我的关于页</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
