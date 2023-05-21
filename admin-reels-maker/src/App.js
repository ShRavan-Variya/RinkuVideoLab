import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SideBar } from "./components";
import {
  AdminScreen,
  ClientScreen,
  Dashboard,
  OrdersScreen,
  DashDataScreen,
} from "./screens";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Orders" element={<OrdersScreen />} />
            <Route path="/Admins" element={<AdminScreen />} />
            <Route path="/Clients" element={<ClientScreen />} />
            <Route path="/DashData" element={<DashDataScreen />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
    </>
  );
}

export default App;
