import { learnerData } from "./data/learnerData";
import { useState } from "react";
import "./App.css";
import LearnerComponent from "./Components/Learner";

function App() {
  const [learners, setLearners] = useState(learnerData);

  return (
    <div>
      <h1>Learner Data:</h1>
      <LearnerComponent learners={learners} />
    </div>
  );
}

export default App;
