import React, { useState } from "react";

const NewForm = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <label>Name</label>
      <input type="text" value={value} onChange={handleInputChange} />
    </>
  );
};

export default NewForm;
