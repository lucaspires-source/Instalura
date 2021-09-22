import React from 'react';
import WebsitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { Box } from '../src/components/foundation/layout/Box';
import { Grid } from '../src/components/foundation/layout/Grid';
import Text from '../src/components/foundation/Text';

const PageSobre = () => (
  <Box
    display="flex"
    flexDirection="column"
    flex={1}
  >
    <Grid.Container>
      <Grid.Row
        marginTop={{ xs: '32px', md: '120px' }}
        flex="1"
      >
        <Grid.Col
          value={{ xs: 12, md: 6, lg: 6 }}
          offset={{ md: 2 }}
          flex={1}
        >
          <Text
            variant="title"
            tag="h2"
            color="tertiary.main"
          >
            Pagina Sobre
          </Text>
          <Box>
            Conteudo da Pagina Sobre
          </Box>
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  </Box>
);

export default WebsitePageHOC(PageSobre, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});
