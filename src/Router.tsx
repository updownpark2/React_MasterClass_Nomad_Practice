import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:Second">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
