// import React from "react";
// import "./Home.css";
// import MailIcon from "@mui/icons-material/Mail";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import AddLocationIcon from "@mui/icons-material/AddLocation";
// const HomePage = () => {
//   return (
//     <div className="parent">
//       <div className="listDiv">
//         <ul className="list">
//           <li>
//             <img
//               src="./src/WhatsApp Image 2025-06-25 at 18.00.48_9a6c255e.jpg"
//               width="200px"
//               height="200px"
//               alt=""
//             />
//           </li>
//           <li>
//             <h2>Ghulam Mustafa</h2>
//           </li>
//           <li>
//             <MailIcon /> gm4762342@gmail.com
//           </li>
//           <li>
//             <PhoneAndroidIcon /> : 03121037923
//           </li>
//           <li>
//             <DateRangeIcon /> : 28 / March / 2007
//           </li>
//           <li>
//             <AddLocationIcon /> Karchi, Pakistan
//           </li>
//         </ul>
//       </div>
//       <div className="listDiv2">
//         <ul className="list2">
//           <li>
//             {" "}
//             <h2>Education :</h2>
//           </li>
//           <li>
//             <p>
//                MONTH YEAR : 2025 DEGREE TITLE, INTERMEDIATE "I am currently
//               pursuing my Master's in Islamiat."{" "}
//             </p>
//           </li>
//           <li>
//             <h2>Technical Skills: </h2>
//           </li>
//           <li>
//             {" "}
//             <p>
//                Front-End Technologies: React.js, Bootstrap, HTML5, CSS3,
//               JavaScript  Back-End Technologies: Node.js, Express.js 
//               Databases: (MONGO DB ATLAS & FIREBASE DATABASE)
//             </p>
//           </li>
//           <li>
//             <h2>ACTIVITIES : </h2>
//           </li>
//           <li>
//             <h4>Web Developer :</h4>
//           </li>
//           <li>
//             <p>
//               Skilled in creating responsive websites using HTML, CSS, and
//               JavaScript with practical experience from Saylani Mass IT Training
//               Program.
//             </p>
//           </li>
//           <li>
//             <h4>Shopify Developer </h4>
//           </li>
//           <li>
//             <p>
//               Proficient in building and customizing Shopify stores, including
//               product listings, theme editing, and basic app integrations.{" "}
//             </p>
//           </li>
//           <li>
//             <h4>Daraz Store Handling</h4>
//           </li>
//           <li>
//             <p>
//               Experienced in managing Daraz seller accounts: product uploading,
//               order processing, and customer communication.
//             </p>
//           </li>
//           <li>
//             <h4> Full Stack Developer </h4>
//           </li>
//           <li>
//             <p>
//               Understanding of both front-end and back-end technologies; able to
//               work with databases, server side logic, and complete web app
//               structures.{" "}
//             </p>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect } from "react";
import "./Home.css";
import imageProfile from "/src/WhatsApp Image 2025-06-25 at 18.00.48_9a6c255e.jpg"
import MailIcon from "@mui/icons-material/Mail";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AddLocationIcon from "@mui/icons-material/AddLocation";
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
    handleScroll(); // first load pe bhi chale

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parent">
      <div className="listDiv hidden" id="box1">
        <ul className="list">
          <li>
            
             <img src={imageProfile}
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
            <PhoneAndroidIcon /> : 03121037923
          </li>
          <li>
            <DateRangeIcon /> : 28 / March / 2007
          </li>
          <li>
            <AddLocationIcon /> Karchi, Pakistan
          </li>
        </ul>
      </div>
      <div className="listDiv2 hidden" id="box2">
        <ul className="list2">
          <li>
            <h2>Education :</h2>
          </li>
          <li>
            <p>
              MONTH YEAR : 2025 DEGREE TITLE, INTERMEDIATE "I am currently
              pursuing my Master's in Islamiat."
            </p>
          </li>
          <li>
            <h2>Technical Skills: </h2>
          </li>
          <li>
            <p>
               Front-End Technologies: React.js, Bootstrap, HTML5, CSS3,
              JavaScript  Back-End Technologies: Node.js, Express.js 
              Databases: (MONGO DB ATLAS & FIREBASE DATABASE)
            </p>
          </li>
          <li>
            <h2>ACTIVITIES : </h2>
          </li>
          <li>
            <h4>Web Developer :</h4>
          </li>
          <li>
            <p>
              Skilled in creating responsive websites using HTML, CSS, and
              JavaScript with practical experience from Saylani Mass IT Training
              Program.
            </p>
          </li>
          <li>
            <h4>Shopify Developer </h4>
          </li>
          <li>
            <p>
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
            <p>
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
