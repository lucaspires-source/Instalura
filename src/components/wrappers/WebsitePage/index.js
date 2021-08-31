import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import { Box } from '../../foundation/layout/Box';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';

const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

const WebsitePageWrapper = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <WebsitePageContext.Provider>
      <Box
        display="flex"
        flexDirection="column"
        flex="1"
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        >
          {
          (props) => (
            <FormCadastro props={props} />
          )
        }

        </Modal>
        <Menu onCadastrarClick={() => (setModalOpen(!isModalOpen))} />
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>

  );
};

export default WebsitePageWrapper;

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
