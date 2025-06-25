import Icon from "@mdi/react";
import {
  mdiPlus,
  mdiDelete,
  mdiArrowDownDropCircleOutline,
  mdiArrowUpDropCircleOutline,
} from "@mdi/js";
import { useState } from "react";
import { Fragment } from "react";

function EduFormPart({ eduInfo, setEduInfo, eduId, onRemove }) {
  const [isStillStudying, setIsStillStudying] = useState(false);
  const currentEduInfo = eduInfo[eduId];
  function submitHandler(e, paramName, eduId) {
    const newArray = eduInfo.map((info, index) => {
      if (index === eduId) {
        return {
          ...info,
          [paramName]: e.target.value,
        };
      } else return info;
    });
    setEduInfo(newArray);
  }
  function removeHandler(eduId) {
    onRemove(eduId);
  }
  return (
    <Fragment key={eduId}>
      {eduId > 0 && (
        <div className="form-delete">
          <h3>Additional education</h3>
          <button
            className="delete btn"
            onClick={() => {
              removeHandler(eduId);
            }}
          >
            <Icon path={mdiDelete} size={1} />
          </button>
        </div>
      )}
      <div className="form-row">
        <label htmlFor={`eduName${eduId}`}>Educational institution</label>
        <input
          value={currentEduInfo?.eduName}
          type="text"
          id={`eduName${eduId}`}
          maxLength={80}
          onChange={(e) => submitHandler(e, "eduName", eduId)}
        ></input>
      </div>
      <div className="form-row">
        <label htmlFor={`stuArea${eduId}`}>Study degree (area)</label>
        <input
          value={currentEduInfo?.stuArea}
          type="text"
          id={`stuArea${eduId}`}
          maxLength={80}
          onChange={(e) => submitHandler(e, "stuArea", eduId)}
        ></input>
      </div>
      <div className="form-row">
        <div className="half-row">
          <label htmlFor={`stuStart${eduId}`}>Enrolled at</label>
          <input
            value={currentEduInfo?.stuStart}
            type="month"
            id={`stuStart${eduId}`}
            onChange={(e) => submitHandler(e, "stuStart", eduId)}
          ></input>
        </div>
        <div className="half-row">
          <label htmlFor={`stuEnd${eduId}`}>Graduated at</label>
          <input
            disabled={isStillStudying ? true : false}
            value={
              currentEduInfo?.stuEnd === "present" ? "" : currentEduInfo.stuEnd
            }
            type="month"
            id={`stuEnd${eduId}`}
            onChange={(e) => submitHandler(e, "stuEnd", eduId)}
          ></input>
          <div className="present-checkbox">
            <input
              type="checkbox"
              id={`stuEndPresent${eduId}`}
              value="present"
              onChange={(e) => {
                if (e.target.value === "present")
                  submitHandler(e, "stuEnd", eduId);
                setIsStillStudying(!isStillStudying);
              }}
            />
            <label htmlFor={`stuEndPresent${eduId}`}>Still study here</label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="half-row">
          <label htmlFor={`stuLocation${eduId}`}>Institution location</label>
          <input
            value={currentEduInfo?.stuLocation}
            type="text"
            id={`stuLocation${eduId}`}
            maxLength={50}
            onChange={(e) => submitHandler(e, "stuLocation", eduId)}
          ></input>
        </div>
        <div className="half-row">
          <label htmlFor={`eduAchievement${eduId}`}>Achievements</label>
          <input
            value={currentEduInfo?.eduAchievement}
            type="text"
            id={`eduAchievement${eduId}`}
            maxLength={70}
            onChange={(e) => submitHandler(e, "eduAchievement", eduId)}
          ></input>
        </div>
      </div>
    </Fragment>
  );
}

export default function EduInfo({
  eduInfo,
  setEduInfo,
  isOpen,
  toggleOpen,
  openNext,
}) {
  const btnCollapseLabel = isOpen ? (
    <Icon path={mdiArrowUpDropCircleOutline} size={1} />
  ) : (
    <Icon path={mdiArrowDownDropCircleOutline} size={1} />
  );
  const handleRemoveEduPart = (indexToRemove) => {
    const updatedEduInfo = eduInfo.filter(
      (_, index) => index !== indexToRemove
    );
    setEduInfo(updatedEduInfo);
  };
  const maxEduPart = 3;
  return (
    <div className="form-block">
      <button className="block-title" onClick={toggleOpen}>
        <h2>Education</h2>
        <span>{btnCollapseLabel}</span>
      </button>
      {isOpen && (
        <>
          {Array.from({ length: eduInfo.length }, (_, index) => (
            <EduFormPart
              key={index}
              eduInfo={eduInfo}
              setEduInfo={setEduInfo}
              eduId={index}
              onRemove={handleRemoveEduPart}
            />
          ))}
          {eduInfo.length < maxEduPart && (
            <button
              className="add btn"
              onClick={() => {
                if (eduInfo.length < maxEduPart) {
                  setEduInfo([
                    ...eduInfo,
                    {
                      eduName: "",
                      stuArea: "",
                      stuLocation: "",
                      stuStart: "",
                      stuEnd: "",
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
