import React from "react";
import { Grid, Icon, Paper, Typography, Card } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import "./steps.css";
const Steps = () => {
  const gridContainerStyle = {
    backgroundColor: "rgba(144, 188, 121, 1)",
    padding: "20px",
  };

  const gridItemStyle = {
    backgroundColor: "rgba(144, 188, 121, 0.7)",
    padding: "15px",
  };

  const gridItems = [
    {
      icon: <BarChartIcon style={{ fontSize: "70px" }} />,
      text: "Calculate",
    },
    {
      icon: <TrackChangesIcon style={{ fontSize: "70px" }} />,
      text: "Target",
    },
    {
      icon: <TrendingDownIcon style={{ fontSize: "70px" }} />,
      text: "Reduce",
    },
    {
      icon: <ForestOutlinedIcon style={{ fontSize: "70px" }} />,
      text: "Offset",
    },
    {
      icon: <CampaignOutlinedIcon style={{ fontSize: "70px" }} />,
      text: "Communicate",
    },
    {
      icon: <TaskOutlinedIcon style={{ fontSize: "70px" }} />,
      text: "Comply",
    },
  ];

  return (
    <Grid container spacing={4}>
      {gridItems.map((item, index) => (
        <Grid
          style={{ cursor: "pointer" }}
          key={index}
          item
          md={4}
          sm={6}
          xs={12}
        >
          <Card className="steps-card" elevation={10} style={gridItemStyle}>
            <div
              className=""
              style={{
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span style={{ color: "#1CA941" }}>{item.icon}</span>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "#fff",
                }}
              >
                {item.text}
              </Typography>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Steps;
