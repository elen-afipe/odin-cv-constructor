import "./App.scss";
import { useState } from "react";
import Form from "./components/form/form";
import Cv from "./components/cv-display/Cv";
function App() {
  const [generalInfo, setGeneralInfo] = useState({
    position: "Frontend Developer",
    name: "Web",
    surname: "Dev",
    email: "my_mail@mail.com",
    phone: "+123456789",
    location: "City, country",
    birthday: "2021-01-03",
    imageSrc: "./src/assets/react.svg",
  });
  const [eduInfo, setEduInfo] = useState([
    {
      eduName: "The Odin Project",
      stuArea: "Full Stack Javascript",
      stuStart: "2024-09-01",
      stuEnd: "2025-06-23",
      stuLocation: "Online",
      eduAchievement: "Made it through JS",
    },
  ]);
  const [practicalInfo, setPracticalInfo] = useState([
    {
      company: "My own startup",
      position: "CEO",
      workStart: "2024-09-01",
      workEnd: "2025-06-23",
      jobActions: "Did all the hard stuff, slept",
    },
  ]);
  const [skillsInfo, setSkillsInfo] = useState(
    "Git, JS, HTML, CSS, React, Jest"
  );
  const [langsInfo, setLangsInfo] = useState([
    {
      lang: "English",
      level: "fluent",
    },
  ]);
  return (
    <>
      <Form
        data={{ generalInfo, eduInfo, practicalInfo, skillsInfo, langsInfo }}
        handlers={{
          setGeneralInfo,
          setEduInfo,
          setPracticalInfo,
          setSkillsInfo,
          setLangsInfo,
        }}
      ></Form>
      <Cv
        data={{ generalInfo, eduInfo, practicalInfo, skillsInfo, langsInfo }}
      ></Cv>
    </>
  );
}

export default App;
