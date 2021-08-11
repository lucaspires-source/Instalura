/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import FormContent from '../FormContent';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';

// eslint-disable-next-line react/prop-types
const FormCadastro = ({ props }) => (

  <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
    <Grid.Col display="flex" paddingRight={{ md: '0' }} flex={1} value={{ xs: 12, md: 5, lg: 4 }}>
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        padding={{
          xs: '16px',
          md: '85px',
        }}
        backgroundColor="white"
        {...props}
      >
        <FormContent />
      </Box>
    </Grid.Col>
  </Grid.Row>
);
export default FormCadastro;
