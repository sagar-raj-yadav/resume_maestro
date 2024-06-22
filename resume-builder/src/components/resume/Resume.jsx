import styles from "./Resume.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from 'react';

function Resume({ sections, resumeData }) {

  const resumeRef = useRef();
  const handleDownload = () => {
    const input = resumeRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("resume.pdf");
    });
  };

  const renderSectionContent = (sectionKey) => {
    const data = resumeData[sectionKey];
    switch (sectionKey) {
      case "basicInfo":
        return (
          <div className={styles.sectionContent}>
            <div key={data} className={styles.item}>
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Title:</strong> {data.title}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>Phone:</strong> {data.phone}</p>
              <p><strong>LinkedIn:</strong> {data.linkedin}</p>
              <p><strong>GitHub:</strong> {data.github}</p>
            </div>
          </div>
        );
      case "workExp":
        return (
          <div className={styles.sectionContent}>
            <div key={data} className={styles.item}>
              <p><strong>Title:</strong> {data.title}</p>
              <p><strong>Company:</strong> {data.Companyname}</p>
              <p><strong>Location:</strong> {data.Location}</p>
              <p><strong>Start Date:</strong> {data.StartDate}</p>
              <p><strong>End Date:</strong> {data.enddate}</p>
              <p><strong>Certificate Link:</strong> {data.CertificateLink}</p>
              <p><strong>Description: </strong></p>
              <ul>
                <li>{data.line1}</li>
                <li>{data.line2}</li>
                <li>{data.line3}</li>
              </ul>
            </div>
          </div>
        );
      case "project":
        return (
          <div className={styles.sectionContent}>
            <div key={data} className={styles.item}>
              <p><strong>Title:</strong> {data.Title}</p>
              <p><strong>Overview:</strong> {data.Overview}</p>
              <p><strong>Deployed Link:</strong> {data.DeployedLink}</p>
              <p><strong>GitHub Link:</strong> {data.GithubLink}</p>
              <p><strong>Description:</strong></p>
              <ul>
                <li>{data.line1}</li>
                <li>{data.line2}</li>
                <li>{data.line3}</li>
                <li>{data.line4}</li>
              </ul>
            </div>
          </div>
        );
      case "education":
        return (
          <div className={styles.sectionContent}>
            <div key={data} className={styles.item}>
              <p><strong>Institution Name:</strong> {data.CollegeName}</p>
              <p><strong>Course:</strong> {data.course}</p>
              <p><strong>Start Date:</strong> {data.date}</p>
              <p><strong>End Date:</strong> {data.EndDate}</p>
              <p><strong>Relevant Subject:</strong> {data.subject}</p>
            </div>
          </div>
        );
      case "achievement":
        return (
          <div className={styles.sectionContent}>
            <div key={data} className={styles.item}>
              <ul>
                <li>{data.line1}</li>
                <li>{data.line2}</li>
                <li>{data.line3}</li>
                <li>{data.line4}</li>
              </ul>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className={styles.sectionContent}>
            <div key={data} className={styles.item}>
            <p><strong>skills: </strong></p>
              <li>{data.line1}</li>
              <li>{data.line2}</li>
              <li>{data.line3}</li>
              <li>{data.line4}</li>
            </div>
          </div>
        );
      case "other":
        return (
          <div className={styles.sectionContent}>
            <div key={data} className={styles.item}>
            <p><strong>other Info: </strong></p>
              <p>{data.other}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h2 style={{ marginBottom: "30px", textAlign: "center", fontSize: "40px", borderBottom: "3px solid #26cfed" }}>Resume</h2>
        <div className={styles.resume}>

          <div ref={resumeRef} className={styles.resumeContent}>
            {Object.keys(sections).map((sectionKey) => (
              <div key={sectionKey} className={styles.section}>
                <h2 className={styles.sectionTitle}>{sections[sectionKey]}</h2>
                {renderSectionContent(sectionKey)}
              </div>
            ))}
          </div>
          <button className={styles.downloadButton} onClick={handleDownload}>
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default Resume;
