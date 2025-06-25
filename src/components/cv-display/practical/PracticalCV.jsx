import { Fragment } from "react";
import "./PracticalCV.scss";
import { format } from "date-fns";
export default function PracticalCV({ practicalInfo }) {
  return (
    <>
      {practicalInfo.map((info, index) => (
        <Fragment key={index}>
          <div className="work-block">
            {index === 0 && <h2 className="cv-block-header">Experience</h2>}
            <div className="work-content">
              <div className="duty-period">
                <p className="work-period">
                  {info.workStart &&
                    info.workStart !== "" &&
                    format(info.workStart, "MM.yyyy")}
                  {info.workEnd && " - "}
                  {info.workEnd &&
                    info.workEnd !== "" &&
                    (info.workEnd === "present"
                      ? info.workEnd
                      : format(info.workEnd, "MM.yyyy"))}
                </p>
              </div>
              <div className="duties">
                <p className="job">{info.position}</p>
                <p className="company">{info?.company}</p>
                <ul className="activities">
                  {info.jobActions.split("\n").map((action, index) => (
                    <li key={index}>{action}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
}
