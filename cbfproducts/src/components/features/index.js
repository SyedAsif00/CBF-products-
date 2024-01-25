import React from "react";
import { Grid, Typography, Box, Space, Card } from "@mui/material";
import "./feature.css";
import { featuresContainer } from "../../static/texts";
import CustomBtn from "../buttons.js/index";
import sustraxWelcome from "../../assets/sustrax_welcome (1).png";
import CustomSwiper from "../swiper/CustomSwiper";
const Features = () => {
  const { title, desc, btnText } = featuresContainer;

  return (
    <div
      className="features-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={8} style={{}}>
          <Card elevation={10}>
            <CustomSwiper />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            sx={{ fontSize: "30px", fontWeight: "bolder", lineHeight: 1.1 }}
          >
            {" "}
            {title}
          </Typography>
          <Typography sx={{ padding: "25px 0px" }}>{desc}</Typography>
          <CustomBtn bg={true} text={btnText} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Features;
