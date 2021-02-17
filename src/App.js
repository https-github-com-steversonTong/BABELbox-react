import "./App.css";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <div>
        <Wrapper classes="h-screen w-screen bg-blue-200 flex flex-col justify-center">
          {/* Switch statement for the router. */}
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about-us" component={AboutUs} />
            {/* Render this if no other page was found. */}
            <Route component={PageNotFound} />
          </Switch>
        </Wrapper>
        
      </div>
    </Router>
  );
}

export default App;
