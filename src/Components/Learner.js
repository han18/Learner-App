// import React, { useState } from "react";
// import { learnerData } from "../data/learnerData";

const LearnerComponent = (props) => {
  const learners = props.learners;
  return (
    <div>
      <h1>Learners</h1>
      {learners.map((learner) => (
        <div key={learner.id}>
          <h2>{learner.name}</h2>
          <p>{learner.bio}</p>
          <h3>Scores:</h3>
          <ul>
            {learner.scores.map((score, index) => (
              <li key={index}>
                Date: {score.date}, Score: {score.score}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LearnerComponent;
