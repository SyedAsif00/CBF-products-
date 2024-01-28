import React from "react";
import "./cards.css";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import cardsImagesAndText from "../../static/texts";

// import StarIcon from "@mui/icons-material/Star";

const FourCards = () => {
  return (
    <div className="cards">
      <div className="card1">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default FourCards;
