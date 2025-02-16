import React from "react";
import { Chrono } from "react-chrono";
import Navbar from "../Navbar/index.js"; // Adjust the import path as needed
import "./index.css"; // Ensure you have the CSS file for custom styles

const EducationTimeline = () => {
  const items = [
    {
      title: "2020 - 2024",
      cardTitle: "Computer Science and Engineering- CSE",
      cardSubtitle: "Rajiv Gandhi University of Knowledge Technologies-Rk valley AP",
      cardDetailedText:"CGPA : 8.2/10",
    },
    {
      title: "2018 - 2020",
      cardTitle: "PUC",
      cardSubtitle: "Rajiv Gandhi University of Knowledge Technologies-Rk valley AP",
      cardDetailedText:"CGPA : 8.23/10",
    },
    {
      title: "- 2018",
      cardTitle: "SSC",
      cardSubtitle: "JMJ English medium High school",
      cardDetailedText:"CGPA : 9.5/10",
    },
  ];

  return (
    <>
      <Navbar />
      
      <div className="BG">
      <h1 className="head">Education</h1>
      <div style={{ width: "100%", height: "100vh", padding: "20px" }}>
        <Chrono
        className="bg-in"
          items={items}
          mode="VERTICAL" // You can change to HORIZONTAL or VERTICAL
          theme={{
            primary: "white",
            secondary: "blue",
            cardBgColor: "white", //#F5F5F5
            titleColor: "white",
            titleColorActive: "#FFC107",
          }}
          cardHeight={150}
          scrollable={{ scrollbar: true }}
          useReadMore={false} // Disable "Read More" button for full text visibility
        >
          <div className="chrono-icons">
            <img
              src="https://img.icons8.com/color/48/000000/school.png"
              alt="school"
            />
            <img
              src="https://img.icons8.com/color/48/000000/graduation-cap.png"
              alt="graduation"
            />
            <img
              src="https://img.icons8.com/color/48/000000/artificial-intelligence.png"
              alt="ai"
            />
          </div>
        </Chrono>
      </div>
      </div>

      
    </>
  );
};

export default EducationTimeline;