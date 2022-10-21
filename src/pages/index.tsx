import { useState } from "react";
import GetStarted from "./GetStarted";
import TheWill from "./TheWill";
import FinalArrangements from "./FinalArrangements";
import Witnesses from "./Witnesses";
import Navbar from "../components/Navbar";
import { useSession, signIn, signOut, getSession } from 'next-auth/react'


function App() {

  const { data: session, status } = useSession()

  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    mi: "",
    email: "",
    password: "",
    month: "",
    date: "",
    year: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    childrenU18: false,
    bequests: false,
    exFirstName: "",
    exMi: "",
    exLastName: "",
    relationShip: "",
    exEmail: "",
    altExecutor: false,
    trustedRelation1: "",
    trustedRelation2: "",
    trustedRelation3: "",
    trustedEmail1: "",
    trustedEmail2: "",
    trustedEmail3: "",
    wishes: "",
    cremation: "",
    ceremony: "",
    specialRequest: false,
    witnessEmail1: "",
    witnessEmail2: "",
    customMessage: "",

    // nickname: "",
    // nationality: "",
    // highestQualification: "",
    // occupation: "",
    // about: "",
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

  
  if (session) {

    return (
      <div className="App bg-gray-200 ">
        <Navbar />
        <div className="progress-bar mt-32">
          <div style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
        </div>
        <br />
        <br />
        <div>{componentList[page]}</div>
      </div>
    );

  }
  else {
    return (
      <div>
        <p> You are not Signed in!!! </p>
      </div>
    )
  }

}

export default App

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/Login',
      },
    };
  }
  return {
    props: { session },
  };
}