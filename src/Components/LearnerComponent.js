import Score from "./Score";

const LearnerComponent = (props) => {
  const learners = props.learners;
  return (
    <div>
      {learners.map((learner) => (
        <div key={learner.id}>
          <h2>{learner.name}</h2>
          <p>{learner.bio}</p>
          <h3>Scores:</h3>
          <ul>
            {learner.scores.map((score, index) => (
              <li key={index}>
                <Score score={score} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LearnerComponent;
