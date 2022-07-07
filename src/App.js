import { BrowserRouter, Switch } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import FourOFour from "./FourOFour";
import LayoutRoute from "./LayoutRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <LayoutRoute path="/" exact={true} component={Home} />
          <LayoutRoute path="/login" exact={true} component={Login} />
          <LayoutRoute path="/contact" exact={true} component={Contact} />
          <LayoutRoute path="/" exact={false} component={FourOFour} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
