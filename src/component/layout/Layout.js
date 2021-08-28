import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { Container } from "react-bootstrap";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <Container>{props.children}</Container>
    </div>
  );
}

export default Layout;
