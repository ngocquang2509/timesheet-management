import { useState } from 'react';
import Button from 'components/Button';
import Header from 'layouts/Header';
import ModalFormTimesheet from 'src/components/ModalFormTimesheet';
import { storageHelper } from 'src/helpers/localStore';
import { ITimesheet } from 'src/interfaces/timesheet';
import TimesheetItem from 'src/components/TimesheetItem';

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
        <Button
          size="lg"
          bgColor="primary"
          textContent="Create"
          onClick={() => setIsOpenModal(true)}
        />
      </div>
      {isOpenModal && (
        <ModalFormTimesheet onCloseModal={handleCloseModal} handleFormSubmit={handleFormSubmit} />
      )}
      <ul>
        {storageHelper.get('time-sheet')?.map((item: ITimesheet) => (
          <TimesheetItem
            key={item.id}
            id={item.id}
            hours={item.hours}
            comments={item.comments}
            records={item.records}
            createdAt={item.createdAt}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
