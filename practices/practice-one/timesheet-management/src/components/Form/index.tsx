import React, { useEffect, useState } from 'react';
import { DROPDOWN_OPTIONS } from 'src/constants/dropdownOption';
import { DropdownOption } from 'src/interfaces/DropdownOption';
import Button from 'components/Button';
import DropdownMenu from 'components/DropdownMenu';
import Input from 'components/Input';

interface IForm {
  hours: string;
  comments: string;
  records: string;
}

const getFormValues = () => {
  const storeValues = localStorage.getItem('time-sheet');
  if (!storeValues)
    return {
      hours: '',
      comments: '',
      records: DROPDOWN_OPTIONS[0].value
    };
  return JSON.parse(storeValues);
};

const Form = (): React.ReactElement => {
  const [values, setValues] = useState<IForm>(getFormValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((preValues) => ({
      ...preValues,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('time-sheet', JSON.stringify(values));
  };

  return (
    <>
      <form className="grid grid-cols-6 pb-8" onSubmit={handleSubmit}>
        <div className="col-span-2 row-start-2">
          <label>Hours</label>
          <Input name="hours" type="text" size="md" value={values.hours} onChange={handleChange} />
        </div>

        <div className="col-start-3 col-span-3 mb-5">
          <label>Records</label>
          <DropdownMenu options={DROPDOWN_OPTIONS} onChange={handleChange}/>
        </div>

        <div className="row-start-2 col-span-4">
          <label>Comments</label>
          <textarea
            className="form-control block w-full px-3 py-1.5 text-baseb font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="comments"
            value={values.comments}
            onChange={handleChange}
          />
        </div>
        <div className='row-start-3 col-start-6 mt-4'>
          <Button size="md" bgColor="primary" textContent="Submit" />
        </div>
      </form>
    </>
  );
};

export default Form;
