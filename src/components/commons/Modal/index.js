import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './styles';

const Modal = ({ isOpen, onClose, children }) => (
  <ModalWrapper
    isOpen={isOpen}
    onClick={(e) => {
      const isSafeArea = e.target.closest('[data-modal-safe-area="true"]');
      if (!isSafeArea) {
        onClose();
      }
    }}
  >
    {children}
  </ModalWrapper>
);

export default Modal;
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
