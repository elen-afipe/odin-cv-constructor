import Icon from "@mdi/react";
import {
  mdiPlus,
  mdiDelete,
  mdiArrowDownDropCircleOutline,
  mdiArrowUpDropCircleOutline,
} from "@mdi/js";
import { useState } from "react";
import { Fragment } from "react";

function PracticalFormPart({
  practicalInfo,
  setPracticalInfo,
  practicalId,
  onRemove,
}) {
  const [isStillWorking, setIsStillWorking] = useState(false);
  const currentPracticalInfo = practicalInfo[practicalId];
  function submitHandler(e, paramName, practicalId) {
    const newArray = practicalInfo.map((info, index) => {
      if (index === practicalId) {
        return {
          ...info,
          [paramName]: e.target.value,
        };
      } else return info;
    });
    setPracticalInfo(newArray);
  }
  function removeHandler(practicalId) {
    onRemove(practicalId);
  }
  return (
    <Fragment key={practicalId}>
      {practicalId > 0 && (
        <div className="form-delete">
          <h3>Additional work experience</h3>
          <button
            className="delete btn"
            onClick={() => {
              removeHandler(practicalId);
            }}
          >
            <Icon path={mdiDelete} size={1} />
          </button>
        </div>
      )}
      <div className="form-row">
        <label htmlFor={`company${practicalId}`}>Company</label>
        <input
          value={currentPracticalInfo?.company}
          type="text"
          id={`company${practicalId}`}
          onChange={(e) => submitHandler(e, "company", practicalId)}
        ></input>
      </div>
      <div className="form-row">
        <label htmlFor={`position${practicalId}`}>Position</label>
        <input
          value={currentPracticalInfo?.position}
          type="text"
          id={`position${practicalId}`}
          onChange={(e) => submitHandler(e, "position", practicalId)}
        ></input>
      </div>
      <div className="form-row">
        <div className="half-row">
          <label htmlFor={`workStart${practicalId}`}>Started working at</label>
          <input
            value={currentPracticalInfo?.workStart}
            type="month"
            id={`workStart${practicalId}`}
            onChange={(e) => submitHandler(e, "workStart", practicalId)}
          ></input>
        </div>
        <div className="half-row">
          <label htmlFor={`workEnd${practicalId}`}>Ended working at</label>
          <input
            disabled={isStillWorking ? true : false}
            value={
              currentPracticalInfo?.workEnd === "present"
                ? ""
                : currentPracticalInfo.workEnd
            }
            type="month"
            id={`workEnd${practicalId}`}
            onChange={(e) => submitHandler(e, "workEnd", practicalId)}
          ></input>
          <div className="present-checkbox">
            <input
              type="checkbox"
              id={`workEndPresent${practicalId}`}
              value="present"
              onChange={(e) => {
                if (e.target.value === "present")
                  submitHandler(e, "workEnd", practicalId);
                setIsStillWorking(!isStillWorking);
              }}
            />
            <label htmlFor={`workEndPresent${practicalId}`}>
              Still work here
            </label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <label htmlFor={`jobActions${practicalId}`}>Responsibilities</label>
        <textarea
          placeholder="Shortly describe your activities"
          value={currentPracticalInfo?.jobActions}
          id={`jobActions${practicalId}`}
          onChange={(e) => submitHandler(e, "jobActions", practicalId)}
        ></textarea>
      </div>
    </Fragment>
  );
}

export default function PracticalInfo({
  practicalInfo,
  setPracticalInfo,
  isOpen,
  toggleOpen,
  openNext,
}) {
  const btnCollapseLabel = isOpen ? (
    <Icon path={mdiArrowUpDropCircleOutline} size={1} />
  ) : (
    <Icon path={mdiArrowDownDropCircleOutline} size={1} />
  );
  const handleRemovePracticalPart = (indexToRemove) => {
    const updatedPracticalInfo = practicalInfo.filter(
      (_, index) => index !== indexToRemove
    );
    setPracticalInfo(updatedPracticalInfo);
  };
  const maxPracticalPart = 5;
  return (
    <div className="form-block">
      <button className="block-title" onClick={toggleOpen}>
        <h2>Work Experience</h2>
        <span>{btnCollapseLabel}</span>
      </button>
      {isOpen && (
        <>
          {Array.from({ length: practicalInfo.length }, (_, index) => (
            <PracticalFormPart
              key={index}
              practicalInfo={practicalInfo}
              setPracticalInfo={setPracticalInfo}
              practicalId={index}
              onRemove={handleRemovePracticalPart}
            />
          ))}
          {practicalInfo.length < maxPracticalPart && (
            <button
              className="add btn"
              onClick={() => {
                if (practicalInfo.length < maxPracticalPart) {
                  setPracticalInfo([
                    ...practicalInfo,
                    {
                      company: "",
                      position: "",
                      stuLocation: "",
                      workStart: "",
                      workEnd: "",
                      eduAchievement: "",
                    },
                  ]);
                }
              }}
            >
              <Icon path={mdiPlus} size={1} />
            </button>
          )}
          <button onClick={openNext} className="next btn">
            Next
          </button>
          {/* <button onClick={editHandler}>Edit</button> */}
        </>
      )}
    </div>
  );
}
