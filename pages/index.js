import Menu from "../src/components/commons/Menu";
import Footer from "../src/components/commons/Footer";
import Main from '../src/components/commons/Main'
export default function Home() {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Menu />
      <Main />
      <Footer />
    </div>
  );
}
