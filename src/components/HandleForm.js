import React, { useRef } from "react";
import Form from "./Form";

function HandleForm() {
  const formInfo = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInfo.current) {
      const formData = {
        email: formInfo.current.email.value,
        password: formInfo.current.password.value,
      };
      console.log("Submitted Data:", formData);
      
    }
  };

  return (
    <div>
      <Form ref={formInfo} handleSubmit={handleSubmit} />
    </div>
  );
}

export default HandleForm;
