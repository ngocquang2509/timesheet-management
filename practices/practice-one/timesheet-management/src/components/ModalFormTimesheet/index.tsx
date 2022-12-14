import Button from 'components/Button';
import FormTimesheet from 'src/components/FormTimesheet';
import { FormEventHandler } from 'react';
import { ITimesheet } from 'src/interfaces/timesheet';

interface IModalFormTimesheet {
  onCloseModal: () => void;
  handleFormSubmit: (timesheet: ITimesheet) => void;
}

const ModalFormTimesheet = ({ onCloseModal, handleFormSubmit }: IModalFormTimesheet) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-5 rounded w-3/5">
        <div className="text-right mb-5">
          <Button size="sm" bgColor="danger" textContent="Close" onClick={onCloseModal} />
        </div>
        <FormTimesheet handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default ModalFormTimesheet;
