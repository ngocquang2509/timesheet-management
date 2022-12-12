import React, { useState } from 'react';
import { DROPDOWN_OPTIONS } from 'src/constants/dropdownOption';
import { DropdownOption } from 'src/interfaces/DropdownOption';
import Button from 'components/Button';
import DropdownMenu from 'components/DropdownMenu';
import Input from 'components/Input';

interface IForm {
  hours: string;
  comments: string;
  records: DropdownOption
}

const Form = (): React.ReactElement => {
  const [values, setValues] = useState<IForm>({
    hours: '',
    comments: '',
    records: DROPDOWN_OPTIONS
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //TODO: handle submit form 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //TODO: handle input change
  };

  return (
    <>
      <form className="grid grid-cols-6 pb-8" onSubmit={handleSubmit}>
        <div className="col-span-2 row-start-2">
          <label>Hours</label>
          <Input name='hours' type="text" size="md" value={values.hours} onChange={handleChange} />
        </div>

        <div className="col-start-3 col-span-3 mb-5">
          <label>Records</label>
          <DropdownMenu options={DROPDOWN_OPTIONS} />
        </div>

        <div className="row-start-2 col-span-4">
          <label>Comments</label>
          <textarea
            className="form-control block w-full px-3 py-1.5 text-baseb font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name='comments'
            value={values.comments}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
