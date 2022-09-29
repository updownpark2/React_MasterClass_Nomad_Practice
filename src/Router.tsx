import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./routes/Detail";
import Main from "./routes/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinid">
          <Detail />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
