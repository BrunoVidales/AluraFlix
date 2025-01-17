import Form from '../form/Form';

const Modal = ({ isOpen, closeModal }) => {
    if(!isOpen) return null;

  return (
    <Form />
  );
};

export default Modal;
