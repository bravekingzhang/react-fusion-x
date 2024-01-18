import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<div>我的首页</div>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<div>我的关于页</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
