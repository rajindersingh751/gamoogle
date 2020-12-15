//components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Router
import { Route } from "react-router-dom";

//global styles
import GlobalStyle from "./components/GlobalStyles";

function App() {
  return (
    <div>
      <Nav />
      <GlobalStyle />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
