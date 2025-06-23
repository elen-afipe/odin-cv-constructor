import { Fragment } from "react";
import "./EduCV.scss";
import { format } from "date-fns";
import Icon from "@mdi/react";
// import { mdiPhone, mdiEmail, mdiMapMarker, mdiCalendar } from "@mdi/js";
export default function EduCV({ eduInfo }) {
  return (
    <>
      {eduInfo.map((info, index) => (
        <Fragment key={index}>
          <div className="education-block">
            {index === 0 && <h2 className="cv-block-header">Education</h2>}
            <p className="degree">
              {info.stuArea}
              {info.stuLocation ? ", " : null}
              {info?.stuLocation}
            </p>
            <p className="institution">
              {info.eduName} {info.stuStart && " | "}
              <span className="edu-period">
                {info.stuStart &&
                  info.stuStart !== "" &&
                  format(info.stuStart, "dd.MM.yyyy")}
                {info.stuEnd && " - "}
                {info.stuEnd &&
                  info.stuEnd !== "" &&
                  (info.stuEnd === "present"
                    ? info.stuEnd
                    : format(info.stuEnd, "dd.MM.yyyy"))}
              </span>
            </p>
            <p className="achievements">{info.eduAchievement}</p>
          </div>
        </Fragment>
      ))}
    </>
  );
}
