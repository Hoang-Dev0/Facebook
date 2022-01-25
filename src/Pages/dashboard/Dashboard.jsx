import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

import Header from "../../components/Header";
import MenuLeft from "./components/MenuLeft";

const useStyles = makeStyles({
  dashboard: {
    backgroundColor: "#f0f2f5",
    paddingTop: "1rem"
  },
});
export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      {/* <MenuLeft /> */}
      <Grid
        className={classes.dashboard}
        // sx={{ mt: "64px" }}
        container
        spacing={0}
      >
        <Grid item xs={2.684}>
          <MenuLeft />
        </Grid>
        <Grid item xs>
          {/* <MenuLeft /> */}
        </Grid>
        <Grid item xs={2.684}>
          {/* <MenuLeft /> */}
        </Grid>
      </Grid>
    </div>
  );
}
