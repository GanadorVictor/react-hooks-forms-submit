import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

   
    const newErrors = [];
    if (firstName.trim() === "") {
      newErrors.push("First name is required!");
    }
    if (lastName.trim() === "") {
      newErrors.push("Last name is required!");
    }

    
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    
    console.log("Form submitted with data:", { firstName, lastName });

    
    setFirstName("");
    setLastName("");
   
    setErrors([]);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      
      {errors.length > 0 &&
        errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))}
    </div>
  );
}

export default Form;
