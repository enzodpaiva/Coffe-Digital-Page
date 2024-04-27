import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import Sidebar from "@/app/components/Sidebar"; // Importe o componente do menu lateral
import styles from "./dashboard.module.css";
import Topbar from "@/app/components/Topbar";
import Init from "./layouts/initDashboard/init";
import Products from "./layouts/products/Products";
import Plans from "./layouts/plans/Plans";
import Users from "./layouts/users/Users";

export default function ScreenDashboard() {

  const [selectedComponent, setSelectedComponent] = useState("init");

  const handleMenuClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const components = {
    Início: <Init />,
    Produtos: <Products />,
    Planos: <Plans/>,
    Usuários: <Users/>

  };

  return (
    <Container className={styles.dashboardContainer} maxWidth="100%">
      <Topbar/>
      <Box display="flex" className={styles.dashboardContent}>
        <Sidebar onMenuClick={handleMenuClick}/>
        <Box flexGrow={1}>
          {components[selectedComponent]}
        </Box>
      </Box>
    </Container>
  );
}
