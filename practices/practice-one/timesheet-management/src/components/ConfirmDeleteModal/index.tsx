import Button from '../Button';

interface IConfirmModal {
  onDelete: (id: string) => void;
  onCloseConfirmModal: () => void;
  id: string;
}
const ConfirmDeleteModal = ({
  id,
  onDelete,
  onCloseConfirmModal
}: IConfirmModal): React.ReactElement => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white py-5 rounded w-2/5 flex flex-col justify-center items-center ">
        <p className="my-5 font-medium">Are your sure to delete this timesheet?</p>
        <div className="w-1/2 flex justify-evenly">
          <Button size="sm" bgColor="danger" textContent="Close" onClick={onCloseConfirmModal} />
          <Button size="sm" bgColor="primary" textContent="Sure" onClick={() => onDelete(id)} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
