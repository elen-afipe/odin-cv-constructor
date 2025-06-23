import { Fragment } from "react";
import "./PracticalCV.scss";
import { format } from "date-fns";
export default function PracticalCV({ practicalInfo }) {
  return (
    <>
      {practicalInfo.map((info, index) => (
        <Fragment key={index}>
          <div className="work-block">
            {index === 0 && (
              <h2 className="cv-block-header">Work experience</h2>
            )}
            <p className="job">
              {info.position}
              {info.company ? " at " : null}
              {info?.company}
            </p>
            <p className="work-period">
              {info.workStart &&
                info.workStart !== "" &&
                format(info.workStart, "dd.MM.yyyy")}
              {info.workEnd && " - "}
              {info.workEnd &&
                info.workEnd !== "" &&
                (info.workEnd === "present"
                  ? info.workEnd
                  : format(info.workEnd, "dd.MM.yyyy"))}
            </p>
            <p className="activities" style={{ whiteSpace: "pre-line" }}>
              {info.jobActions}
            </p>
          </div>
        </Fragment>
      ))}
    </>
  );
}
