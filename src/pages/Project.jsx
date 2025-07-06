import React from "react";
import ProjectCard from "../componenet/ProjectCard";
import image from "/src/blogapp.png";
import searchApp from "/src/githubsearchapp.png";
import weatherApp from "/src/Weatherapp.png";
import todoapp from "/src/todoapp.png";
import quiz from "/src/quizapp.png";
import calculator from "/src/calculator.png";
import texteditor from "/src/texteditor.png";
import tasbeeh from "/src/tasbeeh.png";
import portfolio from "/src/portfolio.png";
import stopWatch from "/src/stopwatch.png";
import "./project.css";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { Box, Typography } from "@mui/material";
const Project = () => {
  return (
    <>
      {" "}
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginTop: "20px",
          borderBottom: "1px solid white",
        }}
      >
        React Js
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        {" "}
        <ProjectCard
          image={image}
          name={"Blog App With Firebase"}
          linkProject={
            <a
              href="https://myblogapp-reactjs.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit Blog App
            </a>
          }
        />{" "}
        <ProjectCard
          image={portfolio}
          name={"portfolio app"}
          linkProject={
            <a
              href="https://my-portfolio-kappa-roan-50.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit  Portfolio
            </a>
          }
        />
         <ProjectCard
          image={tasbeeh}
          name={"tasbeeh App"}
          linkProject={
            <a
              href="https://tasbeeh-counter01.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit TextEditor App
            </a>
          }
        />
        <ProjectCard
          image={searchApp}
          name={"Search App"}
          linkProject={
            <a
              href="https://github-search-app-react-js.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit searchApp
            </a>
          }
        />{" "}
        <ProjectCard
          image={weatherApp}
          name={"Weather App"}
          linkProject={
            <a
              href="https://weather-app-react-js00.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit Weather App
            </a>
          }
        />
        <ProjectCard
          image={todoapp}
          name={"Todo App"}
          linkProject={
            <a
              href="https://todo-app-react-js00.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit Weather App
            </a>
          }
        />
      </Box>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginTop: "20px",
          borderBottom: "1px solid white",
        }}
      >
        Java Script
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <ProjectCard
          image={quiz}
          name={"Quiz App"}
          linkProject={
            <a
              href="https://quizapp-js00.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit Quiz app
            </a>
          }
        />
        <ProjectCard
          image={calculator}
          name={"Calculator App"}
          linkProject={
            <a
              href="https://quizapp-js00.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit Calculator app
            </a>
          }
        />
        <ProjectCard
          image={stopWatch}
          name={"StopWatch App"}
          linkProject={
            <a
              href="https://stopwatch-js00.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit StopWatch App
            </a>
          }
        />
        <ProjectCard
          image={texteditor}
          name={"TextEditor App"}
          linkProject={
            <a
              href="https://texteditor-js00.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SubdirectoryArrowRightIcon /> Visit TextEditor App
            </a>
          }
        />{" "}
       
      </Box>
    </>
  );
};

export default Project;
