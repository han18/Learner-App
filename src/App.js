import { learnerData } from "./data/learnerData";
import { useState } from "react";
import "./App.css";
import LearnerComponent from "./Components/LearnerComponent";

function App() {
  // creating the state
  const [learners, setLearners] = useState(learnerData);

  return (
    <div className="body">
      <h1>Learner Data:</h1>
      <LearnerComponent learners={learners} />
    </div>
  );
}

export default App;
