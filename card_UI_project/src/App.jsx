import React from "react";
import "./App.css";
import Cards from "./Components/Cards";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhqOC_8TpCUmksmFEIm1YqtkLvN8N-S1dew&s",
      companyName: "Google",
      post: "Frontend Developer",
      datePosted: "5 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rIxFRNX2QZlnQidGjE75yAg9jR4Jhy3Jgw&s",
      companyName: "Apple",
      post: "iOS Engineer",
      datePosted: "2 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Meta",
      post: "React Developer",
      datePosted: "10 days ago",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      companyName: "Amazon",
      post: "Backend Engineer",
      datePosted: "3 weeks ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
      companyName: "Netflix",
      post: "Full Stack Developer",
      datePosted: "1 week ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ccmph3FIPRRoY9m6aYXblfogFTczyMqDGg&s",
      companyName: "Microsoft",
      post: "Software Engineer",
      datePosted: "6 days ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzZes0nQNNBGW9AubrQLhcO0tkyxSL0h_Cw&s",
      companyName: "Tesla",
      post: "Embedded Systems Engineer",
      datePosted: "4 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$88/hr",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.jpg?width=1200&format=pjpg&optimize=medium",
      companyName: "Adobe",
      post: "UI/UX Designer",
      datePosted: "8 days ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZk18axFbwloR8J_NvRhGry9B1bBUx0X5nQ&s",
      companyName: "Salesforce",
      post: "Cloud Engineer",
      datePosted: "12 days ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAaVqaRb5PoXm1LaNHA-JfQiL_GYi4a0ePaQ&s",
      companyName: "Uber",
      post: "Data Engineer",
      datePosted: "2 months ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Bangalore, India",
    },
  ];
  return (
    <div className="parent">
      {jobOpenings.map((elem, idx) => {
        return (
          <div key={idx}>
            <Cards
              company={elem.companyName}
              post={elem.post}
              datePosted={elem.datePosted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
              logo={elem.brandLogo}
            />
            ;
          </div>
        );
      })}
    </div>
  );
};

export default App;
