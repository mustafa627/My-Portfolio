import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ProjectCard({ image, name, linkProject }) {
  return (
    <Card
      sx={{
        animation: "fadeInUp 0.8s ease forwards",
        opacity: 0,
        transform: "translateY(30px)",
        height: "auto",
        margin: "20px auto",
        backgroundColor: "#1e1e2f",
        color: "white",
        borderRadius: 3,
        boxShadow: 5,
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
        },
        "@keyframes fadeInUp": {
          "0%": {
            opacity: 0,
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      <CardActionArea
        disableRipple
        disableTouchRipple
        sx={{
          height: "100%",
          "&:hover": {
            backgroundColor: "transparent !important",
          },
          "&:focus": {
            backgroundColor: "transparent !important",
          },
          "&.Mui-focusVisible": {
            backgroundColor: "transparent !important",
          },
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt={name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "#90caf9" }}
          >
            {name}
          </Typography>

          <Typography variant="body2" sx={{ color: "#b0bec5" }}>
            {typeof linkProject === "string" ? (
              <a
                href={linkProject}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#82b1ff", textDecoration: "underline" }}
              >
                Visit Project
              </a>
            ) : (
              linkProject
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
