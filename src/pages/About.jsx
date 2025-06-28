// import React from "react";
// import "./About.css";
// import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
// import AdUnitsOutlinedIcon from "@mui/icons-material/AdUnitsOutlined";
// import CardSkill from "../componenet/Card";
// import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
// const About = () => {
//   return (
//     <div className="aboutDiv">
//       <ul className="list">
//         <li className="h3">
//           <h3>PROFESSIONAL SUMMARY : </h3>
//         </li>
//         <li>
//           <p>
//             Dedicated Full Stack Developer with practical experience in
//             React.js, Node.js, and Shopify development. Completed rigorous
//             training at Saylani Mass IT Program. Passionate about building
//             efficient and user friendly web applications and eager to contribute
//             technical skills in a professional environment.{" "}
//           </p>
//         </li>
//         <li>
//           <h3 className="h3">SKILLS</h3>
//         </li>
//       </ul>
//       <ol className="list" id="lili">
//         <li> Web Developer</li>
//         <li> FullStack Developer</li>
//         <li> Daraz Store Handling</li>
//         <li> Shopify Developer</li>
//       </ol>
//       <ul id="cardLi">
//         <li>
//           <CardSkill
//             skill="Web Development"
//             cardIcon={<CodeOutlinedIcon />}
//             cardText="I design and build responsive websites using modern technologies like
//           HTML, CSS, JavaScript, and React"
//           />
//         </li>
//         <li>
//           <CardSkill
//             skill="Frontend development"
//             cardIcon={<AdUnitsOutlinedIcon />}
//             cardText=" Design & developing High-level, responsive frontend websites."
//           />
//         </li>
//         <li>
//           {" "}
//           <CardSkill
//             skill="Backend development"
//             cardIcon={<StorageOutlinedIcon />}
//             cardText="Creating robust, scalable backend solutions with Node Js."
//           />
//         </li>
//         <li>
//           <CardSkill
//             skill="Shopify & Daraz"
//             cardIcon={
//               <img
//                 src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
//                 alt="Shopify"
//                 width={40}
//                 height={40}
//               />
//             }
//             cardText="Creating robust, scalable backend solutions with Node Js."
//           />
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default About;


import React, { useEffect } from "react";
import "./About.css";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AdUnitsOutlinedIcon from "@mui/icons-material/AdUnitsOutlined";
import CardSkill from "../componenet/Card";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".hidden");

    const revealOnScroll = () => {
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="aboutDiv hidden">
      <ul className="list hidden">
        <li className="h3">
          <h3>PROFESSIONAL SUMMARY :</h3>
        </li>
        <li>
          <p className="para">
            Dedicated Full Stack Developer with practical experience in React.js,
            Node.js, and Shopify development. Completed rigorous training at Saylani
            Mass IT Program. Passionate about building efficient and user friendly web
            applications and eager to contribute technical skills in a professional
            environment.
          </p>
        </li>
        <li>
          <h3 className="h3">SKILLS</h3>
        </li>
      </ul>

      <ol className="list hidden" id="lili">
        <li>Web Developer</li>
        <li>FullStack Developer</li>
        <li>Daraz Store Handling</li>
        <li>Shopify Developer</li>
      </ol>

      <ul id="cardLi" className="hidden">
        <li>
          <CardSkill
            skill="Web Development"
            cardIcon={<CodeOutlinedIcon />}
            cardText="I design and build responsive websites using modern technologies like HTML, CSS, JavaScript, and React"
          />
        </li>
        <li>
          <CardSkill
            skill="Frontend development"
            cardIcon={<AdUnitsOutlinedIcon />}
            cardText="Design & developing High-level, responsive frontend websites."
          />
        </li>
        <li>
          <CardSkill
            skill="Backend development"
            cardIcon={<StorageOutlinedIcon />}
            cardText="Creating robust, scalable backend solutions with Node Js."
          />
        </li>
        <li>
          <CardSkill
            skill="Shopify & Daraz"
            cardIcon={
              <img
                src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
                alt="Shopify"
                width={40}
                height={40}
              />
            }
            cardText="Creating robust, scalable backend solutions with Node Js."
          />
        </li>
      </ul>
    </div>
  );
};

export default About;
