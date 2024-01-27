function Score(props) {
  const score = props.score;
  return (
    <div>
      Date: {score.date}, Score: {score.score}
    </div>
  );
}

export default Score;

// must import to the learner page
