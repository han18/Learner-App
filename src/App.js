import { learnerData } from "./data/learnerData";
import { useState } from "react";
import "./App.css";
import Learner from "./Components/Learner";

function App() {
  const [learners, setLearners] = useState(learnerData);

  return (
    <div>
      <h1>Learner Data:</h1>

      {learners.map((learner) => (
        <h2 key={learner.id}>
          Name: {learner.name}
          <br></br>
          Bio: {learner.bio}
          Scores: {learner.scores.data}
        </h2>
      ))}
      {learners.scores.data.map((learner, next) => {
        <h key={next}>Scores: {learner}</h>;
      })}
    </div>
  );
}

export default App;
