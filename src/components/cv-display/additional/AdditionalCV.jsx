import { Fragment } from "react";
import "./AdditionalCV.scss";
// import Icon from "@mdi/react";
// import { mdiPhone, mdiEmail, mdiMapMarker, mdiCalendar } from "@mdi/js";
export default function AdditionalCV({ skillsInfo, langsInfo }) {
  return (
    <div className="additional-block">
      <div className="skills-block">
        <h2 className="cv-block-header">Skills</h2>
        {skillsInfo && (
          <ul>
            {skillsInfo.split(",").map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="language-block">
        {langsInfo.length > 0 && <h2 className="cv-block-header">Languages</h2>}
        {langsInfo.map((info, index) => (
          <Fragment key={index}>
            <div className="lang-info">
              <p className="lang">{info?.lang}</p>
              <p className="lang-level">{info?.level}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
