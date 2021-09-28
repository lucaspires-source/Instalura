/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Footer from '../../commons/Footer';
import { Box } from '../../foundation/layout/Box';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';
import { WebsitePageContext } from './context';

export { WebsitePageContext };
const WebsitePageWrapper = ({
  children, seoProps, menuProps, messages,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          (setModalOpen(!isModalOpen));
        },
        getCMSContent: (cmsKey) => {
          get(messages, cmsKey);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box
        display="flex"
        flexDirection="column"
        flex="1"
        flexWrap="wrap"
        justifyContent="space-between"
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
        {menuProps.display ? <Menu onCadastrarClick={() => (setModalOpen(!isModalOpen))} /> : ''}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>

  );
};

export default WebsitePageWrapper;
WebsitePageWrapper.defaultProps = {
  seoProps: {},
  menuProps: {
    display: true,
  },
  messages: {},
};
WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
