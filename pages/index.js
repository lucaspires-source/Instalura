import Menu from "../src/components/commons/Menu";
import Footer from "../src/components/commons/Footer";
import Main from "../src/components/commons/Main";
import { Box } from "../src/components/foundation/layout/Box";
export default function Home() {
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Menu />
      <Main />
      <Footer />
    </Box>
  );
}
