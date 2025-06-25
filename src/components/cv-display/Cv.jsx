// import { useState } from "react";
import "./cv.scss";
import GeneralCV from "./general/GeneralCV";
import EduCV from "./edu/EduCV";
import PracticalCV from "./practical/PracticalCV";
import AdditionalCV from "./additional/AdditionalCV";
export default function Cv({ data }) {
  // const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="cv-wrapper">
      <GeneralCV generalInfo={data.generalInfo}></GeneralCV>
      <EduCV eduInfo={data.eduInfo}></EduCV>
      <PracticalCV practicalInfo={data.practicalInfo}></PracticalCV>
      <AdditionalCV
        skillsInfo={data.skillsInfo}
        langsInfo={data.langsInfo}
      ></AdditionalCV>
    </div>
  );
}
