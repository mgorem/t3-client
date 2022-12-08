import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ExploreGem from "./pages/ExploreGem";
import Checkout from "./pages/Checkout";
import RequestAccess from "./pages/RequestAccess";
import Login from "../src/pages/Login";
import ExploreGems from "./pages/ExploreGems";
// import AddContributor from "../../dashboard/src/pages/dash/addcontributor/AddContributor";
// import AddGem from "../../dashboard/src/pages/dash/addgem/AddGem";
// import AddMiners from "../../dashboard/src/pages/dash/addminer/AddMiner";
// import Contributorlist from "../../dashboard/src/pages/dash/contributorlist/Contributorlist";
// import Gemlist from "../../dashboard/src/pages/dash/gemlist/Gemlist";
// import Transactionlist from "../../dashboard/src/pages/dash/transactionlist/Transactionlist";

import AddContributor from "./pages/dash/AddContributor";
import AddGem from "./pages/dash/AddGem";
import AddMiner from "./pages/dash/AddMiner";
import ContributorList from "./pages/dash/ContributorList";
import TransactionList from "./pages/dash/TransactionList";
import GemList from "./pages/dash/GemList";
import Dashboard from "./pages/d-board/Dashboard";

const App = () => {
  const currentUser = true;
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="requestaccess" element={<RequestAccess />} />
            <Route index element={<Home />} />
            <Route path="exploregems">
              <Route index element={<ExploreGems />} />
              <Route path="exploregem" element={<ExploreGem />} />
            </Route>
            <Route path="/addcontributor">
              <Route
                index
                element={
                  <RequireAuth>
                    <AddContributor />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="/addgem">
              <Route
                index
                element={
                  <RequireAuth>
                    <AddGem />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="/addminer">
              <Route
                index
                element={
                  <RequireAuth>
                    <AddMiner />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="/contributorlist">
              <Route
                index
                element={
                  <RequireAuth>
                    <ContributorList />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="/gemlist">
              <Route
                index
                element={
                  <RequireAuth>
                    <GemList />
                  </RequireAuth>
                }
              />
            </Route>
            <Route>
              {/* <Route
                path="minerslist"
                element={
                  <RequireAuth>
                    <Minerslist />
                  </RequireAuth>
                }
              /> */}
            </Route>
            <Route path="transactionlist">
              <Route
                index
                element={
                  <RequireAuth>
                    <TransactionList />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="/dashboard">
              <Route
                index
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
