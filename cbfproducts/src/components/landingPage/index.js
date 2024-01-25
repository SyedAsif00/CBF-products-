import React from "react";
import "./landingPage.css";
import { Grid } from "@mui/material";
import { landingPageText } from "../../static/texts";
import CustomBtn from "../../components/buttons.js";
import carbonStatsImg from "../../assets/sustraxDash.png";

const landingPage = () => {
  const videoUrl = "https://youtu.be/GgRg3jZpl1Y";
  const { mainTitle, desc, subText } = landingPageText;
  return (
    <div className="landingPage-container">
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6}>
          <span className="subtext">{subText}</span>
          <h1 className="mainTitle">{mainTitle}</h1>
          <p className=""> {desc}</p>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CustomBtn text="Learn more" bg={true} />
            <CustomBtn text="Contact us" bg={false} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="video-background">
            <iframe
              width="100%"
              height="330"
              src="https://www.youtube.com/embed/GgRg3jZpl1Y"
              title="Embedded Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default landingPage;
