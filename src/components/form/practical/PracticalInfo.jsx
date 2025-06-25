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
  isEditable,
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
            disabled={isEditable ? false : true}
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
          disabled={isEditable ? false : true}
          value={currentPracticalInfo?.company}
          type="text"
          id={`company${practicalId}`}
          onChange={(e) => submitHandler(e, "company", practicalId)}
        ></input>
      </div>
      <div className="form-row">
        <label htmlFor={`position${practicalId}`}>Position</label>
        <input
          disabled={isEditable ? false : true}
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
            disabled={isEditable ? false : true}
            value={currentPracticalInfo?.workStart}
            type="month"
            id={`workStart${practicalId}`}
            onChange={(e) => submitHandler(e, "workStart", practicalId)}
          ></input>
        </div>
        <div className="half-row">
          <label htmlFor={`workEnd${practicalId}`}>Ended working at</label>
          <input
            disabled={isStillWorking || !isEditable ? true : false}
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
              disabled={isEditable ? false : true}
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
          disabled={isEditable ? false : true}
          placeholder="Shortly describe your activities, press 'Enter' to start from a new line"
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
  const [isEditable, setIsEditable] = useState(true);
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
              isEditable={isEditable}
            />
          ))}
          {practicalInfo.length < maxPracticalPart && (
            <button
              disabled={isEditable ? false : true}
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
          <div className="buttons">
            <button className="edit btn" onClick={() => setIsEditable(true)}>
              Edit
            </button>
            <button
              onClick={() => {
                openNext();
                setIsEditable(false);
              }}
              className="next btn"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
