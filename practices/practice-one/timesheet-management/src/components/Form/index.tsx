import React from 'react';
import { DROPDOWN_OPTIONS } from 'src/constants/dropdownOption';
import Button from 'components/Button';
import DropdownMenu from 'components/DropdownMenu';
import Input from 'components/Input';
import { StorageService } from 'src/helpers/localStore';

const Form = (): React.ReactElement => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const hours = data.get('hours');
    const comments = data.get('comments');
    const records = data.get('records');

    const timesheet = {
      hours,
      comments,
      records
    };

    StorageService.set('time-sheet', timesheet)
  };

  return (
    <>
      <form className="grid grid-cols-6 pb-8" onSubmit={handleSubmit}>
        <div className="col-span-2 row-start-2">
          <label>Hours</label>
          <Input name="hours" type="text" size="md" />
        </div>

        <div className="col-start-3 col-span-3 mb-5">
          <label>Records</label>
          <DropdownMenu name="records" options={DROPDOWN_OPTIONS} />
        </div>

        <div className="row-start-2 col-span-4">
          <label>Comments</label>
          <textarea
            className="form-control block w-full px-3 py-1.5 text-baseb font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="comments"
          />
        </div>
        <div className="row-start-3 col-start-6 mt-4">
          <Button size="md" bgColor="primary" textContent="Submit" />
        </div>
      </form>
    </>
  );
};

export default Form;
