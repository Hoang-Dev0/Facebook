import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

import Header from "../../components/Header";
import MenuLeft from "./components/MenuLeft";
import MenuRight from "./components/MenuRight";
import Content from "./components/Content";

const useStyles = makeStyles({
  dashboard: {
    backgroundColor: "#f0f2f5",
    paddingTop: "1rem"
  },
});
export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Header />
      {/* <MenuLeft /> */}
      <Grid
        className={classes.dashboard}

        sx={{ mt: "55px" }}

        container
        spacing={0}
      >
        <Grid item xs={2.684}>
          <MenuLeft />
        </Grid>
        <Grid item xs>

          <Content />
        </Grid>
        <Grid item xs={2.684}>
          <MenuRight />

        </Grid>
      </Grid>
    </>
  );
}
