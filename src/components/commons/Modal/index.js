import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './styles';

const Modal = ({ isOpen }) => (<ModalWrapper isOpen={isOpen}>Um modal</ModalWrapper>);

export default Modal;
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
