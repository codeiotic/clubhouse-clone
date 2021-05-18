import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirmed from "./pages/CodeConfirmed";
import AllowNotification from "./pages/AllowNotification";

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/invite" component={PhoneConfirmation} />
        <Route exact path="/code_confirmed" component={CodeConfirmed} />
        <Route exact path="/allow_notification" component={AllowNotification} />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
