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
    birthday: "2001-01-03",
    imageSrc: "./src/assets/avatar-holder.svg",
  });
  const [eduInfo, setEduInfo] = useState([
    {
      eduName: "The Odin Project",
      stuArea: "Full Stack Javascript",
      stuStart: "2024-09",
      stuEnd: "2025-06",
      stuLocation: "Online",
      eduAchievement: "Made it through JS",
    },
  ]);
  const [practicalInfo, setPracticalInfo] = useState([
    {
      company: "My own startup",
      position: "CEO",
      workStart: "2024-09",
      workEnd: "2025-06",
      jobActions: "Did all the hard stuff\nEventually started looking for job",
    },
  ]);
  const [skillsInfo, setSkillsInfo] = useState(
    "Git\nJS\nHTML\nCSS\nReact\nJest"
  );
  const [langsInfo, setLangsInfo] = useState([
    {
      lang: "English",
      level: "Fluent",
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
