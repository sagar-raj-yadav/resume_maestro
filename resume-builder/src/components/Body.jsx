import React, { useState } from "react";
import Editor from './editor/Editor';
import Resume from './resume/Resume';

const Body = () => {
 
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    skills: "skills",
    other: "Other",
  };

  const [resumeData, setResumeData] = useState({
    basicInfo: {},
    workExp: [],
    project: [],
    education: [],
    achievement: [],
    skills: "",
    other: "",
  });

  const updateResumeData = (section, data) => {
    setResumeData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={{color:"rgb(83, 197, 236)"}}><u>Resume builder</u></h1>
         <div style={styles.main}>
          <Editor sections={sections} updateResumeData={updateResumeData} />
          <Resume sections={sections} resumeData={resumeData} />
        </div>
      </div>
    </>
  );
};

const styles={
container:{
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap:"30px",
},
toolbar:{
  width: "100%",
  display: "flex",
  gap:"40px",
  justifyContent: "space-between",
  alignItems: "center",
},

colors:{
  display: "flex",
  gap:"20px",
  padding: "0 30px",
},
color:{
  height: "30px",
  width: "30px",
  borderRadius: "50%",
},
}
export default Body;
