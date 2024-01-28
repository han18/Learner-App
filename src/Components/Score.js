function Score(props) {
  const scoreData = props.score;
  return (
    <div>
      <h3>
        Date: {scoreData.date}, <br></br>Score: {scoreData.score}
      </h3>
    </div>
  );
}

export default Score;

// must import to the learner page
