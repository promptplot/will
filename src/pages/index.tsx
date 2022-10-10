import { useState } from "react";
import GetStarted from "./GetStarted";
import TheWill from "./TheWill";
import FinalArrangements from "./FinalArrangements";
import Witnesses from "./Witnesses";



function App() {

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mi: "",
    month: "",
    date: "",
    year: "",
    password: "",
    nickname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    nationality: "",
    zipcode: "",
    highestQualification: "",
    occupation: "",
    about: "",
    relation: "",
    wishes: "",
    cremation: "",
    ceremony: "",
    customMessage: ""
  });

  const componentList = [
    <GetStarted
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <TheWill
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <FinalArrangements
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
    <Witnesses
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
    />,
  ];

  return (
    <div className="App bg-gray-200 ">
      <div className="progress-bar mt-8">
      <div style={{width: page === 0? "25%": page === 1? "50%" : page === 2? "75%" : "100%"}}></div>
    </div> 
    <br/>
    <br/>
      <div>{componentList[page]}</div>
    </div>
  );
}

export default App