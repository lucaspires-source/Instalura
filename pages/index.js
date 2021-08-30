import React from 'react';
import Footer from '../src/components/commons/Footer';
import Main from '../src/components/commons/Main';
import SEO from '../src/components/commons/SEO';
import { Box } from '../src/components/foundation/layout/Box';

export default function Home() {
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <SEO headTitle="Home" />
      <Main />
      <Footer />
    </Box>
  );
}
