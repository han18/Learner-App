import Score from "./Score";
import CreateLearnerForm from "./CreateLearnerForm";
import { useContext } from "react";
import { NameTheme } from "../Context/NameTheme";

const LearnerComponent = (props) => {
  const learners = props.learners;
  const newName = useContext(NameTheme);

  const handleDelete = (learnerId) => {
    // Call the onDeleteLearner function passed as a prop
    if (props.onDeleteLearner) {
      props.onDeleteLearner(learnerId);
    }
  };
  return (
    <div>
      {learners.map((learner) => (
        <div key={learner.id}>
          <h2>{learner.name}</h2>
          <p>{learner.bio}</p>
          <h3>Learner Scores:</h3>
          <ul>
            {learner.scores.map((score, index) => (
              <li key={index}>
                <Score score={score} />
              </li>
            ))}
          </ul>
          <button onClick={() => handleDelete(learner.name)}>
            Delete Learner
          </button>
          <p>{`Hello ${newName}`}</p>
        </div>
      ))}
    </div>
  );
};

export default LearnerComponent;
