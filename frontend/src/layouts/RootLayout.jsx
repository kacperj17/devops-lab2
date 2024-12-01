import Container from "react-bootstrap/Container";
import NavBarMenu from "../components/NavBarMenu";
import Footer from "../components/Footer";

function RootLayout({ items, children }) {
  return (
    <>
      <NavBarMenu items = {items}></NavBarMenu>
      <Container style={{minHeight: "calc(100vh - 160px)", paddingTop: "20px"}}>{children}</Container>
      <Footer></Footer>
    </>
  );
}

export default RootLayout;
