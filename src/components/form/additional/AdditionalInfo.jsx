import Icon from "@mdi/react";
import {
  mdiPlus,
  mdiDelete,
  mdiArrowDownDropCircleOutline,
  mdiArrowUpDropCircleOutline,
} from "@mdi/js";
// import { useState } from "react";
import { Fragment } from "react";
function AdditionalFormPart({ langsInfo, setLangsInfo, langId, onRemove }) {
  const currentLang = langsInfo[langId];
  function submitHandler(e, paramName, langId) {
    const newArray = langsInfo.map((info, index) => {
      if (index === langId) {
        return {
          ...info,
          [paramName]: e.target.value,
        };
      } else return info;
    });
    setLangsInfo(newArray);
  }
  function removeHandler(langId) {
    onRemove(langId);
  }

  return (
    <Fragment key={langId}>
      <div className="form-row lang">
        <div className="half-row lang">
          <label htmlFor={`lang${langId}`}>Language</label>
          <input
            value={currentLang?.lang}
            type="text"
            id={`lang${langId}`}
            onChange={(e) => submitHandler(e, "lang", langId)}
          ></input>
        </div>
        <div className="half-row">
          <label htmlFor={`level${langId}`}>Level</label>
          <select
            id={`level${langId}`}
            defaultValue={
              langId === 0 && currentLang.level === "fluent" ? "fluent" : ""
            }
            onChange={(e) => submitHandler(e, "level", langId)}
          >
            <option value="" disabled style={{ display: "none" }}></option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="fluent">Fluent</option>
          </select>
        </div>
        {langId > 0 && (
          <button
            className="delete btn"
            onClick={() => {
              removeHandler(langId);
            }}
          >
            <Icon path={mdiDelete} size={1} />
          </button>
        )}
      </div>
    </Fragment>
  );
}

export default function AdditionalInfo({
  skillsInfo,
  langsInfo,
  setSkillsInfo,
  setLangsInfo,
  isOpen,
  toggleOpen,
}) {
  const btnCollapseLabel = isOpen ? (
    <Icon path={mdiArrowUpDropCircleOutline} size={1} />
  ) : (
    <Icon path={mdiArrowDownDropCircleOutline} size={1} />
  );
  const handleRemoveLangPart = (indexToRemove) => {
    const updatedAdditionalInfo = langsInfo.filter(
      (_, index) => index !== indexToRemove
    );
    setLangsInfo(updatedAdditionalInfo);
  };
  const maxLangPart = 5;
  return (
    <div className="form-block">
      <button className="block-title" onClick={toggleOpen}>
        <h2>Skills</h2>
        <span>{btnCollapseLabel}</span>
      </button>
      {isOpen && (
        <>
          <div className="form-row">
            <label htmlFor="skills">Skills</label>
            <textarea
              placeholder="List your skills, separated by ','"
              value={skillsInfo}
              id="skills"
              onChange={(e) => setSkillsInfo(e.target.value)}
            ></textarea>
          </div>
          <legend className="lang-h">Languages</legend>
          {Array.from({ length: langsInfo.length }, (_, index) => (
            <AdditionalFormPart
              key={index}
              langsInfo={langsInfo}
              setLangsInfo={setLangsInfo}
              langId={index}
              onRemove={handleRemoveLangPart}
            />
          ))}
          {langsInfo.length < maxLangPart && (
            <button
              className="add btn"
              onClick={() => {
                if (langsInfo.length < maxLangPart) {
                  setLangsInfo([
                    ...langsInfo,
                    {
                      lang: "",
                      level: "",
                    },
                  ]);
                }
              }}
            >
              <Icon path={mdiPlus} size={1} />
            </button>
          )}
          {/* <button onClick={editHandler}>Edit</button> */}
        </>
      )}
    </div>
  );
}
