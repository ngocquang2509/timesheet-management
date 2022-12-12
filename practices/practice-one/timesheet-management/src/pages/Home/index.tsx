import { useState } from 'react';
import Button from 'components/Button';
import Header from 'layouts/Header';
import Modal from 'src/components/Modal';

const Home = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => setIsOpen(false)
  return (
    <>
      <Header />
      <Button size="lg" bgColor="primary" textContent="Create" onClick={() => setIsOpen(true)}/>
      {isOpen && <Modal onCloseModal={handleClose}/>}
    </>
  );
};

export default Home;
