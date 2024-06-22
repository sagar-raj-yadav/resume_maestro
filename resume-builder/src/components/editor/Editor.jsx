import React, { useEffect, useState } from "react";

import InputControl from "../input control/InputControl";

import styles from "./Editor.module.css";

function Editor(props) {
  const sections = props.sections;
 const updateResumeData =props.updateResumeData ;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const [sectionData, setSectionData] = useState({
    basicInfo: {},
    workExp: {},
    project: {},
    education: {},
    achievement: {},
    skills: "",
    other: "",
  });

  const handleChange = (section, field, value) => {
    setSectionData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    updateResumeData(activeSectionKey, sectionData[activeSectionKey]);
  };
 

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Company Name"
          placeholder="Enter company name e.g. Amazon"
          value={sectionData.workExp.Companyname || ""}
          onChange={(e) => handleChange("workExp", "Companyname", e.target.value)}
        />
        <InputControl
          label="Title"
          placeholder="Enter title e.g. Frontend developer"
          value={sectionData.workExp.title || ""}
          onChange={(e) => handleChange("workExp", "title", e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={sectionData.workExp.CertificateLink || ""}
          onChange={(e) => handleChange("workExp", "CertificateLink", e.target.value)}
        />
        <InputControl
          label="Location"
          placeholder="Enter location e.g. Remote"
          value={sectionData.workExp.Location || ""}
          onChange={(e) => handleChange("workExp", "Location", e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          value={sectionData.workExp.StartDate || ""}
          onChange={(e) => handleChange("workExp", "StartDate", e.target.value)}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          value={sectionData.workExp.enddate || ""}
          onChange={(e) => handleChange("workExp", "enddate", e.target.value)}
        />
      </div>
      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          value={sectionData.workExp.line1 || ""}
          onChange={(e) => handleChange("workExp", "line1", e.target.value)}
        />
        <InputControl
          placeholder="Line 2"
          value={sectionData.workExp.line2 || ""}
          onChange={(e) => handleChange("workExp", "line2", e.target.value)}
        />
        <InputControl
          placeholder="Line 3"
          value={sectionData.workExp.line3 || ""}
          onChange={(e) => handleChange("workExp", "line3", e.target.value)}
        />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title e.g. Chat app"
          value={sectionData.project.Title || ""}
          onChange={(e) => handleChange("project", "Title", e.target.value)}
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        value={sectionData.project.Overview || ""}
        onChange={(e) => handleChange("project", "Overview", e.target.value)}
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
          value={sectionData.project.DeployedLink || ""}
          onChange={(e) => handleChange("project", "DeployedLink", e.target.value)}
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          value={sectionData.project.GithubLink || ""}
          onChange={(e) => handleChange("project", "GithubLink", e.target.value)}
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          value={sectionData.project.line1 || ""}
          onChange={(e) => handleChange("project", "line1", e.target.value)}
        />
        <InputControl
          placeholder="Line 2"
          value={sectionData.project.line2 || ""}
          onChange={(e) => handleChange("project", "line2", e.target.value)}
        />
        <InputControl
          placeholder="Line 3"
          value={sectionData.project.line3 || ""}
          onChange={(e) => handleChange("project", "line3", e.target.value)}
        />
        <InputControl
          placeholder="Line 4"
          value={sectionData.project.line4 || ""}
          onChange={(e) => handleChange("project", "line4", e.target.value)}
        />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>  
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
        value={sectionData.education.CollegeName || ""}
        onChange={(e) => handleChange("education", "CollegeName", e.target.value)}
      />
      <InputControl
          label="course"
          placeholder="BTech/MTech"
          value={sectionData.education.course || ""}
          onChange={(e) => handleChange("education", "course", e.target.value)}
        />
       </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          value={sectionData.education.date || ""}
          onChange={(e) => handleChange("education", "date", e.target.value)}
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          value={sectionData.education.EndDate || ""}
          onChange={(e) => handleChange("education", "EndDate", e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Relevant subjects"
          type="text"
          placeholder="DSA,OPPs,OS"
          value={sectionData.education.subject || ""}
          onChange={(e) => handleChange("education", "subject", e.target.value)}
        />
      </div>
    </div>
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name e.g. sagar"
          value={sectionData.basicInfo.name || ""}
          onChange={(e) => handleChange("basicInfo", "name", e.target.value)}
        />
        <InputControl
          label="Title"
          placeholder="Enter your title e.g. Frontend developer"
          value={sectionData.basicInfo.title || ""}
          onChange={(e) => handleChange("basicInfo", "title", e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="LinkedIn Link"
          placeholder="Enter your LinkedIn profile link"
          value={sectionData.basicInfo.linkedin || ""}
          onChange={(e) => handleChange("basicInfo", "linkedin", e.target.value)}
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your Github profile link"
          value={sectionData.basicInfo.github || ""}
          onChange={(e) => handleChange("basicInfo", "github", e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter your email"
          value={sectionData.basicInfo.email || ""}
          onChange={(e) => handleChange("basicInfo", "email", e.target.value)}
        />
        <InputControl
          label="Phone"
          placeholder="Enter your phone number"
          value={sectionData.basicInfo.phone || ""}
          onChange={(e) => handleChange("basicInfo", "phone", e.target.value)}
        />
      </div>
    </div>
  );

  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          value={sectionData.achievement.line1 || ""}
          onChange={(e) => handleChange("achievement", "line1", e.target.value)}
        />
        <InputControl
          placeholder="Line 2"
          value={sectionData.achievement.line2 || ""}
          onChange={(e) => handleChange("achievement", "line2", e.target.value)}
        />
        <InputControl
          placeholder="Line 3"
          value={sectionData.achievement.line3 || ""}
          onChange={(e) => handleChange("achievement", "line3", e.target.value)}
        />
        <InputControl
          placeholder="Line 4"
          value={sectionData.achievement.line4 || ""}
          onChange={(e) => handleChange("achievement", "line4", e.target.value)}
        />
      </div>
    </div>
  );

  const skillsbody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your skills</label>
        <InputControl
          placeholder="Line 1"
          value={sectionData.skills.line1 || ""}
          onChange={(e) => handleChange("skills", "line1", e.target.value)}
        />
        <InputControl
          placeholder="Line 2"
          value={sectionData.skills.line2 || ""}
          onChange={(e) => handleChange("skills", "line2", e.target.value)}
        />
        <InputControl
          placeholder="Line 3"
          value={sectionData.skills.line3 || ""}
          onChange={(e) => handleChange("skills", "line3", e.target.value)}
        />
        <InputControl
          placeholder="Line 4"
          value={sectionData.skills.line4 || ""}
          onChange={(e) => handleChange("skills", "line4", e.target.value)}
        />
      </div>
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Other"
        placeholder="Enter something"
        value={sectionData.other.other || ""}
        onChange={(e) => handleChange("other", "other", e.target.value)}
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.skills:
        return skillsbody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

 


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((item) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === item ? styles.active : ""
            }`}
            key={item}
            onClick={() => setActiveSectionKey(item)}
          >
            {sections[item]}
          </div>
        ))}
      </div>

    
  
      <div className={styles.body}>
        {generateBody()}
        <button  className={styles.savebutton} onClick={handleSave}>Save</button>
      </div>

    </div>
  );
}

export default Editor;