// import React from "react";
// import "./Contact.css";
// import { TextField, Box } from "@mui/material";
// const ContactPage = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         backgroundColor: "#1e1e1f",
//         padding: 3,
//         borderRadius: "12px",
//         boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
//         maxWidth: "500px",
//         paddingTop: "30px",
//         margin: "0 auto"
//       }}
//     >
//       <h1>Contact page</h1>
//       <TextField
//         label="Your Name"
//         variant="outlined"
//         placeholder="Enter your full name"
//         fullWidth
//         InputProps={{
//           sx: {
//             borderRadius: "10px",
//             backgroundColor: "#2c2c2e",
//             color: "white",
//           },
//         }}
//         InputLabelProps={{
//           sx: { color: "#ccc" },
//         }}
//       />

//       <TextField
//         label="Your Email"
//         variant="outlined"
//         placeholder="you@example.com"
//         fullWidth
//         InputProps={{
//           sx: {
//             borderRadius: "10px",
//             backgroundColor: "#2c2c2e",
//             color: "white",
//           },
//         }}
//         InputLabelProps={{
//           sx: { color: "#ccc" },
//         }}
//       />

//       <TextField
//         label="Message"
//         placeholder="Write your message..."
//         variant="outlined"
//         multiline
//         minRows={4}
//         maxRows={6}
//         fullWidth
//         InputProps={{
//           sx: {
//             borderRadius: "10px",
//             backgroundColor: "#2c2c2e",
//             color: "white",
//           },
//         }}
//         InputLabelProps={{
//           sx: { color: "#ccc" },
//         }}
//       />
//     </Box>
//   );
// };

// export default ContactPage;

import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { TextField, Box, Button } from "@mui/material";

const ContactPage = () => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
  <form
  action="https://formsubmit.co/aweb1727@gmail.com"
  method="POST"
>
  <Box
    ref={ref}
    className={`fadeInUp ${isVisible ? "visible" : ""}`}
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      backgroundColor: "#1e1e1f",
      padding: 3,
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
      maxWidth: "500px",
      margin: "0 auto",
      marginTop: "20px",
    }}
  >
    <h1>Contact Page</h1>

    <TextField
      name="name" 
      label="Your Name"
      variant="outlined"
      placeholder="Enter your full name"
      fullWidth
      InputProps={{
        sx: {
          borderRadius: "10px",
          color: "white",
        },
      }}
      InputLabelProps={{ sx: { color: "#ccc" } }}
    />

    <TextField
      name="email"  
      type="email"
      label="Your Email"
      variant="outlined"
      placeholder="you@example.com"
      fullWidth
      InputProps={{
        sx: {
          borderRadius: "10px",
          color: "white",
        },
      }}
      InputLabelProps={{ sx: { color: "#ccc" } }}
    />

    <TextField
      name="message" // ✅ REQUIRED!
      label="Message"
      placeholder="Write your message..."
      variant="outlined"
      multiline
      minRows={4}
      maxRows={6}
      fullWidth
      InputProps={{
        sx: {
          borderRadius: "10px",
          backgroundColor: "#2c2c2e",
          color: "white",
        },
      }}
      InputLabelProps={{ sx: { color: "#ccc" } }}
    />

    <Button type="submit" variant="outlined">
      Submit
    </Button>
  </Box>
</form>

  );
};

export default ContactPage;
