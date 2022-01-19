import React from "react";
import Header from "../../components/Header";

import Grid from "@mui/material/Grid";
import MenuLeft from "./components/MenuLeft";
export default function Dashboard() {
  return (
    <div>
      <Header />
      {/* <MenuLeft /> */}
      <Grid container fluid spacing={0.3}>
        <Grid item xs={2.4}>
          <MenuLeft />
        </Grid>
        <Grid item xs>
          <MenuLeft />
        </Grid>
        <Grid item xs={2.4}>
          <MenuLeft />
        </Grid>
      </Grid>
    </div>
  );
}
