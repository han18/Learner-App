import { learnerData } from "./data/learnerData";
import { useState, useEffect, useContext } from "react";
import "./App.css";
import LearnerComponent from "./Components/LearnerComponent";
import CreateLearnerForm from "./Components/CreateLearnerForm";
import { NameTheme } from "./Context/NameTheme";

function App() {
  // creating the state variable
  const [learners, setLearners] = useState(learnerData);
  const [user, setUser] = useState("Hanan");

  // i implemented this code to understand useEffect
  useEffect(() => {
    console.log("this is a log for use effect");
  }, []);

  return (
    <div className="body">
      <h1>Learner Data:</h1>
      <CreateLearnerForm setLearners={setLearners} learners={learners} />
      <br></br>
      <NameTheme.Provider value={user}>
        <LearnerComponent learners={learners} />
      </NameTheme.Provider>
    </div>
  );
}

export default App;
