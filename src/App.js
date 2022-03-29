// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./Form";

const initialFormValues = {
  //text inputs
  username: "",
  email: "",
  //drop down
  role: "",
};

function App() {
  const [friends, setFriends] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [formError, setFormError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    setFriends([formValues, ...friends]);
  };

  return (
    <div className="container">
      <h1>Form App</h1>
      <p className="error"></p>
      <Form values={formValues} update={updateForm} submit={submitForm} />

      {friends.map((friend, idx) => {
        return (
          <div key={idx}>
            {friend.name}, {friend.role},{friend.email}
          </div>
        );
      })}
    </div>
  );
}

export default App;
