import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirmed from "./pages/CodeConfirmed";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route
        path={[
          "/",
          "/invite",
          "/get_username",
          "/code_confirmed",
          "/allow_notification",
        ]}
        exact
      >
        <PlanLayout>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/invite" component={PhoneConfirmation} />
            <Route exact path="/code_confirmed" component={CodeConfirmed} />
            <Route
              exact
              path="/allow_notification"
              component={AllowNotification}
            />
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={["/home"]}>
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
