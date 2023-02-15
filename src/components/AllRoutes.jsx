import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginCard from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
import SignupCard from "./SignUpPage";
import Tasks from "./Tasks";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignupCard />} />
        <Route path="/login" element={<LoginCard />} />
        <Route   path="/tasks/:id"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
