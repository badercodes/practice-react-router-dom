import { Route } from "react-router-dom";
import Footer from "./Footer";
import TopNavBar from "./TopNavBar";

const LayoutRoute = ({ path, component, exact }) => {
  return (
    <>
      <TopNavBar />
      <Route path={path} component={component} exact={exact} />
      <Footer />
    </>
  );
};
export default LayoutRoute;
