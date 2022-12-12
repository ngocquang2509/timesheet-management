import Button from 'components/Button';
import Form from 'components/Form';

interface IModal {
  onCloseModal: () => void;
}

const Modal = ({ onCloseModal }: IModal) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-5 rounded w-3/5">
        <div className="text-right mb-7">
          <Button size="sm" bgColor="primary" textContent="Close" onClick={onCloseModal} />
          <Button size="sm" bgColor="danger" textContent="Delete" onClick={onCloseModal} />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Modal;
