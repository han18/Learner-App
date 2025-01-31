import { useState } from "react";
import Button from "./Button";

function CreateLearnerForm({ setLearners, learners }) {
  const [newLearner, setNewLearner] = useState({
    name: "",
    bio: "",
    scores: [],
  });

  // handles the changes on the inputs
  const handleChange = (e) => {
    setNewLearner({
      ...newLearner,
      // .name is the property of the input for all labels
      [e.target.name]: e.target.value,
    });
  };

  // handles the form submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newLearner);
    // adds new learners to the learner array
    setLearners([newLearner, ...learners]);
    // resets the local new object learner
    setNewLearner({
      name: "",
      bio: "",
      scores: [],
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={newLearner.name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>

        <label htmlFor="bio">Bio: </label>
        <textarea
          name="bio"
          id="bio"
          value={newLearner.bio}
          onChange={handleChange}
        ></textarea>
        <br></br>
        <br></br>

        <Button type="submit">Create new Learner</Button>
        {/* <button type="button">Create new Learner</button> */}
        <hr></hr>
      </form>
    </div>
  );
}

export default CreateLearnerForm;
