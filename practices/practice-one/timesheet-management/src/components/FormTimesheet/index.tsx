import React, { useState } from 'react';
import { DROPDOWN_OPTIONS } from 'src/constants/dropdownOption';
import Button from 'components/Button';
import DropdownMenu from 'components/DropdownMenu';
import Input from 'components/Input';
import { ITimesheet } from 'src/interfaces/timesheet';
import { validationTimesheet } from 'src/helpers/validation';

const FormTimesheet = ({
  handleFormSubmit
}: {
  handleFormSubmit: (timesheet: ITimesheet) => void;
}): React.ReactElement => {
  const [errorMsgs, setErrorMsgs] = useState({ hour: '', comment: '' });

  const getData = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const hour: number = +(data.get('hours') || '');
    const comment: string = data.get('comments')?.toString() || '';
    const record: string = data.get('records')?.toString() || '';

    const timesheet: ITimesheet = {
      id: new Date().getTime().toString(),
      hour,
      comment,
      record,
      createdAt: new Date().toISOString()
    };

    const formDataErrorMsgs = validationTimesheet(timesheet);
    if (formDataErrorMsgs) {
      setErrorMsgs(formDataErrorMsgs);
      return;
    }

    handleFormSubmit(timesheet);
  };

  return (
    <>
      <form className="grid grid-cols-6" onSubmit={getData}>
        <div className="col-span-2 row-start-2">
          <label>Hours</label>
          <Input name="hours" type="number" size="md" required />
          <p className="text-red-400">{errorMsgs.hour}</p>
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
            minLength={50}
            maxLength={500}
            required
          />
          <p className="text-red-400">{errorMsgs.comment}</p>
        </div>
        <div className="row-start-3 col-start-6 mt-4 w-full text-right">
          <Button type="submit" size="sm" bgColor="primary" textContent="Submit" />
        </div>
      </form>
    </>
  );
};

export default FormTimesheet;
