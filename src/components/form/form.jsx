import "./form.scss";
import Icon from "@mdi/react";
import { mdiDownload } from "@mdi/js";
import GeneralInfo from "./general/GeneralInfo";
import EduInfo from "./edu/EduInfo";
import PracticalInfo from "./practical/PracticalInfo";
import { useState } from "react";
import { exportToPDF } from "./exportCV";
import AdditionalInfo from "./additional/AdditionalInfo";
// function getSubmitData(e) {

// }
export default function Form({ data, handlers }) {
  //   const [isSubmitted, setIsSubmitted] = useState(false);
  function clearInputs() {
    handlers.setGeneralInfo({
      position: "",
      name: "",
      surname: "",
      email: "",
      phone: "",
      location: "",
      birthday: "",
      imageSrc: "./src/assets/avatar-holder.svg",
    });
    handlers.setEduInfo([
      {
        eduName: "",
        stuArea: "",
        stuStart: "",
        stuEnd: "",
        stuLocation: "",
        eduAchievement: "",
      },
    ]);
    handlers.setPracticalInfo([
      {
        company: "",
        position: "",
        workStart: "",
        workEnd: "",
        jobActions: "",
      },
    ]);
    handlers.setSkillsInfo("");
    handlers.setLangsInfo([
      {
        lang: "",
        level: "",
      },
    ]);
  }
  const [openSections, setOpenSections] = useState(["GeneralInfo"]);
  const toggleOpenSection = (sectionName) => {
    setOpenSections((prev) => {
      if (prev.includes(sectionName)) {
        return prev.filter((section) => section !== sectionName);
      } else {
        return [...prev, sectionName];
      }
    });
  };
  const closeCurrentOpenNext = (currentSectionName, nextSectionName) => {
    if (openSections.includes(currentSectionName)) {
      setOpenSections(
        openSections.filter((section) => section !== currentSectionName)
      );
    }
    if (!openSections.includes(nextSectionName)) {
      setOpenSections([nextSectionName]);
    }
  };
  return (
    <>
      {/* on top a panel to switch between blocks, at the bottom of block - edit and save, when save clicked move to the next block and disable inputs here */}
      {/* {isSubmitted && <h1>Success</h1>} */}
      <div className="form-wrapper">
        <GeneralInfo
          generalInfo={data.generalInfo}
          submitHandler={handlers.setGeneralInfo}
          isOpen={openSections.includes("GeneralInfo")}
          toggleOpen={() => toggleOpenSection("GeneralInfo")}
          openNext={() => closeCurrentOpenNext("GeneralInfo", "EduInfo")}
        ></GeneralInfo>
        <EduInfo
          eduInfo={data.eduInfo}
          setEduInfo={handlers.setEduInfo}
          isOpen={openSections.includes("EduInfo")}
          toggleOpen={() => toggleOpenSection("EduInfo")}
          openNext={() => closeCurrentOpenNext("GeneralInfo", "PracticalInfo")}
        ></EduInfo>
        <PracticalInfo
          practicalInfo={data.practicalInfo}
          setPracticalInfo={handlers.setPracticalInfo}
          isOpen={openSections.includes("PracticalInfo")}
          toggleOpen={() => toggleOpenSection("PracticalInfo")}
          openNext={() =>
            closeCurrentOpenNext("PracticalInfo", "AdditionalInfo")
          }
        ></PracticalInfo>
        <AdditionalInfo
          skillsInfo={data.skillsInfo}
          langsInfo={data.langsInfo}
          setSkillsInfo={handlers.setSkillsInfo}
          setLangsInfo={handlers.setLangsInfo}
          isOpen={openSections.includes("AdditionalInfo")}
          toggleOpen={() => toggleOpenSection("AdditionalInfo")}
        ></AdditionalInfo>
        <button className="clear btn" onClick={clearInputs}>
          Clear all
        </button>
        <button className="submit btn" onClick={exportToPDF}>
          <p>Download CV</p>
          <Icon path={mdiDownload} size={1} />
        </button>
      </div>
    </>
  );
}
