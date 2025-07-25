import React, { useEffect } from "react";
import "./Home.css";
import imageProfile from "/src/WhatsApp Image 2025-06-25 at 18.00.48_9a6c255e.jpg";
import MailIcon from "@mui/icons-material/Mail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const box1 = document.getElementById("box1");
      const box2 = document.getElementById("box2");

      const reveal = (element) => {
        if (!element) return;
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          element.classList.add("visible");
        }
      };

      reveal(box1);
      reveal(box2);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parent">
      <div className="listDiv hidden" id="box1">
        <ul className="list">
          <li>
            <img
              src={imageProfile}
              width="200px"
              height="200px"
              alt="profile"
            />
          </li>
          <li>
            <h2>Ghulam Mustafa</h2>
          </li>
          <li>
            <MailIcon /> gm4762342@gmail.com
          </li>
          <li>
            <PhoneAndroidIcon /> 03121037923
          </li>
          <li>
            <DateRangeIcon /> 28 / March / 2007
          </li>
          <li>
            <AddLocationIcon /> Karchi, Pakistan
          </li>
          <li id="icon"><a href="https://github.com/mustafa627"><GitHubIcon /></a> <a href="https://www.linkedin.com/in/ghulam-mustafa-92a324310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><LinkedInIcon /></a></li>
        </ul>
      </div>
      <div className="listDiv2 hidden" id="box2">
        <ul className="list2">
          <li>
            <h2>Education :</h2>
          </li>
          <li>
            <p className="para">
              MONTH YEAR : 2025 DEGREE TITLE, INTERMEDIATE "I am currently
              pursuing my Master's in Islamiat."
            </p>
          </li>
          <li>
            <h2>Technical Skills: </h2>
          </li>
          <li>
            <p className="para">
              <h3> Frontend : </h3> HTML5, CSS3, JavaScript (ES6+), React.js,
              Redux, React Router
              <h3>  Styling & UI :</h3> Tailwind CSS, Material UI (MUI),
              Bootstrap Form Handling: React Hook Form, Formik, Yup
              <h3> Backend : </h3> Node.js, Express.js, MongoDB
              <h3> Version Control</h3> GitHub
              <h3> Other Tools:</h3> Postman, VS Code, Netlify, Vercel,
              <h3> Soft Skills : </h3>
              Teamwork, Communication, Problem-solving
              <h3> Databases</h3>(MONGO DB ATLAS & FIREBASE DATABASE, SUPABASE
              , MYSQL BASIC KNWOLEDGE )
            </p>
          </li>
          <li>
            <h2>ACTIVITIES : </h2>
          </li>
          <li>
            <h4>Web Developer :</h4>
          </li>
          <li>
            <p className="para">
              Skilled in creating responsive websites using HTML, CSS, and
              JavaScript with practical experience from Saylani Mass IT Training
              Program.
            </p>
          </li>
          <li>
            <h4>Shopify Developer </h4>
          </li>
          <li>
            <p className="para">
              Proficient in building and customizing Shopify stores, including
              product listings, theme editing, and basic app integrations.
            </p>
          </li>
          <li>
            <h4>Daraz Store Handling</h4>
          </li>
          <li>
            <p>
              Experienced in managing Daraz seller accounts: product uploading,
              order processing, and customer communication.
            </p>
          </li>
          <li>
            <h4> Full Stack Developer </h4>
          </li>
          <li>
            <p className="para">
              Understanding of both front-end and back-end technologies; able to
              work with databases, server side logic, and complete web app
              structures.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
