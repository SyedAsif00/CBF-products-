import React from "react";
import "./calculate.css";
import { Grid } from "@mui/material";
import {
  calculateTextSection,
  carbonCalculateTextSection,
  calculateOptionSection,
  imagesAndTexts,
} from "../../static/texts";

const Calculate = () => {
  const { title, subTitle, secondTitle } = calculateTextSection;
  const { descTitle, descOne, descTwo } = carbonCalculateTextSection;

  const plansItem = [
    {
      title: "Calculate",
      subTitle: "Start Measuring And Reporting Your Carbon Emissions",
      secondTitle: "Select the type of support you need",
    },
  ];
  return (
    <div className="calculate">
      <div className="header">
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <h3>{secondTitle}</h3>
      </div>
      <div className="supports">
        {imagesAndTexts.map((item, index) => (
          <div key={index} className={`image${index + 1}`}>
            <img src={item.image} alt={`Image ${index + 1}`} />
            <h1>{item.title}</h1>
            <p>{item.subTitle}</p>
          </div>
        ))}
      </div>
      <div className="calculateLine"></div>
      <Grid container spacing={3} className="description">
        <Grid item xs={12} md={6} className="descOne">
          <h3>{descTitle}</h3>
          <p>{descOne}</p>
          <p>{descTwo}</p>
        </Grid>
        <Grid item xs={12} md={6} className="descTwo">
          <div>
            <h2 className="descTwoOptionTitle">
              {calculateOptionSection[0].optionTitle}
            </h2>
            <ul className="descTwoOption">
              {calculateOptionSection[0].options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Calculate;
