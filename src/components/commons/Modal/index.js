import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './styles';

const Modal = ({ isOpen, onClose }) => (
  <ModalWrapper
    isOpen={isOpen}
    onClick={() => {
      onClose();
    }}
  >
    Um modal
  </ModalWrapper>
);

export default Modal;
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
