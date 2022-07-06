import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import FourOFour from "./FourOFour";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/contact" component={Contact} exact={true} />
          <Route path="/" component={FourOFour} exact={false} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
