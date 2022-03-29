import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    // const name = evt.target.name;
    // const { value } = evt.target.value;
    const { name, value } = evt.target;

    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Name:
          <input
            name="name"
            value={values.name}
            placeholder="Type a name here"
            maxLength="55"
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            placeholder="Type an email here"
            onChange={onChange}
          />
        </label>
        <label>
          Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">--Select a Tech Role--</option>
            <option value="Full Stack Engineer">Full Stack Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">FrontEnd Engineer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Program Manager">ProGram Manager</option>
            <option value="TechLead">Tech Lead</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
