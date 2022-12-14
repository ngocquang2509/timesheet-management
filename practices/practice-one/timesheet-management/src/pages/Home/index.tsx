import { useState } from 'react';
import Button from 'components/Button';
import Header from 'layouts/Header';
import ModalFormTimesheet from 'src/components/ModalFormTimesheet';
import { storageHelper } from 'src/helpers/localStore';
import { ITimesheet } from 'src/interfaces/timesheet';

const Home = (): React.ReactElement => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => setIsOpenModal(false);

  const handleFormSubmit = (timesheet: ITimesheet) => {
    
      const listTimesheet: ITimesheet[] = storageHelper.get('time-sheet') || [];
      listTimesheet.push(timesheet);
      storageHelper.set('time-sheet', listTimesheet);
      setIsOpenModal(false);
  };

  return (
    <div className="m-auto">
      <Header />
      <div className="flex justify-evenly my-3">
        <Button size="lg" bgColor="primary" textContent="Create" onClick={() => setIsOpenModal(true)} />
      </div>
      {isOpenModal && (
        <ModalFormTimesheet onCloseModal={handleCloseModal} handleFormSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Home;
