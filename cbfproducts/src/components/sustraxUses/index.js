import React, { useState } from "react";
import "./index.css";
import { Grid, Typography, Card } from "@mui/material";
import { sustraxMXUses } from "../../static/texts";
import SustraxUsesImg from "../../assets/sustrax-uses.png";

const SustraxUses = () => {
  const { title, listItemOne, listItemTwo, listItemThree } = sustraxMXUses;
  return (
    <div className="sustraxmx-uses-container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" mb={6}>
          Suitable for All - Choose your <strong>Sustrax MX</strong> to Meet
          your Need.
        </Typography>
      </div>
      <Grid
        container
        spacing={8}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <ul style={{ padding: "10px", fontSize: "20px" }}>
            <li>{listItemOne}</li>
            <li>{listItemTwo}</li>
            <li>{listItemThree}</li>
          </ul>

          <p style={{ fontSize: "20px", paddingTop: "20px" }}>
            <strong>Sustrax MX</strong> is fully equipped for global enterprises
            , being designed with{" "}
            <strong>multi-users and multi-language capability</strong>.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img src={SustraxUsesImg} height={500} width={350} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SustraxUses;
