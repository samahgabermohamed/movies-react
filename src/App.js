import "./App.css";
import MoviesDetails from "./pages/Movies";
import AddUser from "./pages/AddUser";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Login from "./pages/Login";
import "./loginForm.css";
import watchMovie from "./pages/watchMovie";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Switch>
          <Route path={"/"} exact component={MoviesDetails} />
          <Route path={"/Movies"}exact component={MoviesDetails} />
          <Route path={"/add-user"} exact component={AddUser} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/watchMovie/:id"} exact component={watchMovie} />
          <Route path={"*"} component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
