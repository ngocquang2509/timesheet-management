import { useState } from 'react';
import Button from 'components/Button';
import Header from 'layouts/Header';
import ModalFormTimesheet from 'src/components/ModalFormTimesheet';
import { storageHelper } from 'src/helpers/localStore';
import { ITimesheet } from 'src/interfaces/timesheet';
import TimesheetItem from 'src/components/TimesheetItem';
import ConfirmDeleteModal from 'src/components/ConfirmDeleteModal';
import { sortedTimesheetlist } from 'src/helpers/sortTimesheet';

const Home = (): React.ReactElement => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [listTimesheet, setListTimesheet] = useState(storageHelper.get('time-sheet'));
  const [sortOption, setSortOption] = useState({ hour: false, createAt: true });

  const listTimesheetSorted = sortedTimesheetlist(listTimesheet, sortOption);

  const onSortTimesheet = () => {
    setSortOption((prev) => {
      return {
        hour: !prev.hour,
        createAt: !prev.createAt
      };
    });
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const toggleConfirmModal = () => {
    setIsOpenConfirmModal(!isOpenConfirmModal);
  };

  const handleFormSubmit = (timesheet: ITimesheet) => {
    listTimesheet.push(timesheet);
    storageHelper.set('time-sheet', listTimesheet);
    setListTimesheet(listTimesheet);
    setIsOpenModal(false);
  };

  const handleDeleteTimesheet = (id: string) => {
    const newListTimesheet = listTimesheet.filter((item: ITimesheet) => item.id !== id);
    storageHelper.set('time-sheet', newListTimesheet);
    setListTimesheet(newListTimesheet);
    setIsOpenConfirmModal(false);
  };

  const onOpenConfirmModal = (id: string) => {
    toggleConfirmModal();
    setCurrentId(id);
  };

  return (
    <div className="m-auto">
      <Header />
      <div className="flex justify-evenly my-3">
        <Button size="lg" bgColor="primary" textContent="Create" onClick={toggleModal} />
        <Button
          size="lg"
          bgColor="primary"
          textContent={sortOption.hour ? 'Sort by CreateAt' : 'Sort by Hours'}
          onClick={onSortTimesheet}
        />
      </div>
      {isOpenModal && (
        <ModalFormTimesheet onCloseModal={toggleModal} handleFormSubmit={handleFormSubmit} />
      )}
      <ul>
        {listTimesheetSorted.map((item: ITimesheet) => (
          <TimesheetItem
            key={item.id}
            id={item.id}
            hour={item.hour}
            comment={item.comment}
            record={item.record}
            createdAt={item.createdAt}
            onOpenConfirmModal={onOpenConfirmModal}
          />
        ))}
      </ul>
      {isOpenConfirmModal && (
        <ConfirmDeleteModal
          id={currentId}
          onDelete={handleDeleteTimesheet}
          onCloseConfirmModal={toggleConfirmModal}
        />
      )}
    </div>
  );
};

export default Home;
