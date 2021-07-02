import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Page404 from "./Components/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />

          <Route exact path="/projects" component={Projects} />

          <Route exact path="/skills" component={Skills} />

          <Route exact path="/contact" component={Contact} />

          <Route component={Page404} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
